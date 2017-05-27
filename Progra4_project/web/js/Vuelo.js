// funcion Vuelo
function Vuelo(codigo_vuelo, dia_salida, hora_salida, hora_llegada, ruta, avion, precio) {
    this.Vuelo(codigo_vuelo, dia_salida, hora_salida, hora_llegada, ruta, avion, precio);
}


// solo metodos
Vuelo.prototype = {
    Vuelo: function (codigo_vuelo, dia_salida, hora_salida, hora_llegada, ruta, avion, precio) {
        this.codigo_vuelo = codigo_vuelo;
        this.avion = avion;
        this.dia_salida = dia_salida;
        this.hora_salida = hora_salida;
        this.ruta = ruta;
        this.hora_llegada = hora_llegada;
        this.precio = precio;

    }
};

