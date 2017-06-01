<%-- 
    Document   : Vuelos
    Created on : 19-may-2017, 17:26:50
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Vuelos
        </title>
                
         <%@ include file="include.jspf" %>
         
    </head>
    <body>
        <!-- ------------------------ Cuerpo de la pagina ------------------ -->
        <div class="pagina" id="cuerpo">
            <!-- ---------------------- ENCABEZADO ------------------------- -->
            <%@ include file="AdminMenu.jspf" %>
            
           <div class="SubAdmin">
                <ul class="MyMenuSubAdmi">
                    <li>
                        <a href="Vuelos_1.jsp" title="Nuevo Ingreso">
                            <image border="0" src="">
                            Nuevo Ingreso
                            </image>
                        </a>
                    </li>
                    <li>
                        <a href="Vuelos_2.jsp" title="Administrar">
                            <image border="0" src="">
                            Administrar
                            </image>
                        </a>
                    </li>               
                </ul>
            </div>
                        
            <div class="container_cuerpo">
                <form id="claro" action="javascript:doSubmitVuelos()">
                    <div class="row" id="IngAdm">                
                        NUEVO INGRESO                
                    </div>
                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="nombre" class="control-label col-md-12" id="claro">Codigo del vuelo</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="codigo_vuelo">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="Email" class="control-label col-md-12" id="claro">Codigo de la ruta</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="codigo_ruta">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="tel" class="control-label col-md-12" id="claro">Codigo del avion</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="codigo_avion">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="ti" class="control-label col-md-12" id="claro">Dia de salida</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="salida">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="ti" class="control-label col-md-12" id="claro">Hora de salida</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="horaS">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="ti" class="control-label col-md-12" id="claro">Hora de llegada</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="horaL">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="ti" class="control-label col-md-12" id="claro">Precio</label>
                            <div class="col-md-5">
                                <input type="text" class="form-control" id="precio">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row" id="claro">
                        <div class="form-group">
                            <label for="ti" class="control-label col-md-12" id="claro">Imagen</label>
                            <div class="col-md-5">
                                <input type="file" class="form-control" id="image1">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row" id="claro">
                        <div class="form-group">
                            <div class="col-md-2">
                                <label for="ti" class="control-label col-md-12" id="claro">Descuento</label>
                                <input class="btn btn-primary form-control ui-button ui-widget ui-corner-all" id="desc" type="radio" value="desc">
                            </div>
                        </div>
                    </div>
                    
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
