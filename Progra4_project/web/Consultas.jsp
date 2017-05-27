<%-- 
    Document   : Consultas
    Created on : 17-may-2017, 10:36:13
    Author     : ACS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <title>Consultas</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/estilo1.css" rel="stylesheet" type="text/css" />
    <script src="js/Metodos.js" type="text/javascript"></script>
    <script src="js/Usuario.js" type="text/javascript"></script>
</head>

<body class="pagina">

    <!------------------------------- ENCABEZADO ------------------------------->
        
        <%@ include file="Header.jspf" %>
	
	<!------------------------------- TERMINA ENCABEZADO ------------------------------->

    <!------------------------------- CUERPO ------------------------------->
    <div class="container_cuerpo">
        <form id="claro">
            <div class="row" id="contactenos">
                <div class="form-group">
                    <h4 class="col-md-12" id="contactenos"> CONTÁCTENOS</h4>
                    <br>

                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="nombre" class="control-label col-md-12" id="claro">Nombre:</label>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="nombre">
                    </div>
                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="Email" class="control-label col-md-12" id="claro">Email:</label>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="Email">
                    </div>
                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="tel" class="control-label col-md-12" id="claro">Teléfono:</label>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="tel">
                    </div>
                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="ti" class="control-label col-md-12" id="claro">Titulo:</label>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="ti">
                    </div>
                </div>
            </div>

            <div class="row" id="claro">
                <div class="form-group">
                    <label for="msm" class="control-label col-md-12" id="claro">Mensaje:</label>
                    <div class="col-md-10">
                        <textarea class="form-control" id="msm" rows="10" cols="50"> </textarea>
                    </div>
                </div>
            </div>

            <div class="row" id="claro">&nbsp;</div>

            <div class="row" id="claro">
                <div class="form-group">
                    <div class="col-md-2">
                        <button class="btn btn-primary form-control ui-button ui-widget ui-corner-all" id="btn">Enviar</button>
                    </div>
                </div>
            </div>

            <div class="row" id="claro">&nbsp;</div>
            <div class="row" id="claro">&nbsp;</div>
        </form>
    </div>
    <!------------------------------- TERMINA CUERPO ------------------------------->

    <br>
    <br>

    <!-- ---------------------- PIE DE PAGINA ---------------------- -->

    <%@ include file="Footer.jspf" %>
    
    <!------------------------------- TERMINA PIE DE PAGINA ------------------------------->

    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
</body>

</html>
