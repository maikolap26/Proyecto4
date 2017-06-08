var model;
var controller;
var vuelos;
var ciudades;
var usuario;
var usuarios;
var numeroVuelo;
var asientosSelec;
var asientos = [];
var cantidad = 0;
var orden = [];
var map;
var markers = [];
var cambio = 0;
var vs;
var pasajeros = [];
var avion;
var idaSelect;
var vuelaSelect;
var avionIda;
var esidaYVuela;
var asientosV= [];
var esPromo = false;


function pageLoad(event) {

    model = new AAMModel();
    vuelos = model.vuelos;
    ciudades = model.ciudades;
    controller = new AAMController(model, window);
    $("#buscar").click(function () {
        controller.buscar();
        controller.buscarVenida();
    });
    $("#goTi").click(function () {
        controller.getAsientos();
    });
    controller.cambioDolar();
    var a = document.getElementById("cancelOrder");
    var b = document.getElementById("goTi");
    var c = document.getElementById("goTi");
    var d = document.getElementById("terminarOrden2");
    var e = document.getElementById("terminarOrden");
    document.getElementById("ida").addEventListener("click", deshabilitarRegreso);
    document.getElementById("idaYvuelta").addEventListener("click", habilitarRegreso);
    document.getElementById("idaYvuelta").checked = true;
    esidaYVuela = true;
    if (a != null) {
        a.addEventListener("click", cancelOrden);
    }
    e.addEventListener("click", doSubmitTiquete);
    d.addEventListener("click", cancelarOrden);
    document.getElementById("terminarOrden2").addEventListener("click", cancelarOrden);
    //llenarDescuentos();
    controller.getPromos();
    $("#datepicker1").datepicker({ minDate: 0 });
    $("#datepicker2").datepicker({ minDate: 0 });
}

function deshabilitarRegreso() {
    normalizar();
    document.getElementById("datepicker2").disabled = true;
    esidaYVuelta= false;
}

function colones(cambio) {
    this.cambio = cambio;
}

