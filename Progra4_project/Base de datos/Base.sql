CREATE DATABASE `aamairlines` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `usuario` (
  `cedula` varchar(50) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `celular` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `login` (
  `usuario` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `ciudad` (
  `codigo_ciudad` varchar(50) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `pais` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_ciudad`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `ruta` (
  `codigo_ruta` varchar(45) NOT NULL,
  `ciudad_origen` varchar(45) NOT NULL,
  `ciudad_destino` varchar(45) NOT NULL,
  `duracion` int(11) NOT NULL,
  PRIMARY KEY (`codigo_ruta`),
  KEY `fkorigen_idx` (`ciudad_origen`),
  KEY `fkdestino_idx` (`ciudad_destino`),
  CONSTRAINT `fkdestino` FOREIGN KEY (`ciudad_destino`) REFERENCES `ciudad` (`codigo_ciudad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkorigen` FOREIGN KEY (`ciudad_origen`) REFERENCES `ciudad` (`codigo_ciudad`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `avion` (
  `codigo_avion` varchar(50) NOT NULL,
  `cant_asiento_fila` int(11) NOT NULL,
  `cant_filas` int(11) NOT NULL,
  `cant_pasajeros` int(11) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `marca` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_avion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `vuelo` (
  `codigo_vuelo` varchar(50) NOT NULL,
  `codigo_ruta` varchar(45) NOT NULL,
  `codigo_av` varchar(45) NOT NULL,
  `dia_salida` varchar(10) NOT NULL,
  `hora_llegada` varchar(10) NOT NULL,
  `hora_salida` varchar(45) NOT NULL,
  `precio` decimal(20,0) NOT NULL,
  PRIMARY KEY (`codigo_vuelo`),
  KEY `fkcodigo_avion_idx` (`codigo_av`),
  KEY `fkcodigo_av_idx` (`codigo_av`),
  CONSTRAINT `fkcodigo_av` FOREIGN KEY (`codigo_av`) REFERENCES `avion` (`codigo_avion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `tiquete` (
  `cedula_cliente` varchar(50) NOT NULL,
  `codigo_vuelo` varchar(45) NOT NULL,
  `codigo_tiquete` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_tiquete`),
  KEY `cedula_cliente_idx` (`cedula_cliente`),
  KEY `fkcodigo_vuelo_idx` (`codigo_vuelo`),
  CONSTRAINT `fkcedula_cliente` FOREIGN KEY (`cedula_cliente`) REFERENCES `usuario` (`cedula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkcodigo_vuelo` FOREIGN KEY (`codigo_vuelo`) REFERENCES `vuelo` (`codigo_vuelo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `asiento` (
  `numero` varchar(20) NOT NULL,
  `codigo_tiquete` varchar(45) NOT NULL,
  `codigo_avion` varchar(45) NOT NULL,
  PRIMARY KEY (`numero`),
  KEY `fkcodigo_avion_idx` (`codigo_avion`),
  CONSTRAINT `fkcodigo_avion` FOREIGN KEY (`codigo_avion`) REFERENCES `avion` (`codigo_avion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkcodigo_tiquete` FOREIGN KEY (`numero`) REFERENCES `tiquete` (`codigo_tiquete`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

