/* global Proxy */

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
function pageLoad(event) {

    model = new AAMModel();
    vuelos = model.vuelos;
    ciudades = model.ciudades;
    controller = new AAMController(model, window);
    llenarDescuentos();
    $("#buscar").click(function () {
        controller.buscar();
    });

    if (window.location.pathname === "/Progra4_project/PaginaPrincipal.jsp") {
        var a = document.getElementById("cancelOrder");
        var b = document.getElementById("goTi");
        var c = document.getElementById("goTi");
        document.getElementById("ida").addEventListener("click", deshabilitarRegreso);
        document.getElementById("idaYvuelta").addEventListener("click", habilitarRegreso);

        if (a != null) {
            c.addEventListener("click", mostrarAsientos);
            b.disabled = false;
            a.addEventListener("click", cancelOrden);
        }

        document.getElementById("terminarOrden2").addEventListener("click", cancelarOrden);
    }
}
function deshabilitarRegreso() {
    normalizar();
    document.getElementById("datepicker2").disabled = true;
}
function habilitarRegreso() {
    normalizar();
    document.getElementById("datepicker2").disabled = false;
}
function llenarDescuentos() {
    for (var i = 1; i < 6; i++) {
        var imagen = document.createElement("img");
        var image = "img/d" + i + ".jpg";
        imagen.src = image;//direccion de la imagen 
        imagen.class = 'img-responsive';
        imagen.name = "img" + i;
        imagen.alt = '';
        var id = "div" + i;
        var actual = document.getElementById(id);
        if (actual != null)
            actual.appendChild(imagen);
    }
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
    var numero = numeroVuelo;
    var avion = model.buscados[numero].avion;
    document.getElementById("info").style.display = "none";
    crearBotones();
    var avionAsi = document.getElementById("avionAsientos");
    avionAsi.style.display = "block";
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
                b.id = x[i] + j.toString();
                b.classList.add("asiento");
                columna.id = j.toString();
                b.addEventListener("click", agregaAsiento);
                columna.appendChild(b);
                fila.appendChild(columna);
            }
        }
        bandera = 0;
        avionAsi.appendChild(fila);
    }
}
function crearBotones() {

    var divB = document.createElement("div");
    var boton1 = document.createElement("input");
    boton1.type = "button";
    boton1.value = "Continuar";
    boton1.classList.add("boton");
    var boton2 = document.createElement("input");
    boton2.type = "button";
    boton2.value = "Cancelar";
    boton2.classList.add("boton");
    var asientos = document.getElementById("avionAsientos");
    boton1.addEventListener("click", ordenCompletada);
    boton2.addEventListener("click", cancelarOrden);
    divB.appendChild(boton1);
    divB.appendChild(boton2);
    asientos.appendChild(divB);
}
function cancelarOrden() {
    var compra = document.getElementById("avionAsientos");
    // compra.classList.remove("popupComprar");
    compra.style.display = "none";
    document.getElementById("aquiOrden").style.display = "none";
    document.getElementById("cuerpo").style.opacity = 1;

}
function ordenCompletada() {
    if (asientos.length < cantidad) {
        alert("Selecciones los " + cantidad + " asiento(s).");
        return;
    }
    orden.push(asientos);
    document.getElementById("avionAsientos").style.display = "none";
    var compra = document.getElementById("aquiOrden");
    compra.classList.add("popupComprar");
    compra.style.display = "block";
    document.getElementById("cuerpo").style.opacity = .70;
    var fecPar = document.getElementById("datepicker1").value;
    var fecLle = document.getElementById("datepicker2").value;
    document.getElementById("partida2").innerHTML = fecPar;
    document.getElementById("regreso2").innerHTML = fecLle;
    var ori = orden[0].ruta.ciudadO.nombre;
    var dest = orden[0].ruta.ciudadD.nombre;
    document.getElementById("origenC2").innerHTML = ori;
    document.getElementById("destinoC2").innerHTML = dest;
    document.getElementById("cantidad2").innerHTML = cantidad.toString();
    document.getElementById("price2").innerHTML = " $ " + orden[0].precio;
    var array = orden[1];
    for (var i = 0; i < array.length; i++) {
        document.getElementById("estosSon").innerHTML = document.getElementById("estosSon").textContent + "  " + array[i].id.toString();
    }

}
function agregaAsiento() {
    if (asientos.length === cantidad) {
        while (asientos.length > 0) {
            var as = asientos.pop();
            document.getElementById(as.id).classList.remove("seleccionado");
        }
    }
    this.classList.add("seleccionado");
    asientos.push(this);

}
function cancelOrden() {
    var compra = document.getElementById("compra");
    compra.style.display = "none";
    document.getElementById("cuerpo").style.opacity = 1;
}
function showBuscados() {
    //controller.buscar();
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
        boton.id = i;
        boton.type = "button";
        boton.value = " Comprar ";
        boton.addEventListener("click", openInfo);
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
}
function fechaVacia() {
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
function openInfo() {
    // if(document.getElementById("uar") === null){
    //     alert("Debe iniciar sesión para hacer una compra");
    //    return;
    //}
    var fecPar = document.getElementById("datepicker1").value;
    var fecLle = document.getElementById("datepicker2").value;
    numeroVuelo = this.id;
    var index = this.id;
    console.log(index);
    var compra = document.getElementById("compra");
    compra.classList.add("popupComprar");
    compra.style.display = "block";
    document.getElementById("cuerpo").style.opacity = .70;
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
    document.getElementById("price").innerHTML = " $ " + model.buscados[index].precio;
    orden.push(model.buscados[index]);
    return true;
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
function redireccionar() {
    location = "Registro.jsp";
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

    usuario = new Usuario(user.value, cedula.value, nombre.value, apellido.value, correo.value, telefono.value, celular.value, fecha.value, contraseña.value);
    var formulario = document.getElementById("formulario");
    if (formulario != null) {
        formulario.addEventListener("submit", doValidate);
        Proxy.guardar(usuario, function (result) {
            switch(result){
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

    var av1 = new Avion(codigo.value, modelo.value, marca.value, cantPas.value, cantFil.value, cantAsF.value);
    Proxy.guardar1(av1, function (result) {
        switch(result){
            case 0: 
                window.alert("Datos agregados");
                break;
            case 1:
                window.alert("Error en el registro");
                break;
        }
    });
}
function doSubmitCiudades() {
    var codigo = document.getElementById("codigo");
    var nombre = document.getElementById("nombre");
    var pais = document.getElementById("pais");

    var ciudad = new Ciudad(codigo.value, nombre.value, pais.value);
    Proxy.guardar2(ciudad, function (result) {
        switch(result){
            case 0: 
                window.alert("Datos agregados");
                break;
            case 1:
                window.alert("Error en el registro");
                break;
        }
    });
}
function doSubmitRutas() {
    var codigo = document.getElementById("codigo");
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    var duracion = document.getElementById("duracion");
    var ciudadO= new Ciudad(origen.value,"","");
    var ciudadD= new Ciudad(destino.value,"","");
    var rutas = new Ruta(codigo.value, ciudadO, ciudadD, duracion.value);
    Proxy.guardar3(rutas, function (result) {
        switch(result){
            case 0: 
                window.alert("Datos agregados");
                break;
            case 1:
                window.alert("Error en el registro");
                break;
        }
    });
}
function doSubmitVuelos() {
    var codigo = document.getElementById("codigo_vuelo");
    var codigo1 = document.getElementById("codigo_ruta");
    var codigo2 = document.getElementById("codigo_avion");
    var salida = document.getElementById("salida");
    var horaS = document.getElementById("horaS");
    var horaL = document.getElementById("horaL");
    var precio = document.getElementById("precio");
    var ruta= new Ruta(codigo1.value,new Ciudad("","",""),new Ciudad("","",""),"");
    var avion= new Avion(codigo2.value,"","",0,0,0);

    var vuelos = new Vuelo(codigo.value, salida.value, horaS.value, horaL.value, ruta, avion, parseFloat(precio.value));
    Proxy.guardar4(vuelos, function (result) {
        switch(result){
            case 0: 
                window.alert("Datos agregados");
                break;
            case 1:
                window.alert("Error en el registro");
                break;
        }
    });
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
document.addEventListener("DOMContentLoaded", pageLoad);