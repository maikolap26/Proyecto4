<%-- 
    Document   : Comprar
    Created on : 17-may-2017, 10:36:22
    Author     : ACS
--%>

    <%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>

    <head>
	<title>Comprar</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/estilo1.css" rel="stylesheet" type="text/css" />
	<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="js/script.js" type="text/javascript"></script>

	<link href="css/normalize.css" rel="stylesheet" type="text/css" />
	<link href="css/datepicker.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
	<script src="js/funcionesJQuery.js" type="text/javascript"></script>
	<script src="js/Metodos.js" type="text/javascript"></script>
	<script src="js/Usuario.js" type="text/javascript"></script>
    </head>

    <body class="pagina">

	<!------------------------------- ENCABEZADO ------------------------------->
        
        <%@ include file="Header.jspf" %>
	
	<!------------------------------- TERMINA ENCABEZADO ------------------------------->
	
	<!-------------------------------BUSCAR VUELOS----------------------------------------->

	<div class="tableVuelos">
            <section>
		<table class="grid">
                    <thead>
			<tr>
                            <th colspan="4"> Vuelos </th>
			</tr>
                    </thead>
                    <tbody>
			<tr>
                            <td>&nbsp;</td>
			</tr>
			<tr>
                            <td>&nbsp; Origen: </td>
                            <td>&nbsp;</td>
                            <td> Destino:</td>
			</tr>
			<tr>
                            <td><input type="text" class="bo"> </td>
                            <td> </td>
                            <td><input type="text" class="bo"> </td>
			
			</tr>
			<tr>
                            <td>&nbsp;</td>
			</tr>
			<tr>
                            <td>&nbsp; ¿Fechas?</td>
			</tr>
			<tr>
                            <td>&nbsp;</td>
			</tr>
			<tr>
                            <td>&nbsp; Partida: </td>
                            <td>&nbsp;</td>
                            <td>Regreso: </td>
			</tr>
			<tr>
                            <td><input type="text" id="datepicker1" class="datepicker" style="z-index: 15;"></td>
                            <td> </td>
                            <td><input type="text" id="datepicker2" class="datepicker" style="z-index: 15;"></td>
			</tr>
			<tr>
                            <td>&nbsp;</td>
			</tr>
			<tr>
                            <td>&nbsp; Cantidad: </td>
			</tr>
			<tr>
                            <td> 
                                <select name="combo" class="bo">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
				</select>
                            </td>
			</tr>
			<tr>
                            <td>&nbsp;</td>
			</tr>
                    </tbody>
                    <tfoot>
			<tr>
                            <td colspan="4"> <input type="button" value="Comprar" class="boton"> </td>
			</tr>
			<tr>
                            <td>&nbsp;</td>
			</tr>
                    </tfoot>
		</table>
            </section>
	</div>

	<!------------------------------- TERMINA BUSCAR VUELOS ------------------------------->
	<br>
	<br>
        <!-- ---------------------- PIE DE PAGINA ---------------------- -->

            <%@ include file="Footer.jspf" %>

	<!------------------------------- TERMINA PIE DE PAGINA ------------------------------->

	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<link href="css/normalize.css" rel="stylesheet" type="text/css" />
	<link href="css/datepicker.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
	<script src="js/funcionesJQuery.js" type="text/javascript"></script>

</body>
<script src="js/scriptImagenes.js" type="text/javascript"></script>

</html>
