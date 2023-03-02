document.getElementById('boton').onclick = function () {
    console.log ("capturamos el evento onclick");
    document.getElementById("demo"),this.innerHTML = 
    "-Carné de conducir.<br>- Vehículo propio.<br>- Disponibilidad total.";
}

let text=
 "Buena comunicación <br> Gestión de grandes equipos <br> Resolución de problemas <br> Dominio del paquete Office <br> Espíritu comercial <br> Agilidad con los resultados" 

document.getElementById('hab').onclick = function() {
    document.getElementById("texto").innerHTML = text;
}


document.getElementById('len').onclick = function() {
    document.getElementById("info").innerHTML = "Castellano y Catalán: Nativo <br> Inglés: Nivel alto"
}

var x = document.getElementById("ubi");
document.getElementById('ubicacion').onclick = 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Este navegador no soporta la Geolocalizacón.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Permiso de Geolocalización denegado."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Ubicación no encontrada."
      break;
    case error.TIMEOUT:
      x.innerHTML = "Tiempo de respuesta agotado."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "Ocurrió un error."
      break;
  }
}
