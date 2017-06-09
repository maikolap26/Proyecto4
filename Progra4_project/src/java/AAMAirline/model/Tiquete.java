/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package AAMAirline.model;

/**
 *
 * @author jimen
 */
public class Tiquete implements Jsonable{

    public Tiquete(String codigo_Tiquete, Usuario cliente, Vuelo vueloVuelta, Vuelo vueloida) {
        this.codigo_Tiquete = codigo_Tiquete;
        this.cliente = cliente;
        this.vueloVuelta = vueloVuelta;
        this.vueloida = vueloida;
    }

    public Tiquete() {
        
    }

    public String getCodigo_Tiquete() {
        return codigo_Tiquete;
    }

    public void setCodigo_Tiquete(String codigo_Tiquete) {
        this.codigo_Tiquete = codigo_Tiquete;
    }

    public Usuario getCliente() {
        return cliente;
    }

    public void setCliente(Usuario cliente) {
        this.cliente = cliente;
    }

    public Vuelo getVueloVuelta() {
        return vueloVuelta;
    }

    public void setVueloVuelta(Vuelo vueloVuelta) {
        this.vueloVuelta = vueloVuelta;
    }

    public Vuelo getVueloida() {
        return vueloida;
    }

    public void setVueloida(Vuelo vueloida) {
        this.vueloida = vueloida;
    }

    private String codigo_Tiquete;
    private Usuario cliente;
    private Vuelo vueloVuelta;
    private Vuelo vueloida;
}
