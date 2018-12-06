function cargarVistaControlador()
{
	document.getElementById("divInterno2").innerHTML = "";
	document.getElementById("texto").value = "";
	document.getElementById("pantalla2").style.display = "none";
	document.getElementById("pantalla3").style.display = "none";
	document.getElementById("pantalla4").style.display = "none";

	document.getElementById("pantalla1").style.display = "inline";
	cargarMapaControlador();
}

function cargarVistaUsuario()
{
	document.getElementById("divInterno2").innerHTML = "";
	document.getElementById("texto").value = "";
	document.getElementById("pantalla1").style.display = "none";
	document.getElementById("pantalla3").style.display = "none";
	document.getElementById("pantalla4").style.display = "none";
	document.getElementById("pantalla2").style.display = "inline";
	cargarMapaUsuario();
}

function cargarVistaInfracciones()

{
	document.getElementById("divInterno2").innerHTML = "";
	document.getElementById("texto").value = "";
	document.getElementById("pantalla1").style.display = "none";
	document.getElementById("pantalla2").style.display = "none";
	document.getElementById("pantalla4").style.display = "none";
	document.getElementById("pantalla3").style.display = "inline";
}

function accion()
{
	var val = document.getElementById("texto").value;
	var url = "https://infraccionesya.herokuapp.com/api/"+val+"/infracciones/";
	document.getElementById("divInterno2").innerHTML = "";
	document.getElementById("texto").value = "";
	loadDoc(url);

}

function requestUbicacion()
{
	var val = document.getElementById("idInfraccion").value;
	var url = "https://infraccionesya.herokuapp.com/api/acarreo/"+val;
	document.getElementById("divRespUbicacion").innerHTML = "";
	document.getElementById("idInfraccion").value = "";
	loadDocUbicacion(url);

}

function cargarVistaAcarreo()
{
	document.getElementById("divInterno2").innerHTML = "";
	document.getElementById("texto").value = "";
	document.getElementById("pantalla1").style.display = "none";
	document.getElementById("pantalla2").style.display = "none";
	document.getElementById("pantalla3").style.display = "none";
	document.getElementById("pantalla4").style.display = "inline";
}