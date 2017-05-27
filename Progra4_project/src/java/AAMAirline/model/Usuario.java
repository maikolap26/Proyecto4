
package AAMAirline.model;

public class Usuario implements Jsonable{

    public Usuario(String usuario,String cedula,String nombre, String apellidos, String email, String telefono, String celular, String fecha,String contrasena) {
        this.usuario=usuario;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.celular = celular;
        this.fecha = fecha;
        this.contrasena=contrasena;
    }

    Usuario() {
        this("","","","","","","","","");
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
   

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getUsuario() {
        return usuario;
    }
     public String getContraseña() {
        return contrasena;
    }

    public void setContraseña(String contraseña) {
        this.contrasena = contraseña;
    }
     
    
     private String usuario;
    private String cedula;
    private String nombre;
    private String apellidos;
    private String email;
    private String telefono;
    private String celular;
    private String fecha;
    private String contrasena;

   
}