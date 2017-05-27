/* global JsonUtils */

var Proxy = Proxy || {};
Proxy.getCiudades = function (callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=ciudadListAll";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send();
};

Proxy.getCiudad = function (cod, callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=getCiudad";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send("codigo1=" + cod);
};
Proxy.getRuta = function (cod, callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=getRuta";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send("codigoR=" + cod);
};

Proxy.getAvion = function (cod, callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=getAvion";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send("codigoA=" + cod);
};


Proxy.getPromo = function (callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=vueloListPromo";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.send();
};
Proxy.vuelosSearch = function (origen, destino, diaIda, callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=vueloListSearch";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send("origenYdestino=" + origen + "-" + destino + "&diaIda=" + diaIda);
};

Proxy.userLogin = function (user, callBack) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=userLogin";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            jsonText = AJAX_req.responseText;
            var object = JSON.parse(jsonText, JsonUtils.revive);
            callBack(object);
        }
    };
    AJAX_req.send("user=" + jsonText);
};

Proxy.guardar = function (user, callback) {
    var enviar;
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=guardar";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar = JsonUtils.enviar(user);
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            if (parseInt(AJAX_req.responseText) == 1) {
                callback(1);
            } else {
                callback(0);
            }
        }
    };
    AJAX_req.send("us=" + enviar);
};


Proxy.guardar1 = function (aviones, callback) {
    var env;
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=guardar1";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    env = JsonUtils.enviar(aviones);
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            if (parseInt(AJAX_req.responseText) == 1) {
                callback(1);
            } else {
                callback(0);
            }
        }
    };
    AJAX_req.send("avion=" + env);
};

Proxy.guardar2 = function (ciudades, callback) {
    var env;
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=guardar2";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    env = JsonUtils.enviar(ciudades);
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            if (parseInt(AJAX_req.responseText) == 1) {
                callback(1);
            } else {
                callback(0);
            }
        }
    };
    AJAX_req.send("ciudad=" + env);
};

Proxy.guardar3 = function (rutas, callback) {
    var env;
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=guardar3";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    env = JsonUtils.enviar(rutas);
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            if (parseInt(AJAX_req.responseText) == 1) {
                callback(1);
            } else {
                callback(0);
            }
        }
    };
    AJAX_req.send("ruta=" + env);
};

Proxy.guardar4 = function (vuelos, callback) {
    var env;
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=guardar4";
    AJAX_req.open("POST", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    env = JsonUtils.enviar(vuelos);
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            if (parseInt(AJAX_req.responseText) == 1) {
                callback(1);
            } else {
                callback(0);
            }
        }
    };
    AJAX_req.send("vuelo=" + env);

};

Proxy.avionSearch = function (callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=avionSearch";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send();
}

Proxy.rutaSearch = function (callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=rutaSearch";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState == 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send();
}

Proxy.vueloSearch = function (callback) {
    var AJAX_req = new XMLHttpRequest();
    url = "/Progra4_project/AAMAirlinesService?action=vueloSearch";
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    AJAX_req.onreadystatechange = function () {
        if (AJAX_req.readyState === 4 && AJAX_req.status === 200) {
            var object = JSON.parse(AJAX_req.responseText, JsonUtils.revive);
            callback(object);
        }
    };
    AJAX_req.send();
}