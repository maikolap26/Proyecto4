// funcion Tiquete
function Tiquete(codigo_Tiquete,cliente,vueloida,vueloVuelta) {
    this.Tiquete(codigo_Tiquete,cliente,vueloida,vueloVuelta);
}


// solo metodos
Tiquete.prototype = {
    Tiquete: function (codigo_Tiquete,cliente,vueloida,vueloVuelta) {
        this.codigo_Tiquete=codigo_Tiquete;
        this.cliente=cliente;
        this.vueloida=vueloida;
        this.vueloVuelta=vueloVuelta;
    }
};