function habilitarRegreso() {
    normalizar();
    document.getElementById("datepicker2").disabled = false;
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function vuelos() {
    Proxy.getPromo(function (result) {
        vs = result;
    });
}

function llenarDescuentos() {
    var j=1;
    for (var i = 0; i < model.vs.length; i++) {
        if (model.vs[i].descuento === "1") {
            var imagen = document.createElement("img");
            var image = "img/" + model.vs[i].codigo_vuelo + ".jpg";
            imagen.src = image;//direccion de la imagen 
            imagen.class = 'img-responsive';
            imagen.name = "img" + i;
            imagen.alt = '';
            //document.getElementById("Comprar"+j).addEventListener("click",buscarVPromo);
            var botonPrueba =$( "#"+"Comprar"+j );
            var numerito = i;
            botonPrueba.click(function() {
                esPromo = true;
                buscarVPromo(model.vs[numerito].codigo_vuelo);
            });
            var id = "div" + j;
            j++;
            var actual = document.getElementById(id);
            if (actual !== null)
                document.getElementById("fotos").style.display = "block";
            actual.style.display = "block";
            actual.appendChild(imagen);
        }
    }
}

function buscarVPromo(codigo){
    controller.buscarVPromo(codigo);
}

function llenarSelects() {
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");

    for (var i = 0; i < model.ciudades.length; i++) {
        var option = document.createElement("option");
        option.value = model.ciudades[i].nombre;
        option.innerHTML = model.ciudades[i].nombre;
        origen.appendChild(option);
    }
    for (var i = 0; i < model.ciudades.length; i++) {
        var option = document.createElement("option");
        option.value = model.ciudades[i].nombre;
        option.innerHTML = model.ciudades[i].nombre;
        destino.appendChild(option);
    }
}

function goAsientos() {
    document.getElementById("info").style.display = "none";
    document.getElementById("goTi").style.color = "gray";
    var avionAsi = document.getElementById("avionAsientos");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div2.id = "asientosAvion";
    div1.classList.add("divAvionAsientos");
    var imag = document.createElement("img");
    imag.src = "img/avion.png";
    imag.id = "imag";
    div1.appendChild(imag);
    avionAsi.appendChild(div1);
    var aux = 1;
    for (var i = 0; i < 11; i++) {

        var tr = document.createElement("tr");
        for (var j = 0; j < 15; j++) {
            var td = document.createElement("td");
            if (i == 5) {
                var b = document.createElement("input");
                b.type = "button";
                b.classList.add("asientoV");
                td.appendChild(b);
                tr.appendChild(td);
                b = document.createElement("input");
                b.type = "button";
                b.classList.add("asientoV");
                td.appendChild(b);
                tr.appendChild(td);
            }
            if (i == 0) {
                var b = document.createElement("input");
                b.type = "button";
                b.classList.add("asientoV");
                td.appendChild(b);
                tr.appendChild(td);
            }

            var b = document.createElement("input");
            b.type = "button";
            b.value = aux;
            b.classList.add("asiento");
            td.appendChild(b);
            tr.appendChild(td);
            aux++;


        }
        div2.appendChild(tr);
    }
    avionAsi.appendChild(div2);
}

function mostrarAsientos() {
    document.getElementById("fotos").style.display = "none";
    var numero = numeroVuelo;
    avion = model.buscados[numero].avion;
    document.getElementById("info").style.display = "none";
    crearBotones();
    var avionAsi = document.getElementById("avionAsientos");
    avionAsi.style.display = "block";
    var asientosdelavion = document.getElementById("asientosdelavion");
    var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var bandera = 0;
    for (var i = 0; i < avion.cant_filas; i++) {
        var fila = document.createElement("tr");
        fila.id = i.toString();
        for (var j = 0; j < avion.cant_asiento_fila; j++) {
            var columna = document.createElement("td");
            columna.id = j.toString();
            var b = document.createElement("input");
            if (Math.trunc(avion.cant_asiento_fila / 2) === j && bandera === 0) {
                var c = document.createElement("input");
                c.type = "button";
                c.classList.add("asientoV");
                c.value = "Pasillo";
                c.id = "pasillo";
                columna.id = j.toString() + "p";
                columna.appendChild(c);
                fila.appendChild(columna);
                bandera = 1;
                j = j - 1;
            } else {
                b.type = "button";
                b.value = x[i] + j.toString();
                b.id = x[i] + j.toString()+"ida";
                b.classList.add("asiento");
                columna.id = j.toString();
                b.addEventListener("click", agregaAsiento);
                columna.appendChild(b);
                fila.appendChild(columna);
            }
        }
        bandera = 0;
        asientosdelavion.appendChild(fila);
    }
    var j = 0;
    for (i = 1; i < cantidad + 1; i++) {
        var nombre = document.getElementById("campoN" + i).value;
        var pasaporte = document.getElementById("campoP" + i).value;
        pasajeros[j] = nombre + "," + pasaporte;
        j++;
    }
}

function mostrarAsientosVuelta() {
    document.getElementById("fotos").style.display = "none";
    var numero = vuelaSelect;
    avion = model.buscados[numero].avion;
    document.getElementById("info").style.display = "none";
    crearBotones1();
    document.getElementById("avionAsientos").style.display = "none";
    var avionAsi = document.getElementById("avionAsientos1");
    avionAsi.style.display = "block";
    var asientosdelavion = document.getElementById("asientosdelavion1");
    var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var bandera = 0;
    for (var i = 0; i < avion.cant_filas; i++) {
        var fila = document.createElement("tr");
        fila.id = i.toString();
        for (var j = 0; j < avion.cant_asiento_fila; j++) {
            var columna = document.createElement("td");
            columna.id = j.toString();
            var b = document.createElement("input");
            if (Math.trunc(avion.cant_asiento_fila / 2) === j && bandera === 0) {
                var c = document.createElement("input");
                c.type = "button";
                c.classList.add("asientoV");
                c.value = "Pasillo";
                c.id = "pasillo";
                columna.id = j.toString() + "p";
                columna.appendChild(c);
                fila.appendChild(columna);
                bandera = 1;
                j = j - 1;
            } else {
                b.type = "button";
                b.value = x[i] + j.toString();
                b.id = x[i] + j.toString() + "vuelta";
                b.classList.add("asiento");
                columna.id = j.toString();
                b.addEventListener("click", agregaAsientoV);
                columna.appendChild(b);
                fila.appendChild(columna);
            }
        }
        bandera = 0;
        asientosdelavion.appendChild(fila);
    }
    var j = 0;
    for (i = 1; i < cantidad + 1; i++) {
        var nombre = document.getElementById("campoN" + i).value;
        var pasaporte = document.getElementById("campoP" + i).value;
        pasajeros[j] = nombre + "," + pasaporte;
        j++;
    }
}

function validarCampos() {
    for (i = 1; i < cantidad + 1; i++) {
        var campoN = document.getElementById("campoN" + i).value;
        var campoP = document.getElementById("campoP" + i).value;
        if (campoP === "" || campoN === "") {
            alert("Hay campos vacios !!");
            return;
        }
    }
    llenarAsientos();
}

function llenarAsientos() {
    controller.getAsientos(orden[0].avion.codigo_avion);
}

function usadosAsi(){
    var usados = model.asientosUsados;
    for (var i = 0; i < usados.length; i++) {
        var as = document.getElementById(usados[i].numero + "ida");
        as.classList.add("ocupado");
        as.disabled = true;
    }
}

function usadosAsiV(){
    var usados = model.asientosUsadosV;
    for (var i = 0; i < usados.length; i++) {
        var as = document.getElementById(usados[i].numero + "vuelta");
        as.classList.add("ocupado");
        as.disabled = true;
    }
}

function llenarAsientosV(){
    if(!esidaYVuela){
        return;
    }
    else
        controller.getAsientosVenida(orden[1].avion.codigo_avion);
}

function crearBotones() {
    var boton1 = document.getElementById("continuarAsientosIda");
    var boton2 = document.getElementById("cancelarAsientosIda");
    if(esidaYVuela){
        boton1.addEventListener("click", llenarAsientosV);
    }
    else{
        boton1.addEventListener("click", ordenCompletada);
    }
    boton2.addEventListener("click", cancelarOrden);
}

function crearBotones1() {
    var boton1 = document.getElementById("continuarAsientosIdaVuelta");
    var boton2 = document.getElementById("cancelarAsientosIdaVuelta");
    boton1.addEventListener("click", ordenCompletada);
    boton2.addEventListener("click", cancelarOrden);
}

function cancelarOrden() {
    location.reload(true);
}

function ordenCompletada() {
    if (asientos.length < cantidad) {
        alert("Selecciones los " + cantidad + " asiento(s).");
        return;
    }
    if(esidaYVuela){
        if (asientosV.length < cantidad) {
        alert("Selecciones los " + cantidad + " asiento(s).");
        return;
    }
    }
    document.getElementById("avionAsientos").style.display = "none";
    document.getElementById("avionAsientos1").style.display = "none";
    var compra = document.getElementById("aquiOrden");
    compra.style.display = "block";
    var fecPar = document.getElementById("datepicker1").value;
    var fecLle = document.getElementById("datepicker2").value;
    document.getElementById("partida2").innerHTML = fecPar;
    document.getElementById("regreso2").innerHTML = fecLle;
    var ori = orden[0].ruta.ciudadO.nombre;
    var dest = orden[0].ruta.ciudadD.nombre;
    document.getElementById("origenC2").innerHTML = ori;
    document.getElementById("destinoC2").innerHTML = dest;
    document.getElementById("cantidad2").innerHTML = cantidad.toString();
    var moneda = document.getElementById("moneda");
    var simbolo = "₡";
    var precio = orden[0].precio;
    if (moneda.value === "Dolares") {
        simbolo = "$";
        document.getElementById("price2").innerHTML = simbolo + " " + precio;
    } else {
        precio = precio * cambio;
        document.getElementById("price2").innerHTML = simbolo + " " + precio;
    }
    for (var i = 0; i < asientos.length; i++) {
        asientos[i] = asientos[i].value.toString() + "," + pasajeros[i];
        var parrafo = document.createElement("p");
        parrafo.innerHTML ="Asientos de ida: " + asientos[i];
        document.getElementById("estosSon").appendChild(parrafo);
    }
    for (var i = 0; i < asientosV.length; i++) {
        asientosV[i] = asientosV[i].value.toString() + "," + pasajeros[i];
        var parrafo = document.createElement("p");
        parrafo.innerHTML ="Asientos de vuelta: " + asientosV[i];
        document.getElementById("estosSon").appendChild(parrafo);
    }

}

function agregaAsiento() {
    if (asientos.length === cantidad) {
        while (asientos.length > 0) {
            var as = asientos.pop();
            document.getElementById(as.id).classList.remove("seleccionado");
        }
    } else {
        if (!asientos.includes(this)) {
            this.classList.add("seleccionado");
            asientos.push(this);
        }
    }
}

function agregaAsientoV() {
    if (asientosV.length === cantidad) {
        while (asientosV.length > 0) {
            var as = asientosV.pop();
            document.getElementById(as.id).classList.remove("seleccionado");
        }
    } else {
        if (!asientosV.includes(this)) {
            this.classList.add("seleccionado");
            asientosV.push(this);
        }
    }
}

function cancelOrden() {
    var compra = document.getElementById("compra");
    compra.style.display = "none";
    document.getElementById("cuerpo").style.opacity = 1;
}

function showBuscados() {
    
    if (!fechaVacia())
        return;
    else {
        normalizar();
    }
    var s = document.getElementById("tablaBusqueda");
    var aux = document.getElementById("resultBusq");
    if (aux === null) {
        var thea = document.createElement("thead");
        var x = document.createElement("tr");
        var y = document.createElement("th");
        y.id = "resultBusq";
        x.appendChild(y);
        thea.appendChild(x);
        s.appendChild(thea);
    }
    var buscado = document.getElementById("buscado");
    while (s.childNodes.length > 0 && aux !== null && buscado !== null) {
        s.removeChild(buscado);
        buscado = document.getElementById("buscado");
    }
    for (var i = 0; i < model.buscados.length; i++) {
        var t = document.createElement("tr");
        t.id = "filabusq";
        var t1 = document.createElement("td");
        t1.innerHTML = i + 1 + ". Desde: " + model.buscados[i].ruta.ciudadO.nombre + " hasta " + model.buscados[i].ruta.ciudadD.nombre + "      $ " + model.buscados[i].precio;
        t.id = "buscado";
        t.appendChild(t1);
        var t2 = document.createElement("td");
        var boton = document.createElement("input");
        boton.id = "ida,"+i;
        boton.type = "radio";
        boton.name= "radio";
        idaSelect = i;
        boton.classList.add("radios");
        boton.checked = true;
        boton.addEventListener("click", asignaNumbers1);
        t2.appendChild(boton);
        t.appendChild(t2);
        s.appendChild(t);
    }
    aux = document.getElementById("sinBusq");
    if (aux === null && model.buscados.length === 0) {
        var t = document.createElement("tr");
        t.id = "buscado";
        t.innerHTML = "Sin resultados...";
        s.appendChild(t);
    }
    var esIdaVenida = $("#idaYvuelta").is(":checked");
      if(!esIdaVenida){
          botonComprar();
      }
    document.getElementById("busqueda").style.display = "block";
    $('html,body').animate({
        scrollTop: $("#busqueda").offset().top
    }, 2000);
}

function showBuscadosVenida() {

   if (!fechaVacia())
        return;
    else {
        normalizar();
    }
    var s = document.getElementById("tablaBusquedaVuelta");
    var aux = document.getElementById("resultBusq2");
    if (aux === null) {
        var thea = document.createElement("thead");
        var x = document.createElement("tr");
        var y = document.createElement("th");
        y.id = "resultBusq";
        x.appendChild(y);
        thea.appendChild(x);
        s.appendChild(thea);
    }
    var buscado = document.getElementById("buscado2");
    while (s.childNodes.length > 0 && aux !== null && buscado !== null) {
        s.removeChild(buscado);
        buscado = document.getElementById("buscado2");
    }
    for (var i = 0; i < model.buscadosVenida.length; i++) {
        var t = document.createElement("tr");
        t.id = "filabusq";
        var t1 = document.createElement("td");
        t1.innerHTML = i + 1 + ". Desde: " 
                + model.buscadosVenida[i].ruta.ciudadO.nombre 
                + " hasta " + model.buscadosVenida[i].ruta.ciudadD.nombre 
                + "      $ " + model.buscadosVenida[i].precio;
        t.id = "buscado2";
        t.appendChild(t1);
        var t2 = document.createElement("td");
        var boton = document.createElement("input");
        boton.id = "vuelta,"+i;
        boton.type = "radio";
        boton.name= "radio2";
        vuelaSelect = i;
        boton.classList.add("radios");
        boton.checked = true;
        boton.addEventListener("click", asignaNumbers2);
        t2.appendChild(boton);
        t.appendChild(t2);
        s.appendChild(t);
    }
    aux = document.getElementById("sinBusq");
    if (aux === null && model.buscadosVenida.length === 0) {
        var t = document.createElement("tr");
        t.id = "buscado";
        t.innerHTML = "Sin resultados...";
        s.appendChild(t);
    }
    botonComprar();
    document.getElementById("busqueda1").style.display = "block";
}

function botonComprar(){
    var boton = document.getElementById("botonComprar");
    boton.addEventListener("click",datos);
    boton.style.display = "block";
}

function asignaNumbers1(){
    var str = this.id;
    var temp = str.split(",");
    idaSelect = temp[1];
} 

function asignaNumbers2(){
    var str = this.id;
    var temp = str.split(",");
    vuelaSelect = temp[1];
} 

function fechaVacia() {
    if(esPromo)
        return true;
    var fecPar = document.getElementById("datepicker1").value;
    var fecLle = document.getElementById("datepicker2").value;
    if ((fecPar === "" || fecLle === "") && (document.getElementById("datepicker2").disabled === false)) {
        document.getElementById("datepicker1").classList.add("bordeRojo");
        document.getElementById("datepicker2").classList.add("bordeRojo");
        alert("Debe indicar la fecha !!");
        return false;
    }
    if ((fecPar === "") && (document.getElementById("datepicker2").disabled === true)) {
        document.getElementById("datepicker1").classList.add("bordeRojo");
        alert("Debe indicar la fecha de ida!!");
        return false;
    }

    return true;
}

function normalizar() {
    document.getElementById("datepicker1").classList.remove("bordeRojo");
    document.getElementById("datepicker2").classList.remove("bordeRojo");
}

function datos() {
    numeroVuelo = idaSelect;
    var index = idaSelect;
    var index2 = vuelaSelect;
    if (document.getElementById("usr") === null) {
        alert("Debe iniciar sesión para hacer una compra");
        return;
    }
    orden.push(model.buscados[index]);
    if(esidaYVuela){
       orden.push(model.buscadosVenida[index2]); 
    }
    var datos = document.getElementById("datos");
    var tr;
    var td;
    var inp;
    cantidad = parseInt(document.getElementById("combo").value);
    if (document.getElementById("tdDatos" + cantidad) === null) {
        for (i = 1; i < cantidad + 1; i++) {
            tr = document.createElement("tr");
            td = document.createElement("td");
            td.id = "tdDatos" + i;
            td.appendChild(document.createTextNode("Pasaporte" + i + ": "));
            tr.appendChild(td);
            inp = document.createElement("input");
            inp.type = "text";
            inp.id = "campoP" + i;
            td = document.createElement("td");
            td.appendChild(inp);
            tr.appendChild(td);

            td = document.createElement("td");
            td.appendChild(document.createTextNode("Nombre" + i + ": "));
            tr.appendChild(td);
            inp = document.createElement("input");
            inp.type = "text";
            inp.id = "campoN" + i;
            td = document.createElement("td");
            td.appendChild(inp);
            tr.appendChild(td);
            datos.appendChild(tr);
            if (i === cantidad) {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var btn = document.createElement("input");
                btn.type = "button";
                btn.id = "btnDatos";
                btn.value = "Continuar";
                btn.addEventListener("click", validarCampos);
                td.appendChild(btn);
                tr.appendChild(td);
                datos.appendChild(tr);
            }
        }
        var plane = model.buscados[index].avion;
        var variable = plane.cant_filas * plane.cant_asiento_fila;
        if (model.asientosUsados != null)
            if ((model.asientosUsados.length >= (variable - 1))
                    || (parseInt(document.getElementById("combo").value)
                            >
                            ((variable - 1) - model.asientosUsados.length))
                    ) {
                var salida = orden.pop();
                alert("Avion lleno !!");
                return;
            }

        var busc = document.getElementById("info");
        busc.style.display = "block";
        document.getElementById("tabla").style.display = "none";
        document.getElementById("fotos").style.display = "none";
        document.getElementById("busqueda").style.display = "none";
        document.getElementById("busqueda1").style.display = "none";
        document.getElementById("botonComprar").style.display = "none";
    }
    $('html,body').animate({
        scrollTop: $("#info").offset().top
    }, 1000);
}

function openInfo() {
    numeroVuelo = this.id;
    var index = this.id;

    if (document.getElementById("usr") === null) {
        alert("Debe iniciar sesión para hacer una compra");
        return;
    }

    orden.push(model.buscados[index]);
    controller.getAsientos1();

    var compra = document.getElementById("info");
    var fecPar = document.getElementById("datepicker1").value;
    var fecLle = document.getElementById("datepicker2").value;
    console.log(index);
    var fecPar = document.getElementById("datepicker1").value;
    var fecLle = document.getElementById("datepicker2").value;
    document.getElementById("partida").innerHTML = fecPar;
    document.getElementById("regreso").innerHTML = fecLle;
    var ori = document.getElementById("origen").value;
    var dest = document.getElementById("destino").value;
    document.getElementById("origenC").innerHTML = ori;
    document.getElementById("destinoC").innerHTML = dest;
    document.getElementById("cantidad").innerHTML = document.getElementById("combo").value;
    cantidad = parseInt(document.getElementById("combo").value);
    var moneda = document.getElementById("moneda");
    var simbolo = "₡";
    var precio = orden[0].precio;
    if (moneda.value === "Dolares") {
        simbolo = "$";
        document.getElementById("price").innerHTML = simbolo + " " + precio;
    } else {
        precio = precio * cambio;
        document.getElementById("price").innerHTML = simbolo + " " + precio;
    }

    var plane = model.buscados[index].avion;
    var variable = plane.cant_filas * plane.cant_asiento_fila;
    if ((model.asientosUsados.length >= (variable - 1))
            || (parseInt(document.getElementById("combo").value)
                    >
                    ((variable - 1) - model.asientosUsados.length))
            ) {
        var salida = orden.pop();
        alert("Avion lleno !!");
        return;
    }

    var busc = document.getElementById("busc");
    busc.style.display = "none";
    compra.style.display = "block";
    return true;
}

function doSubmitTiquete() {
    if(document.getElementById("tarjeta").value === ""){
        alert("Debe ingresar el numero de tarjeta para poder hacer la compra");
        return;
    }
    var asientosCompletos = "nada";
    if(esidaYVuela){
        asientosCompletos = doSubmitTiqueteVuelta();
    }
    var fecha = new Date();
    var vuelo = orden[0];
    var cliente = new Usuario("", $("#usr").html(), "", "", "", "", "", "", "");
    var codigo_tiquete = vuelo.codigo_vuelo.toString()
            + vuelo.avion.codigo_avion.toString()
            + fecha.getDay().toString()
            + fecha.getHours().toString()
            + fecha.getMinutes().toString()
            + fecha.getSeconds().toString();
    var tiquete = new Tiquete(codigo_tiquete, cliente, vuelo);
    var seats = "";
    for (var i = 0; i < asientos.length; i++) {
        if (i === 0)
            seats = asientos[i];
        else
            seats = seats + "-" + asientos[i];
    }
    model.tiquete = tiquete;
    controller.saveTicket(tiquete,seats,asientosCompletos);
}

function doSubmitTiqueteVuelta(){
    var fecha = new Date();
    var vuelo = orden[1];
    var cliente = new Usuario("", $("#usr").html(), "", "", "", "", "", "", "");
    var codigo_tiquete = vuelo.codigo_vuelo.toString()
            + vuelo.avion.codigo_avion.toString()
            + fecha.getDay().toString()
            + fecha.getHours().toString()
            + fecha.getMinutes().toString()
            + fecha.getSeconds().toString();
    var tiquete = new Tiquete(codigo_tiquete, cliente, vuelo);
    var seats = "";
    for (var i = 0; i < asientosV.length; i++) {
        if (i === 0)
            seats = asientosV[i];
        else
            seats = seats + "-" + asientosV[i];
    }
    model.tiqueteV = tiquete;
    controller.saveTicketV(tiquete,seats);
    return seats;
}

function diaSemana(dia, mes, anio) {
    var dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "vieenes", "sabados"];
    var dt = new Date(mes + ' ' + dia + ', ' + anio + ' 12:00:00');
    return dias[dt.getUTCDay()];
}

