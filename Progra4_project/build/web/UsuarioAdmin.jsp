<%-- 
    Document   : Vuelos
    Created on : 19-may-2017, 17:26:50
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*" session="true" %>  
<%     HttpSession sesion = request.getSession(true);      %>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Perfil
        </title>
        
        <%@ include file="include.jspf" %>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmlKfsQUOudExqzvnqoEOb0D8cYodsBag&callback=myMap"></script> 
        
    </head>
    <body>
        <!-- ------------------------ Cuerpo de la pagina ------------------ -->
        <div class="pagina" id="cuerpo">
          <%@ include file="AdminMenu.jspf" %>
                
         <div>
            <span class="iz">
                <!------------------------------- CUERPO ------------------------------->
                <div class="container cuerpo" >
                    <form class="formulario" method="POST" name="formulario" id="formulario" action="javascript:doPerfil2();">
                        <table class="grid">
                            <thead>
                                <tr>
                                    <th colspan="6">INFORMACION DEL USUARIO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp; Usuario: </td>
                                    <td> <input type="text" id="usuario" value="<% out.print(sesion.getAttribute("usuario")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td class="etiqueta">  Email: </td>
                                    <td> <input type="text" id="correo" value="<% out.print(sesion.getAttribute("email")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp;Contraseña: </td>
                                    <td> <input type="password" id="contraseña" value="<% out.print(sesion.getAttribute("cont1")); %>" disabled> </td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td class="etiqueta"> Confirmar contraseña: </td>
                                    <td> <input type="password" id="contraseña1" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp; Nombre:</td>
                                    <td> <input type="text" id="nombre" value="<% out.print(sesion.getAttribute("nombre")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td class="etiqueta"> Apellido:</td>
                                    <td> <input type="text" id="apellidos" value="<% out.print(sesion.getAttribute("apellido")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp; Cédula:</td>
                                    <td> <input type="text" id="cedula" value="<% out.print(sesion.getAttribute("cedula")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                    <td class="etiqueta"> Teléfono1:</td>
                                    <td> <input type="text" id="telefono" value="<% out.print(sesion.getAttribute("telefono")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="etiqueta"> &nbsp;&nbsp; Celular: </td>
                                    <td> <input type="text" id="celular" value="<% out.print(sesion.getAttribute("celular")); %>" disabled></td>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;&nbsp;</td>
                                </tr> 
                                <tr class="local">
                                    <td colspan="6" class="local" id="local">LOCALIZACION</td>
                                </tr>  
                                <tr rowspan="6">
                                    <td colspan="6">
                                             <div id="googleMap" style="width:100%;height:400px;"></div>                                  
                                    </td>
                                </tr>                                      
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="6">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="submit" class="boton15" value="Actualizar" id="registrar" onclick="doPerfil2()"> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="button" class="boton15" value="Editar" id="registrar" onclick="enableInput()"> 
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="button" class="boton15" value="Mostrar Mapa" id="registrar" onclick="myMap()">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="button" class="boton15" value="Ubicarme" id="registrar" onclick="getLocation()"> 
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
            </span>		
        </div> 
          
        <!-- ---------------------- PIE DE PAGINA ---------------------- -->

          <%@ include file="Footer.jspf" %>
          
          
        </div>
       
        <script src="http://code.jquery.com/jquery-latest.js">
        </script>
        <script src="js/bootstrap.min.js" type="text/javascript">
        </script>
        <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
        <link href="css/datepicker.css" rel="stylesheet" type="text/css"/>
        <script src="js/jquery-1.7.1.min.js" type="text/javascript">
        </script>
        <script src="js/jquery-ui-1.8.18.custom.min.js" type="text/javascript">
        </script>
        <script src="js/funcionesJQuery.js" type="text/javascript">
        </script>
    </body>

</html>
