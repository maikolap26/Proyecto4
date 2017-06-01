var JsonUtils = JsonUtils || {};
JsonUtils.revive = function (k, v) {
    
    if (v instanceof Object && v._class === 'Ciudad') {
        return new Ciudad(v.codigo_ciudad, v.nombre, v.pais);
    }
    if (v instanceof Object && v._class === 'Ruta') {
        return new Ruta(v.codigo_ruta, v.ciudadO, v.ciudadD, v.duracion);
    }
    if (v instanceof Object && v._class === 'Vuelo') {
        return new Vuelo(v.codigo_vuelo, v.dia_salida, v.hora_salida, v.hora_llegada, v.ruta, v.avion, v.precio,v.descuento);
    }
    if (v instanceof Object && v._class === 'Login') {
        return new Login(v.usuario, v.contraseña, v.tipo);
    }
    if (v instanceof Object && v._class === 'Usuario') {
        return new Usuario(v.usuario, v.cedula, v.nombre, v.apellidos, v.email, v.telefono, v.celular, v.fecha,v.contrasena,v.direccion);
    }  
    if (v instanceof Object && v._class === 'Avion') {
        return new Avion(v.codigo_avion,v.modelo,v.marca,v.cant_pasajeros,v.cant_filas,v.cant_asiento_fila);
    } 
    if (v instanceof Object && v._class === 'Asiento') {
        return new Asiento(v.numero, v.tiquete, v.avion);
    } 
    if (v instanceof Object && v._class === 'Tiquete') {
        return new Tiquete(v.codigo_Tiquete,v.cliente,v.vuelo);
    }

    return v;
};
JsonUtils.replacer = function (k, v) {
    if (v instanceof Ciudad) {
        v._class = "Ciudad";
    }
    if (v instanceof Vuelo) {
        v._class = "Vuelo";
    }
    if(v instanceof Usuario){
        v._class = "Usuario";
    }
    if(v instanceof Avion){
        v._class = "Avion";
    }
    if(v instanceof Ruta){
        v._class = "Ruta";
    }
    if(v instanceof Asiento){
        v._class = "Asiento";
    }
    if(v instanceof Tiquete){
        v._class = "Tiquete";
    }
    return v;
};

JsonUtils.enviar = function (object){
    return JSON.stringify(object,this.replacer);
    //return JSON.stringify(object);
};