function doFocus(event) {
    event.target.className = "focus";
}

function doBlur(event) {
    event.target.className = "nofocus";
}

function doValidate(event) {
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");
    var fecha = document.getElementById("fechaNacimiento");
    var confCont = document.getElementById("contraseña1");
    var error = false;

    if (user != null) {
        if (user.value == "") {
            error = true;
            user.className = "error";
        }
    }

    if (contraseña != null) {
        if (contraseña.value == "") {
            error = true;
            contraseña.className = "error";
        }
    }

    if (cedula != null) {
        if (cedula.value == "") {
            error = true;
            cedula.className = "error";
        }
    }

    if (nombre != null) {
        if (nombre.value == "") {
            error = true;
            nombre.className = "error";
        }
    }

    if (apellido != null) {
        if (apellido.value == "") {
            error = true;
            apellido.className = "error";
        }
    }

    if (correo != null) {
        if (correo.value == "") {
            error = true;
            correo.className = "error";
        }
    }

    if (telefono != null) {
        if (telefono.value == "") {
            error = true;
            telefono.className = "error";
        }
    }

    if (celular != null) {
        if (celular.value == "") {
            error = true;
            celular.className = "error";
        }
    }

    if (fecha != null) {
        if (fecha.value == "") {
            error = true;
            fecha.className = "error";
        }
    }
    if (confCont != null) {
        if (confCont.value == "") {
            error = true;
            confCont.className = "error";
        }
    }

    if (error == true) {
        event.preventDefault();
    }

}

