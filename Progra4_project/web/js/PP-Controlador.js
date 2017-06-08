function AAMController(model, view) {
    this.AAMController(model, view);
}

AAMController.prototype = {
    AAMController: function (model, view) {
        this.model = model;
        this.view = view;
        if (window.location.pathname != "/Progra4_project/Registro.jsp" && window.location.pathname != "/Progra4_project/Aviones_2.jsp"
                && window.location.pathname != "/Progra4_project/Rutas_1.jsp" && window.location.pathname != "/Progra4_project/Vuelos_1.jsp"
                && window.location.pathname != "/Progra4_project/Ciudades_1.jsp" && window.location.pathname != "/Progra4_project/Aviones_1.jsp") {
            Proxy.getCiudades(function (result) {
                model.ciudades = result;
                view.llenarSelects();
            });
        }
        if(window.location.pathname === "/Progra4_project/Aviones_2.jsp"){
            Proxy.avionSearch(function (result) {
                model.buscados = result;
                view.llenarAviones();
            });
        }
        if(window.location.pathname === "/Progra4_project/Ciudades_2.jsp"){
            Proxy.getCiudades(function (result) {
                model.buscados = result;
                view.llenarCiudades();
            });
        }
        if(window.location.pathname === "/Progra4_project/Rutas_2.jsp"){
            Proxy.rutaSearch(function (result) {
                model.buscados = result;
                view.llenarRutas();
            });
        }
        if(window.location.pathname === "/Progra4_project/Vuelos_2.jsp"){
            Proxy.vueloSearch(function (result) {
                model.buscados = result;
                view.llenarVuelos();
            });
        }
        if(window.location.pathname === "/Progra4_project/Rutas_1.jsp"){
            Proxy.getCiudades(function(result){
                model.ciudades= result;
                view.llenarSelects();
            });
        }
        if(window.location.pathname === "/Progra4_project/Vuelos_1.jsp"){
            Proxy.rutaSearch(function (result) {
                model.buscados1 = result;
                Proxy.avionSearch(function (result) {
                    model.buscados = result;
                    view.llenarSelectsVuelo();
            });
            });
             
        }
        
    },
buscar: function () {

        var origen = this.view.document.getElementById("origen").value;
        var destino = this.view.document.getElementById("destino").value;
        var fecha = this.view.document.getElementById("datepicker1").value;
        //var dia= fecha[0] + fecha[1];
        //var mes= fecha[3] + fecha[4];
        //var año= fecha[6] + fecha[7] + fecha[8] + fecha[9];
        //var diaIda= this.view.diaSemana(parseInt(dia),parseInt(mes),parseInt(año));
        var model = this.model;
        var view = this.view;
        if ((origen.length > 0) && (destino.length > 0)) {
            Proxy.vuelosSearch(origen, destino,fecha, function (result) {
                model.buscados = result;
                view.showBuscados();
            });
        } else {
            model.buscados = [];
        }
    },
    
buscarVenida: function () {

        var esIdaVenida = $("#idaYvuelta").is(":checked");
        if(!esIdaVenida){
            return;
        }
        var origen = this.view.document.getElementById("destino").value;
        var destino = this.view.document.getElementById("origen").value;
        var fecha = this.view.document.getElementById("datepicker2").value;
        //var dia= fecha[0] + fecha[1];
        //var mes= fecha[3] + fecha[4];
        //var año= fecha[6] + fecha[7] + fecha[8] + fecha[9];
        //var diaIda= this.view.diaSemana(parseInt(dia),parseInt(mes),parseInt(año));
        var model = this.model;
        var view = this.view;
        if ((origen.length > 0) && (destino.length > 0)) {
            Proxy.vuelosSearch(origen, destino,fecha, function (result) {
                model.buscadosVenida = result;
                view.showBuscadosVenida();
            });
        } else {
            model.buscados = [];
        }
    },

buscarVPromo: function(codigo){
    var model = this.model;
    var view = this.view;
    model.buscados=[];
    model.buscados.push( model.vs.find(function(e){
        return e.codigo_vuelo === codigo;
    }));
    view.showBuscados();
    view.esidaYVuela = false;
},    
    
 getAsientos: function(avion){
        var model = this.model;
        var view = this.view;
        Proxy.getAsientos(avion,function(result){
            model.asientosUsados = result;
            view.mostrarAsientos();
            view.usadosAsi();
        });
},
 getAsientosVenida: function(avion){
        var model = this.model;
        var view = this.view;
        if(!view.esidaYVuela){
            return;
        }
        Proxy.getAsientos(avion,function(result){
            model.asientosUsadosV = result;
            view.mostrarAsientosVuelta();
            view.usadosAsiV();
        });
},
 getAsientos1: function(){
        var model = this.model;
        var view = this.view;
        var avion= view.orden[0].avion.codigo_avion;
        Proxy.getAsientos(avion,function(result){
            model.asientosUsados = result;
        });
},
 cambioDolar:function(){
    var model = this.model;
    var view = this.view;
    Proxy.cambioDolar(function(result){
        model.cambioDolar = result;
        view.colones(result);
    });
},
 saveTicket:function(tiquete,seats,asientosCompletos){
     var view = this.view;
     var model = this.model;
     var s = seats.split("-");
     for(var i =0; i < s.length ; i++){
         asientosCompletos = asientosCompletos + "-"+ s[i];  
     }
    Proxy.saveTicket(tiquete, seats, function (result) {
        var selogro = result;
        if (selogro === 0)
            alert("no se pudo guardar el tiquete");
        else{
            if(asientosCompletos === "nada"){
                Proxy.generarPDF(model.tiquete, null, function (result) {
                    var retorno = result;
                    location.reload(true);
                    view. alert("se ha guardado con exito !!");
                });
            }
            else{
                Proxy.generarPDF(model.tiquete, model.tiqueteV, function (result) {
                    var retorno = result;
                    location.reload(true);
                    view. alert("se ha guardado con exito !!");
                });
            }
        }
    });
},
saveTicketV:function(tiquete,seats){
     var view = this.view;
     var model = this.model;
    Proxy.saveTicket(tiquete, seats, function (result) {
        var selogro = result;
        if (selogro === 0)
            alert("no se pudo guardar el tiquete");
    });
},
getPromos: function(){
    var model= this.model;
    var view = this.view;
    Proxy.getPromo( function (result) {
        model.vs = result;
        view.llenarDescuentos();
    });
}
    
};

