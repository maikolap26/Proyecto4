package AAMAirline.service;

import AAMAirline.model.AAMAirlineModel;
import AAMAirline.model.Asiento;
import AAMAirline.model.Avion;
import AAMAirline.model.Ciudad;
import AAMAirline.model.Jsonable;
import AAMAirline.model.Login;
import AAMAirline.model.Ruta;
import AAMAirline.model.Tiquete;
import AAMAirline.model.Usuario;
import AAMAirline.model.Vuelo;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import indicadoresEconomicosBCCR.TipoCambio;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.ProcessBuilder.Redirect.Type;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "AAMAirlinesService", urlPatterns = {"/AAMAirlinesService"})
public class AAMAirlinesService extends HttpServlet {

    AAMAirlineModel model;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            response.setContentType("text/xml");
            RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class, "_class")
                    .registerSubtype(Ciudad.class, "Ciudad")
                    .registerSubtype(Tiquete.class, "Tiquete")
                    .registerSubtype(Ruta.class, "Ruta")
                    .registerSubtype(Avion.class, "Avion")
                    .registerSubtype(Usuario.class, "Usuario")
                    .registerSubtype(Asiento.class, "Asiento")
                    .registerSubtype(Vuelo.class, "Vuelo");
            Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("dd/MM/yyyy").create();
            String json;
            String accion = request.getParameter("action");
            String name, lastname, id, tel, tel2, fecha, cont1, cont2, email, usua;
            System.out.println(accion);
            List<Ciudad> ciudades;
            List<Vuelo> vuelos;
            List<Avion> aviones;
            List<Ruta> rutas;
            List<Asiento> asientos;
            request.getSession().removeAttribute("error1");
            request.getSession().removeAttribute("error");
            switch (accion) {
                case "cambioDolar":
                    Double dolar = new TipoCambio().getVenta();
                    out.write(dolar.toString());
                    break;
                case "getAsientos":
                    String codigo_avion = request.getParameter("codigo");
                    asientos = model.getAsientos(codigo_avion);
                    json = gson.toJson(asientos);
                    out.write(json);
                    break;
                case "saveTicket":
                    String aux = request.getParameter("tiquete");
                    String sea = request.getParameter("seats");
                    String limiter = "-";
                    String[] tem;
                    tem = sea.split(limiter);
                    String[] seats = tem;
                    Tiquete ticket = gson.fromJson(aux, Tiquete.class);
                    int salida = model.saveTicket(ticket, seats);
                    if(salida == 0)
                        out.write("0");
                    else
                        out.write("1");
                    break;
                case "ciudadListAll":
                    ciudades = model.getCiudades1();
                    json = gson.toJson(ciudades);
                    out.write(json);
                    break;
                case "getCiudad":
                    String cod = request.getParameter("codigo1");
                    //String cod1 = request.getParameter("codigo2");
                    ciudades = model.getCiudad(cod);
                    json = gson.toJson(ciudades);
                    out.write(json);
                    break;
                case "getRuta":
                    String codR = request.getParameter("codigoR");
                    rutas = model.getRuta(codR);
                    json = gson.toJson(rutas);
                    out.write(json);
                    break;
                case "getAvion":
                    String codA = request.getParameter("codigoA");
                    aviones = model.getAvion(codA);
                    json = gson.toJson(aviones);
                    out.write(json);
                    break;
                case "vueloListPromo":
                    vuelos = model.getVuelos1();
                    json = gson.toJson(vuelos);
                    out.write(json);
                    break;
                case "vueloListSearch":
                    String oYd = request.getParameter("origenYdestino");
                    String delimiter = "-";
                    String[] temp;
                    temp = oYd.split(delimiter);
                    String origen = temp[0];
                    String destino = temp[1];
                    String diaIda = request.getParameter("diaIda");
                    vuelos = model.getVuelos(origen, destino, diaIda);
                    json = gson.toJson(vuelos);
                    out.write(json);
                    break;
                case "userLogin":
                    Login us = new Login(request.getParameter("user"), request.getParameter("pass"), "0");
                    us = model.userLogin(us);
                    if (us == null) {
                        request.getSession().setAttribute("error1", "Error usuario o contraseña incorrecto");
                        request.getRequestDispatcher("/PaginaPrincipal.jsp").forward(request, response);
                    }

                    if (us.getTipo() != "0") {
                        request.getSession().setAttribute("user", us);
                        switch (us.getTipo()) {
                            case "1": // client
                                Usuario client = model.clientGet(us.getUsuario());
                                // MANDAR AL SESSION 
                                name = client.getNombre();
                                request.getSession().setAttribute("nombre", name);
                                lastname = client.getApellidos();
                                request.getSession().setAttribute("apellido", lastname);
                                id = client.getCedula();
                                request.getSession().setAttribute("cedula", id);
                                tel = client.getTelefono();
                                request.getSession().setAttribute("telefono", tel);
                                tel2 = client.getCelular();
                                request.getSession().setAttribute("celular", tel2);
                                cont1 = client.getContraseña();
                                request.getSession().setAttribute("cont1", cont1);
                                email = client.getEmail();
                                request.getSession().setAttribute("email", email);
                                usua = client.getUsuario();
                                request.getSession().setAttribute("usuario", usua);

                                request.getSession().setAttribute("client", client);
                                request.getRequestDispatcher("/PaginaPrincipal.jsp").forward(request, response);
                                break;
                            case "2": // manager
                                Usuario client2 = model.clientGet(us.getUsuario());
                                // MANDAR AL SESSION 
                                name = client2.getNombre();
                                request.getSession().setAttribute("nombre", name);
                                lastname = client2.getApellidos();
                                request.getSession().setAttribute("apellido", lastname);
                                id = client2.getCedula();
                                request.getSession().setAttribute("cedula", id);
                                tel = client2.getTelefono();
                                request.getSession().setAttribute("telefono", tel);
                                tel2 = client2.getCelular();
                                request.getSession().setAttribute("celular", tel2);
                                cont1 = client2.getContraseña();
                                request.getSession().setAttribute("cont1", cont1);
                                email = client2.getEmail();
                                request.getSession().setAttribute("email", email);
                                usua = client2.getUsuario();
                                request.getSession().setAttribute("usuario", usua);

                                request.getSession().setAttribute("client", client2);

                                request.getRequestDispatcher("/Administracion.jsp").forward(request, response);
                                break;
                        }
                    }

                    break;
                case "userLogout":
                    request.getSession().removeAttribute("user");
                    request.getSession().invalidate();
                    request.getRequestDispatcher("/PaginaPrincipal.jsp").forward(request, response);
                    break;
                case "guardar":
                    String ac = request.getParameter("us");
                    Usuario us1 = gson.fromJson(ac, Usuario.class);
                    if (model.guardar1(us1) == 1) {

                        out.write("1");

                    } else {

                        out.write("0");
                    }
                    break;
                case "guardar1":
                    String av = request.getParameter("avion");
                    Avion av1 = gson.fromJson(av, Avion.class);
                    if (model.guardar2(av1) == 1) {

                        out.write("1");

                    } else {

                        out.write("0");
                    }
                    break;
                case "guardar2":
                    String ci = request.getParameter("ciudad");
                    Ciudad ciu = gson.fromJson(ci, Ciudad.class);
                    if (model.guardar3(ciu) == 1) {

                        out.write("1");

                    } else {

                        out.write("0");
                    }
                    break;
                case "guardar3":
                    String ru = request.getParameter("ruta");
                    Ruta rut = gson.fromJson(ru, Ruta.class);
                    if (model.guardar4(rut) == 1) {

                        out.write("1");

                    } else {

                        out.write("0");
                    }
                    break;
                case "guardar4":
                    String vu = request.getParameter("vuelo");
                    Vuelo vue = gson.fromJson(vu, Vuelo.class);
                    if (model.guardar5(vue) == 1) {
                        out.write("1");
                    } else {
                        out.write("0");
                    }
                    break;
                case "avionSearch":
                    aviones = model.getAviones();
                    json = gson.toJson(aviones);
                    out.write(json);
                    break;
                case "rutaSearch":
                    rutas = model.getRutas();
                    json = gson.toJson(rutas);
                    out.write(json);
                    break;
                case "vueloSearch":
                    vuelos = model.getVuelos1();
                    json = gson.toJson(vuelos);
                    out.write(json);
                    break;
                /* ******************************************************************************************************** */

 /* ******************************* CAMBIOS HECHOS POR ANDRES CASCANTE SALAS ******************************* */

 /* ******************************************************************************************************** */
                case "Perfil1":
                    String ac1 = request.getParameter("us1");
                    Usuario us2 = gson.fromJson(ac1, Usuario.class);
                    if (model.updateCliente(us2) == 1) {

                        out.write("1");

                    } else {

                        out.write("0");
                    }
                    break;
                case "Perfil2":
                    String ac2 = request.getParameter("us2");
                    Usuario us3 = gson.fromJson(ac2, Usuario.class);
                    if (model.updateAdminis(us3) == 1) {

                        out.write("1");

                    } else {

                        out.write("0");
                    }
                    break;
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public void init() throws ServletException {
        super.init();
        model = new AAMAirlineModel();
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