function doSubmit() {
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");
    var fecha = document.getElementById("fechaNacimiento");
    var dir = document.getElementById("dir");

    usuario = new Usuario(user.value, cedula.value, nombre.value, apellido.value, correo.value, telefono.value, celular.value, fecha.value, contraseña.value, dir.value);
    var formulario = document.getElementById("formulario");
    if (formulario != null) {
        formulario.addEventListener("submit", doValidate);
        Proxy.guardar(usuario, function (result) {
            switch (result) {
                case 0:
                    window.alert("Datos agregados");
                    break;
                case 1:
                    window.alert("Error en el registro");
                    break;
            }
        });
    }
    //formulario.reset();
}

function doSubmitAvion() {
    var codigo = document.getElementById("cod_Avion");
    var cantAsF = document.getElementById("cant_Asientos");
    var cantFil = document.getElementById("cant_Filas");
    var cantPas = document.getElementById("cant_Pasa");
    var marca = document.getElementById("marca");
    var modelo = document.getElementById("modelo");
    if (codigo.value != "" && cantASF.value != "" && cantFil.value != "" && cantPas.value != "") {
        var av1 = new Avion(codigo.value, modelo.value, marca.value, cantPas.value, cantFil.value, cantAsF.value);
        Proxy.guardar1(av1, function (result) {
            switch (result) {
                case 0:
                    window.alert("Datos agregados");
                    break;
                case 1:
                    window.alert("Error en el registro");
                    break;
            }
        });
    } else {
        window.alert("Complete los campos en blanco");
    }
}

