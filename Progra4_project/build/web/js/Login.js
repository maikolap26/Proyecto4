 // funcion Login
function Login (usuario,contraseña,tipo){ 
  this.Login(usuario,contraseña,tipo);
}

// solo metodos
Login.prototype={ 
  Login: function(usuario,contraseña,tipo){
    this.usuario=usuario;
    this.contraseña=contraseña;
    this.tipo=tipo;
  }
}


