
package AAMAirline.model;


public class Asiento implements Jsonable {

    public Asiento(String numero, Avion avion, Tiquete tiquete) {
        this.numero = numero;
        this.avion = avion;
        this.tiquete = tiquete;
    }

    public String getNumero() {
        return numero;
    }

    public Tiquete getTiquete() {
        return tiquete;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Avion getAvion() {
        return avion;
    }

    public void setAvion(Avion avion) {
        this.avion = avion;
    }

    public void setTiquete(Tiquete tiquete) {
        this.tiquete = tiquete;
    }
    private String numero;
    private Avion avion;
    private Tiquete tiquete;

}
