// funcion Asiento
function Asiento(numero, tiquete, avion) {
    this.Asiento(numero, tiquete, avion);
}


// solo metodos
Asiento.prototype = {
    Asiento: function (numero, tiquete, avion) {
        this.numero = numero;
        this.tiquete = tiquete;
        this.avion = avion;
    }
};