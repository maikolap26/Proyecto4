
package AAMAirline.model;

public class Ciudad implements Jsonable{

    public Ciudad(String codigo_ciudad, String nombre, String pais) {
        this.codigo_ciudad = codigo_ciudad;
        this.nombre = nombre;
        this.pais = pais;
    }

    public Ciudad() {
        this("","","");
    }

    public String getCodigo_ciudad() {
        return codigo_ciudad;
    }

    public void setCodigo_ciudad(String codigo_ciudad) {
        this.codigo_ciudad = codigo_ciudad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }


 
    private String codigo_ciudad;
    private String nombre;
    private String pais;
}
