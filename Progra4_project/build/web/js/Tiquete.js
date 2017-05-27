// funcion Tiquete
function Tiquete(codigo_Tiquete,cliente,vuelo) {
    this.Tiquete(codigo_Tiquete,cliente,vuelo);
}


// solo metodos
Tiquete.prototype = {
    Tiquete: function (codigo_Tiquete,cliente,vuelo) {
        this.codigo_Tiquete=codigo_Tiquete;
        this.cliente=cliente;
        this.vuelo=vuelo;
    }
};