function doSubmitCiudades() {
    var codigo = document.getElementById("codigo");
    var nombre = document.getElementById("nombre");
    var pais = document.getElementById("pais");
    if (codigo.value != "" && nombre.value != "" && pais.value != "") {
        var ciudad = new Ciudad(codigo.value, nombre.value, pais.value);
        Proxy.guardar2(ciudad, function (result) {
            switch (result) {
                case 0:
                    window.alert("Datos agregados");
                    break;
                case 1:
                    window.alert("Error en el registro");
                    break;
            }
        });
    } else {
        window.alert("Complete todos los campos");
    }
}

function doSubmitRutas() {
    var codigo = document.getElementById("codigo");
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    var duracion = document.getElementById("duracion");
    var ciudadO = new Ciudad(origen.value, "", "");
    var ciudadD = new Ciudad(destino.value, "", "");
    if (codigo.value != "" && origen.value != "" && destino.value != "") {
        var rutas = new Ruta(codigo.value, ciudadO, ciudadD, duracion.value);
        Proxy.guardar3(rutas, function (result) {
            switch (result) {
                case 0:
                    window.alert("Datos agregados");
                    break;
                case 1:
                    window.alert("Error en el registro");
                    break;
            }
        });
    } else {
        window.alert("Complete todos los campos");
    }
}

