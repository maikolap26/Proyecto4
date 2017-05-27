 // funcion Ruta
function Ruta (codigo_ruta,ciudadO,ciudadD,duracion){ 
  this.Ruta(codigo_ruta,ciudadO,ciudadD,duracion);
}


// solo metodos
Ruta.prototype={ 
  Ruta: function(codigo_ruta,ciudadO,ciudadD,duracion){
      this.codigo_ruta=codigo_ruta;
      this.ciudadO=ciudadO;
      this.ciudadD=ciudadD;
      this.duracion=duracion;
  }
};