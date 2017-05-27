<%-- 
    Document   : Ciudades
    Created on : 19-may-2017, 17:27:00
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Ciudades
        </title>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <link href="css/boots	trap.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/estilo1.css" rel="stylesheet" type="text/css"/>
        <script src="https://code.jquery.com/jquery-1.10.2.js">
        </script>
        <script src="js/script.js" type="text/javascript">
        </script>
        <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
        <link href="css/datepicker.css" rel="stylesheet" type="text/css"/>
        <script src="js/jquery-1.7.1.min.js" type="text/javascript">
        </script>
        <script src="js/jquery-ui-1.8.18.custom.min.js" type="text/javascript">
        </script>
        <script src="js/funcionesJQuery.js" type="text/javascript">
        </script>
        <script src="js/Avion.js" type="text/javascript">
        </script>
        <script src="js/Ciudad.js" type="text/javascript">
        </script>
        <script src="js/Avion.js" type="text/javascript">
        </script>
        <script src="js/Vuelo.js" type="text/javascript">
        </script>
        <script src="js/Ruta.js" type="text/javascript">
        </script>
        <script src="js/Tiquete.js" type="text/javascript">
        </script>
        <script src="js/Usuario.js" type="text/javascript">
        </script>
        <script src="js/Proxy.js" type="text/javascript">
        </script>
        <script src="js/JsonUtils.js" type="text/javascript">
        </script>
        <script src="js/PP-Vista.js" type="text/javascript">
        </script>
        <script src="js/PP-Controlador.js" type="text/javascript">
        </script>
        <script src="js/PP-Modelo.js" type="text/javascript">
        </script>

        </meta>
        </meta>
    </head>
    <body>
        <!-- ------------------------ Cuerpo de la pagina ------------------ -->
        <div class="pagina" id="cuerpo">
            <!-- ---------------------- ENCABEZADO ------------------------- -->
            <%@ include file="AdminMenu.jspf" %>
            
           <div class="SubAdmin">
                <ul class="MyMenuSubAdmi">
                    <li>
                        <a href="Ciudades_1.jsp" title="Nuevo Ingreso">
                            <image border="0" src="">
                            Nuevo Ingreso
                            </image>
                        </a>
                    </li>
                    <li>
                        <a href="Ciudades_2.jsp" title="Administrar">
                            <image border="0" src="">
                            Administrar
                            </image>
                        </a>
                    </li>               
                </ul>
            </div>
            
            <div class="container_cuerpo">
                <form id="claro" action="javascript:doSubmitCiudades()">
                    <div class="row" id="IngAdm">                
                        NUEVO INGRESO                
                    </div>
                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="nombre" class="control-label col-md-12" id="claro">Codigo de la ciudad</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="codigo">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="Email" class="control-label col-md-12" id="claro">Nombre</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="nombre">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="tel" class="control-label col-md-12" id="claro">Pais</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="pais">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">&nbsp;</div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <div class="col-md-2">
                               <input class="btn btn-primary form-control ui-button ui-widget ui-corner-all" id="btn" type="submit" value="Ingresar">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">&nbsp;</div>
                    <div class="row" id="claro">&nbsp;</div>
                </form>
            </div> 
            
            <br>
            <br>
            
            
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
