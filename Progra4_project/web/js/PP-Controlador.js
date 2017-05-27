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
        
    },
buscar: function () {

        var origen = this.view.document.getElementById("origen").value;
        var destino = this.view.document.getElementById("destino").value;
        var fecha = this.view.document.getElementById("datepicker1").value;
        var dia= fecha[0] + fecha[1];
        var mes= fecha[3] + fecha[4];
        var año= fecha[6] + fecha[7] + fecha[8] + fecha[9];
        var diaIda= this.view.diaSemana(parseInt(dia),parseInt(mes),parseInt(año));
        var model = this.model;
        var view = this.view;
        if ((origen.length > 0) && (destino.length > 0)) {
            Proxy.vuelosSearch(origen, destino,diaIda, function (result) {
                model.buscados = result;
                view.showBuscados();
            });
        } else {
            model.buscados = [];
        }
    }
    
};