function doSubmitVuelos() {
    var codigo = document.getElementById("codigo_vuelo");
    var codigo1 = document.getElementById("codigo_ruta");
    var codigo2 = document.getElementById("codigo_avion");
    var salida = document.getElementById("salida");
    var horaS = document.getElementById("horaS");
    var horaL = document.getElementById("horaL");
    var precio = document.getElementById("precio");
    var imagen = document.getElementById("image1").files[0];
    var desc = document.getElementById("desc");
    var ruta = new Ruta(codigo1.value, new Ciudad("", "", ""), new Ciudad("", "", ""), "");
    var avion = new Avion(codigo2.value, "", "", 0, 0, 0);
    var vuelos1;
    if (codigo.value != "" && codigo1.value != "" && salida.value != "" && precio.value != "") {
        if (desc.checked == true)
            vuelos1 = new Vuelo(codigo.value, salida.value, horaS.value, horaL.value, ruta, avion, parseFloat(precio.value), "1");
        else
            vuelos1 = new Vuelo(codigo.value, salida.value, horaS.value, horaL.value, ruta, avion, parseFloat(precio.value), "0");

        Proxy.guardar4(vuelos1, imagen, function (result) {
            switch (result) {
                case 0:
                    window.alert("Datos agregados");
                    break;
                case 1:
                    window.alert("Error en el registro");
                    break;
            }
        });
    } else {
        window.alert("Complete todos los campos");
    }
}

