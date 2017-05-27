// funcion Localizacion
function Localizacion(id_localizacion, latitud, longitud, zoom) {
	this.Localizacion(id_localizacion, latitud, longitud, zoom);
}

// prototype asociado a la funcion Localizacion
// solo metodos
Localizacion.prototype = {
	Localizacion: function (id_localizacion, latitud, longitud, zoom) {
		this.id_localizacion = id_localizacion;
		this.latitud = latitud;
		this.longitud = longitud;
		this.zoom = zoom;
	},
	devString: function () {
		return "Localizacion: " + this.id_localizacion
			+ "\n -> Latitud: " + this.latitud
			+ "\n -> Longitud: " + this.longitud
			+ "\n -> Zoom" + this.zoom;
	},
	columnValues: function () {
		return this.latitud + ", "
			+ this.longitud;
	},
	columnNames: function () {
		return "latitud, longitud";
	}
}