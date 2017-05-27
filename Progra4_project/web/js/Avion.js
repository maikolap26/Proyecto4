 // funcion Avion
function Avion (codigo_avion,modelo,marca,cant_pasajeros,cant_filas,cant_asiento_fila){ 
  this.Avion(codigo_avion,modelo,marca,cant_pasajeros,cant_filas,cant_asiento_fila);
}


// solo metodos
Avion.prototype={ 
  Avion: function(codigo_avion,modelo,marca,cant_pasajeros,cant_filas,cant_asiento_fila){
      this.codigo_avion=codigo_avion;
      this.modelo=modelo;
      this.marca=marca;
      this.cant_pasajeros=cant_pasajeros;
      this.cant_filas=cant_filas;
      this.cant_asiento_fila=cant_asiento_fila;
  }
}