
package AAMAirline.model;

public class Ruta implements Jsonable{

    public Ruta(String codigo_ruta, Ciudad ciudadO, Ciudad ciudadD, String duracion) {
        this.codigo_ruta = codigo_ruta;
        this.ciudadO = ciudadO;
        this.ciudadD = ciudadD;
        this.duracion = duracion;
    }

    public Ruta() {
      
    }
    
    
    public String getCodigo_ruta() {
        return codigo_ruta;
    }

    public void setCodigo_ruta(String codigo_ruta) {
        this.codigo_ruta = codigo_ruta;
    }

    public Ciudad getCiudadO() {
        return ciudadO;
    }

    public void setCiudadO(Ciudad ciudadO) {
        this.ciudadO = ciudadO;
    }

    public Ciudad getCiudadD() {
        return ciudadD;
    }

    public void setCiudadD(Ciudad ciudadD) {
        this.ciudadD = ciudadD;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }


    
    private String codigo_ruta;
    private Ciudad ciudadO;
    private Ciudad ciudadD;
    private String duracion;
}