function listAvion(listado, av) {
    var tr = document.createElement("tr");
    var td;
    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.codigo_avion));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.cant_asiento_fila));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.cant_filas));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.cant_pasajeros));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.marca));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.modelo));
    tr.appendChild(td);

    listado.appendChild(tr);

}

function listAviones(ps) {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (i = 0; i < ps.length; i++) {
        listAvion(listado, ps[i]);
    }
}

function llenarAviones() {
    listAviones(model.buscados);
}

/*------------------------------------------------------------------------*/

function listCiudad(listado, av) {
    var tr = document.createElement("tr");
    var td;
    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.codigo_ciudad));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.nombre));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.pais));
    tr.appendChild(td);

    listado.appendChild(tr);

}

function listCiudades(ps) {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (i = 0; i < ps.length; i++) {
        listCiudad(listado, ps[i]);
    }
}

function llenarCiudades() {
    listCiudades(model.buscados);
}

/*------------------------------------------------------------------------*/
function listRuta(listado, av) {
    var tr = document.createElement("tr");
    var td;
    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.codigo_ruta));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.ciudadO.codigo_ciudad));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.ciudadD.codigo_ciudad));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.duracion));
    tr.appendChild(td);

    listado.appendChild(tr);

}

function listRutas(ps) {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (i = 0; i < ps.length; i++) {
        listRuta(listado, ps[i]);
    }
}

