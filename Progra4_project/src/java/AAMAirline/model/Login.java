
package AAMAirline.model;

public class Login {
    public Login(String usuario, String contraseña, String tipo) {
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.tipo = tipo;
    }

    Login() {
       this("","","");
    }

    public String getUsuario() {
        return usuario;
    }

    public String getContraseña() {
        return contraseña;
    }

    public String getTipo() {
        return tipo;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    
    
    private String usuario;
    private String contraseña;
    private String tipo;
}
