<%-- 
    Document   : Aviones
    Created on : 19-may-2017, 17:26:33
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Aviones
        </title>
           
         <%@ include file="include.jspf" %>
         
    </head>
    <body>
        <!-- ------------------------ Cuerpo de la pagina ------------------ -->
        <div class="pagina" id="cuerpo">
            <!-- ---------------------- ENCABEZADO ------------------------- -->
            <%@ include file="AdminMenu.jspf" %>
            
            <!-- ---------------------- NAVEGACION ADMINISTRACION ----------------------- -->
            <div class="SubAdmin">
                <ul class="MyMenuSubAdmi">
                    <li>
                        <a href="Aviones_1.jsp" title="Nuevo Ingreso">
                            <image border="0" src="">
                            Nuevo Ingreso
                            </image>
                        </a>
                    </li>
                    <li>
                        <a href="Aviones_2.jsp" title="Administrar">
                            <image border="0" src="">
                            Administrar
                            </image>
                        </a>
                    </li>               
                </ul>
            </div>      
            
            <!-- ---------------------- CUERPO ---------------------------- -->
      
            <div style="display: block" class="administracion" id="tablaBusqueda">
                <table border=2 class="admi">
                    <thead>
                        <tr>
                            <th> &nbsp;&nbsp;&nbsp; Código &nbsp;&nbsp;&nbsp;</th> 
                            <th>&nbsp;&nbsp;&nbsp; Asientos por fila &nbsp;&nbsp;&nbsp;</th>
                            <th> &nbsp;&nbsp;&nbsp; Filas &nbsp;&nbsp;&nbsp;</th>
                            <th> &nbsp;&nbsp;&nbsp; Pasajeros &nbsp;&nbsp;&nbsp;</th>
                            <th> &nbsp;&nbsp;&nbsp; Marca &nbsp;&nbsp;&nbsp;</th>
                            <th>&nbsp;&nbsp;&nbsp; Modelo &nbsp;&nbsp;&nbsp; </th> 
                        </tr>
                    </thead>
                    <tbody id="listado"> </tbody>

                </table>
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