 // funcion Ciudad
function Ciudad (codigo_ciudad,nombre,pais){ 
  this.Ciudad(codigo_ciudad,nombre,pais);
}

// solo metodos
Ciudad.prototype={ 
  Ciudad: function(codigo_ciudad,nombre,pais){
      this.codigo_ciudad=codigo_ciudad;
      this.nombre=nombre;
      this.pais=pais;
  }
};