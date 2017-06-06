/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package AAMAirline.service;

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
            String h = "Vuelo %s, %s - %s, %s %s";
            String aux = request.getParameter("tiquete");
            String sea = request.getParameter("seats");
            String limiter = "-";
            String[] tem;
            tem = sea.split(limiter);
            String[] seats = tem;
            Tiquete ticket = gson.fromJson(aux, Tiquete.class);
            String hora = ticket.getVuelo().getHora_salida();
            String algo = "am";
            int valor = Integer.parseInt(hora);
            if (valor >= 12) {
                algo = "pm";
            }
            h = String.format(h, ticket.getVuelo().getCodigo_Vuelo(),
                     ticket.getVuelo().getRuta().getCiudadO().getNombre(),
                     ticket.getVuelo().getRuta().getCiudadD().getNombre(),
                     ticket.getVuelo().getDia_salida(),
                     hora + algo);
            p = new Paragraph(h);
            p.setTextAlignment(TextAlignment.LEFT);
            p.setBold();
            document.add(p);
            String asientos = "";
            for (String seat : seats) {
                asientos =asientos + seat + "\n";
            }
            p = new Paragraph("------------- Asientos ------------- \n"
                    + asientos);
            document.add(p);
            Float precio = (ticket.getVuelo().getPrecio()) * (seats.length);
            p = new Paragraph("COSTO TOTAL: " + precio.toString());
            p.setTextAlignment(TextAlignment.RIGHT);
            p.setBold();
            p.setBackgroundColor(Color.PINK);
            document.add(p);
        }
    }

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
