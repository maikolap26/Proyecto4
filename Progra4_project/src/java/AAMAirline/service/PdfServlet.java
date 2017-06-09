/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package AAMAirline.service;

import AAMAirline.model.AAMAirlineModel;
import AAMAirline.model.Asiento;
import AAMAirline.model.Avion;
import AAMAirline.model.Ciudad;
import AAMAirline.model.Jsonable;
import AAMAirline.model.Ruta;
import AAMAirline.model.Tiquete;
import AAMAirline.model.Usuario;
import AAMAirline.model.Vuelo;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.io.image.ImageType;
import com.itextpdf.kernel.color.Color;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.property.TextAlignment;

import java.io.IOException;
import java.net.URL;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Escinf
 */
@WebServlet(name = "PdfServlet", urlPatterns = {"/PdfServlet"})
public class PdfServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class, "_class")
                .registerSubtype(Ciudad.class, "Ciudad")
                .registerSubtype(Tiquete.class, "Tiquete")
                .registerSubtype(Ruta.class, "Ruta")
                .registerSubtype(Avion.class, "Avion")
                .registerSubtype(Usuario.class, "Usuario")
                .registerSubtype(Asiento.class, "Asiento")
                .registerSubtype(Vuelo.class, "Vuelo");
        response.setContentType("aplication/pdf");
        response.setHeader("Content-Disposition", "inline;filename=\"report.pdf\"");
        PdfDocument pdf = new PdfDocument(new PdfWriter(response.getOutputStream()));
        Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/MM/yyyy").create();
        String json;
        try (Document document = new Document(pdf)) {
            Paragraph p;
            p = new Paragraph("TIQUETE DE VUELO");
            p.setTextAlignment(TextAlignment.CENTER);
            p.setBold();
            p.setBackgroundColor(Color.PINK);
            document.add(p);
            String h = "Vuelo %s, %s - %s, %s %s %s";
            String codigo_tiquete = request.getParameter("tiquete");       
            Tiquete ticket = AAMAirlineModel.consultaTiquete(codigo_tiquete);
            ArrayList<String> asientosIda = AAMAirlineModel.getAsientosPDF(
                                    ticket.getCodigo_Tiquete(),ticket.getVueloida().getAvion().getCodigo_Avion());
            ArrayList asientosVuelta ;
            String asientos = "";
            String horaVuelta="";
            Float precio = (ticket.getVueloida().getPrecio()) * (asientosIda.size());
            if(ticket.getVueloVuelta() != null){
                asientosVuelta = AAMAirlineModel.getAsientosPDF(
                                    ticket.getCodigo_Tiquete(),ticket.getVueloVuelta().getAvion().getCodigo_Avion());
                horaVuelta = " / salida vuelo Vuelta " + ticket.getVueloVuelta().getHora_salida() + " horas ";
                asientos= asientos + "Vuelta \n";
                for(int i=0; i< asientosVuelta.size() ; i++){
                    asientos = asientos + asientosVuelta.get(i) + "\n";
                }
                precio += (ticket.getVueloVuelta().getPrecio() * asientosVuelta.size());
            }
            String horaida = ticket.getVueloida().getHora_salida();
            String algo = " horas ";
            h = String.format(h, ticket.getVueloida().getCodigo_Vuelo(),
                     ticket.getVueloida().getRuta().getCiudadO().getNombre(),
                     ticket.getVueloida().getRuta().getCiudadD().getNombre(),
                     ticket.getVueloida().getDia_salida(),
                     " salida vuelo ida :" + horaida + algo, horaVuelta);
            p = new Paragraph(h);
            p.setTextAlignment(TextAlignment.LEFT);
            p.setBold();
            document.add(p);
            
            for(int i=0; i< asientosIda.size() ; i++){
                asientos = asientos + "Ida: \n";
                asientos = asientos + asientosIda.get(i)+ "\n";
            }
            p = new Paragraph("------------- Asientos ------------- \n"
                    + asientos);
            document.add(p);
            
            p = new Paragraph("COSTO TOTAL: $ " + precio);
            p.setTextAlignment(TextAlignment.RIGHT);
            p.setBold();
            p.setBackgroundColor(Color.PINK);
            document.add(p);
        } catch (SQLException ex) {
            Logger.getLogger(PdfServlet.class.getName()).log(Level.SEVERE, null, ex);
        }    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
