<%-- 
    Document   : PaginaPrincipal
    Created on : 17-may-2017, 10:35:03
    Author     : ACS
--%>

<%@page import="AAMAirline.model.Usuario"%>
<%@page import="AAMAirline.model.Login"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            Inicio
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
        <script src="js/Avion.js" type="text/javascript">
        </script>
        <script src="js/jquery-ui-1.8.18.custom.min.js" type="text/javascript">
        </script>
        <script src="js/funcionesJQuery.js" type="text/javascript">
        </script>
         <script src="js/Avion.js" type="text/javascript">
        </script>
        <script src="js/Ciudad.js" type="text/javascript">
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
            <!-- ---------------------- ENCABEZADO ----------------------- -->
            <%@ include file="Header.jspf" %>
            <!-- ---------------------- Division ------------------------- -->
            <div>
                <!-- -----------------------------BUSCAR VUELOS------------------------------- -->
                <div class="iz">
                    <div class="tableVuelos">
                        <section>
                            <table class="grid">
                                <thead>
                                    <tr>
                                        <th colspan="4">
                                            Vuelos
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="fila">
                                            Origen:
                                        </td>
                                        <td class="fila">
                                            Destino:
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select class="bo" id="origen" type="text">
                                            </select>
                                        </td>
                                        <td>
                                            <select class="bo" id="destino" type="text">
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" class="fila">
                                            <input id="ida" name="radio" type="radio" value="Ida"/> Ida
                                        </td>
                                        <td align="left" class="fila">
                                            <input  checked="checked" id="idaYvuelta" name="radio" type="radio" value="Ida y vuelta"/> Ida y Vuelta
                                        </td>
                                    </tr>
                                    <tr class="fila">
                                        <td class="fila">
                                            Partida:
                                        </td>
                                        <td class="fila">
                                            Regreso:
                                        </td>
                                    </tr>
                                    <tr class="fila">
                                    <tr>
                                        <td>
                                            <input class="datepicker" id="datepicker1" type="text"/>
                                        </td>
                                        <td>
                                            <input class="datepicker" id="datepicker2" type="text"/>
                                        </td>
                                    </tr>
                                    </tr>
                                    <tr>
                                        <td class="fila">
                                            Cantidad:
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cantidad">
                                            <select class="bo" id="combo" name="combo">
                                                <option value="1">
                                                    1
                                                </option>
                                                <option value="2">
                                                    2
                                                </option>
                                                <option value="3">
                                                    3
                                                </option>
                                                <option value="4">
                                                    4
                                                </option>
                                                <option value="5">
                                                    5
                                                </option>
                                                <option value="6">
                                                    6
                                                </option>
                                                <option value="7">
                                                    7
                                                </option>
                                                <option value="8">
                                                    8
                                                </option>
                                                <option value="9">
                                                    9
                                                </option>
                                                <option value="10">
                                                    10
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td class="fila" colspan="4">
                                            <input class="boton" id="buscar" type="button" value="Buscar">
                                            </input>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </section>
                    </div>
                </div>
                <!-- ----------------------------- SLIDES DE DESCUENTOS ----------------------------- -->
                <div class="der">
                    <div class="container">
                        <div class="row" id="row1">
                            <div class="slider" id="fondo">
                                <div class="carousel slide" data-ride="carousel" id="carousel-1">
                                    <ol class="carousel-indicators">
                                        <li class="active" data-slide-to="0" data-target="#carousel-1">
                                        </li>
                                        <li data-slide-to="1" data-target="#carousel-1">
                                        </li>
                                        <li data-slide-to="2" data-target="#carousel-1">
                                        </li>
                                        <li data-slide-to="3" data-target="#carousel-1">
                                        </li>
                                        <li data-slide-to="4" data-target="#carousel-1">
                                        </li>
                                    </ol>
                                    <div class="carousel-inner" role="listbox">                                
                                        <div class="item active" id="div1">
                                            <div class="carousel-caption hidden-xs hidden-sm" id="COMPRAR"> 
                                                <input class="COMPRAR" id="Comprar1" type="button" value="COMPRAR">
                                            </div>
                                        </div>
                                        <div class="item" id="div2">
                                            <div class="carousel-caption hidden-xs hidden-sm" id="COMPRAR"> 
                                                <input class="COMPRAR" id="Comprar2" type="button" value="COMPRAR">
                                            </div>
                                        </div>
                                        <div class="item" id="div3">    
                                            <div class="carousel-caption hidden-xs hidden-sm" id="COMPRAR"> 
                                                <input class="COMPRAR" id="Comprar3" type="button" value="COMPRAR">
                                            </div>
                                        </div>
                                        <div class="item" id="div4">
                                            <div class="carousel-caption hidden-xs hidden-sm" id="COMPRAR"> 
                                                <input class="COMPRAR" id="Comprar4" type="button" value="COMPRAR">
                                            </div>
                                        </div>
                                        <div class="item" id="div5">
                                            <div class="carousel-caption hidden-xs hidden-sm" id="COMPRAR">
                                                <input class="COMPRAR" id="Comprar5" type="button" value="COMPRAR">
                                            </div>
                                        </div>
                                    </div>
                                    <a class="left carousel-control" data-slide="prev" href="#carousel-1" role="button">
                                        <span aria-hidden="true" class="glyphicon glyphicon-chevron-left">
                                        </span>
                                    </a>
                                    <a class="right carousel-control" data-slide="next" href="#carousel-1" role="button">
                                        <span aria-hidden="true" class="glyphicon glyphicon-chevron-right">
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ----------------------resultados de busqueda------------- -->
            
            <div class="prueba">
            <div class="tableVuelos" id="busqueda">
                <table class="grid" id="tablaBusqueda">
                    <thead>
                        <tr>
                            <th colspan="6" > &nbsp;&nbsp;Resultados de la busqueda&nbsp;&nbsp; </th> 
                        </tr>
                    </thead>
                    <tbody id="tablaBusqueda"> </tbody>
                </table>
            </div>
            
            
            </div>
            <!-- ---------------------- PIE DE PAGINA ---------------------- -->

            <%@ include file="Footer.jspf" %>
        </div>
        <!-- ------------------------ Parte de compras ---------------------- -->
        <div id="compra">
            <div class="iz" id="info">
                <div class="tableVuelos">
                    <table class="grid">
                        <thead>
                            <tr>
                                <th colspan="4">
                                    Orden de Compra
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="fila">
                                    Origen:
                                </td>
                                <td class="fila">
                                    Destino:
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <label class="bo" id="origenC">
                                    </label>
                                </td>
                                <td>
                                    <label class="bo" id="destinoC">
                                    </label>
                                </td>
                            </tr>
                            <tr class="fila">
                                <td class="fila">
                                    Partida:
                                </td>
                                <td class="fila">
                                    Regreso:
                                </td>
                            </tr>
                            <tr class="fila">
                            <tr>
                                <td>
                                    <label class="bo" id="partida">
                                    </label>
                                </td>
                                <td>
                                    <label class="bo" id="regreso">
                                    </label>
                                </td>
                            </tr>
                            </tr>
                            <tr>
                                <td class="fila">
                                    Cantidad:
                                </td>
                                <td class="fila">
                                    Precio:
                                </td>
                            </tr>
                            <tr>
                                <td class="cantidad">
                                    <label class="bo" id="cantidad">
                                    </label>
                                </td>
                                <td class="fila">
                                    <label class="bo" id="price">
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td class="fila">
                                    <input class="boton" id="cancelOrder" type="button" value="Cancelar">
                                    </input>
                                </td>
                                <td class="fila" colspan="2">
                                    <input class="boton" id="goTi" type="button" value="Continuar">
                                    </input>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div class="derAv" id="avionAsientos">
            </div>
            <div id ="aquiOrden" style="display: none;">
                         <table class="grid">
                        <thead>
                            <tr>
                                <th colspan="4">
                                    Orden de Compra
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="fila">
                                    Origen:
                                </td>
                                <td class="fila">
                                    Destino:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="bo" id="origenC2">
                                    </label>
                                </td>
                                <td>
                                    <label class="bo" id="destinoC2">
                                    </label>
                                </td>
                            </tr>
                            <tr class="fila">
                                <td class="fila">
                                    Partida:
                                </td>
                                <td class="fila">
                                    Regreso:
                                </td>
                            </tr>
                            <tr class="fila">
                            <tr>
                                <td>
                                    <label class="bo" id="partida2">
                                    </label>
                                </td>
                                <td>
                                    <label class="bo" id="regreso2">
                                    </label>
                                </td>
                            </tr>
                            </tr>
                            <tr>
                                <td class="fila">
                                    Asientos:
                                </td>
                                <td id="aquiVan">
                                    <label class="bo" id="estosSon">
                                        
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td class="fila">
                                    Cantidad:
                                </td>
                                <td class="fila">
                                    Precio:
                                </td>
                            </tr>
                            <tr>
                                <td class="cantidad">
                                    <label class="bo" id="cantidad2">
                                    </label>
                                </td>
                                <td class="fila">
                                    <label class="bo" id="price2">
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td class="fila">
                                    <input class="boton" id="terminarOrden2" type="button" value="Cancelar">
                                    </input>
                                </td>
                                <td class="fila" colspan="2">
                                    <input class="boton" id="terminarOrden" type="button" value="Continuar">
                                    </input>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
            </div>
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
