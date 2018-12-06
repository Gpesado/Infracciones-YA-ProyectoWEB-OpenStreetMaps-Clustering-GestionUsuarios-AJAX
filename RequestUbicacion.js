function loadDocUbicacion(url) 
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() 
  {
    if(this.status >= 400 & this.status < 500)
    {
      var textnode = document.createTextNode("No se encontro conicidencia con ese codigo.");
      document.getElementById("divRespUbicacion").appendChild(textnode);
      var element = document.createElement("BR");
      document.getElementById("divRespUbicacion").appendChild(element);
    }
    else if(this.status >= 500 & this.status < 600)
    {
      var textnode = document.createTextNode("El servidor no responde.");
      document.getElementById("divRespUbicacion").appendChild(textnode);
      var element = document.createElement("BR");
      document.getElementById("divRespUbicacion").appendChild(element);
    }
     else if (this.readyState == 4 && this.status == 200) 
    {
      var obj = JSON.parse(this.responseText);
      var deposito = obj.deposito;

      if(obj.infraccionId != undefined)
      {
        var info = "El vehiculo remolcado asociado a la infraccion " + obj.infraccionId + " esta en el  "

        if(obj.deposito != undefined)
        {
          var nombre = deposito.nombre;
          var direccion = deposito.direccion;
          var telefono = deposito.telefono;
          var horarios = deposito.horarios;

          info = info + "deposito '" + nombre + "' con direccion en " + direccion +
          " telefono  " + telefono + " horarios " + horarios;
        }
        else info = info + "no se encontro informacion del deposito :("

        var textnode = document.createTextNode(info);
        document.getElementById("divRespUbicacion").appendChild(textnode);
        var element = document.createElement("BR");
        document.getElementById("divRespUbicacion").appendChild(element);  
      }  
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}