function llenarRutas() {
    listRutas(model.buscados);
}

/*----------------------------------------------------------------*/

function listVuelo(listado, av) {
    var tr = document.createElement("tr");
    var td;
    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.codigo_vuelo));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.dia_salida));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.hora_salida));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.hora_llegada));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.ruta.codigo_ruta));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.avion.codigo_avion));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(av.precio));
    tr.appendChild(td);
    listado.appendChild(tr);

}

function listVuelos(ps) {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (i = 0; i < ps.length; i++) {
        listVuelo(listado, ps[i]);
    }
}

function llenarVuelos() {
    listVuelos(model.buscados);
}

/* ******************************************************************************************************** */

/* ******************************* CAMBIOS HECHOS POR ANDRES CASCANTE SALAS ******************************* */

/* ******************************************************************************************************** */

// ------------------------------- ACTUALIZAR DATOS DEL PERFIL DE USUARIO CLIENTE -------------------------------
function doPerfil1() {
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");

    usuario = new Usuario(user.value, cedula.value, nombre.value, apellido.value, correo.value, telefono.value, celular.value, "1996-11-08", contraseña.value);
    var formulario = document.getElementById("formulario");
    if (formulario != null) {
        formulario.addEventListener("submit", doValidate);
        Proxy.perfil1(usuario, function (result) {
        });
    }
}

// ------------------------------- ACTUALIZAR DATOS DEL PERFIL DE USUARIO ADMINISTRADOR -------------------------
function doPerfil2() {
    var user = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var celular = document.getElementById("celular");

    usuario = new Usuario(user.value, cedula.value, nombre.value, apellido.value, correo.value, telefono.value, celular.value, "1996-11-08", contraseña.value);
    var formulario = document.getElementById("formulario");
    if (formulario != null) {
        formulario.addEventListener("submit", doValidate);
        Proxy.perfil2(usuario, function (result) {
        });
    }
}

// ------------------------------- REDIRECCIONA A REGISTRO -------------------------------
function redireccionar() {
    location = "Registro.jsp";
}

// ------------------------------- REDIRECCIONA A ERFIL DEL CLIENTE -------------------------------
function redireccionar1() {
    location = "UsuarioCliente.jsp";
}

// ------------------------------- REDIRECCIONA A PERFIL ADMINISTRADOR  -------------------------------
function redireccionar2() {
    location = "UsuarioAdmin.jsp";
}

// ------------------------------- HABILITA LOS CAMPOS A MODIFICAR -------------------------------
function enableInput() {
    document.getElementById("correo").disabled = false;
    document.getElementById("contraseña").disabled = false;
    document.getElementById("contraseña1").disabled = false;
    document.getElementById("nombre").disabled = false;
    document.getElementById("apellidos").disabled = false;
    document.getElementById("cedula").disabled = false;
    document.getElementById("telefono").disabled = false;
    document.getElementById("celular").disabled = false;
}

/* ------------------------------------------------------------------- */
/* ---------------------------    MAPA   ----------------------------- */
/* ------------------------------------------------------------------- */

function saveGeolocation(position) {
    positionGeoMarker({lat: position.coords.latitude, lng: position.coords.longitude});
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({
        'location': {lat: position.coords.latitude, lng: position.coords.longitude}
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                var ad = document.getElementById("dir");
                ad.value = results[1].formatted_address;
            } else {
                window.alert('No hay resultados');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}

function getLocation() {
    if (navigator.geolocation) {
        if (navigator.geolocation.getCurrentPosition(saveGeolocation))
            ;
    }
}

function positionGeoMarker(coordenates) {
    mapProp = {
        center: new google.maps.LatLng(coordenates.lat, coordenates.lng),
        zoom: 20
    };
    var marker = new google.maps.Marker({
        position: mapProp.center,
        map: map
    });
    markers.push(marker);
}

function myMap() {
    mapProp = {
        center: new google.maps.LatLng(10.0000000, -84.0000000),
        zoom: 7
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function (event) {
        addMarker(event.latLng);
    });
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
    deleteMarkers();
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
    controller.savePosition();
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

/* ------------------------------------------------------------------- */
/* ------------------------------------------------------------------- */
/* ------------------------------------------------------------------- */

/* ******************************************************************************************************** */
/* ******************************************************************************************************** */
/* ******************************************************************************************************** */

document.addEventListener("DOMContentLoaded", pageLoad);

