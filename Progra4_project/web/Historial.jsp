<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Ciudades
        </title>
           
         <%@ include file="include.jspf" %>
         
    </head>
    <body>
        <!-- ------------------------ Cuerpo de la pagina ------------------ -->
        <div class="pagina" id="cuerpo">
            <!-- ---------------------- ENCABEZADO ------------------------- -->
            <%@ include file="Header.jspf" %>
                   
            <!-- ---------------------- CUERPO ---------------------------- -->
            
           <div class="col-md-8 col-md-offset-2" id="tablaCompras">
                <table border=2 class="table">
                    <thead class="thead-inverse">
                        <tr>
                            <th>Historial de compras</th> 
                            <th>Ver comprobantes</th>
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