// funcion Usuario
function Usuario(usuario, cedula, nombre, apellidos, email, telefono, celular, fecha,contrasena) {
    this.Usuario(usuario,cedula, nombre, apellidos, email, telefono, celular, fecha,contrasena);
}
function Usuario1(usuario) {
    this.Usuario1(usuario);
}

// solo metodos
Usuario.prototype = {
    Usuario: function (usuario, cedula, nombre, apellidos, email, telefono, celular, fecha,contrasena) {
        this.usuario = usuario;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.celular = celular;
        this.fecha = fecha;
        this.contrasena=contrasena;
    },
    Usuario1: function (usuario) {
        this.usuario = usuario;
    }
}