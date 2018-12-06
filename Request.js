function loadDoc(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var obj = JSON.parse(this.responseText);
      var infracciones = obj.infracciones;
      var table = document.createElement("TABLE");
      var numIncremental = 0;
      var row = table.insertRow(numIncremental);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      numIncremental++;

      cell1.innerHTML = "<b>idInfraccion</b>";
      cell2.innerHTML = "<b>tipoInfraccion</b>";
      cell3.innerHTML = "<b>montoAPagar</b>";
      cell4.innerHTML = "<b>existeAcarreo</b>";

      for ( i = 0 ; i < infracciones.length ; i++)
      {
        if(infracciones[i].id != undefined)

        {
          var id = infracciones[i].id;
          var tipoInfraccion = infracciones[i].tipoInfraccion;
          var tipoInfraccion2 = determinarInfraccion(tipoInfraccion);
          var montoAPagar = infracciones[i].montoAPagar;
          var existeAcarreo = infracciones[i].existeAcarreo;
          var acarreo;
          if(existeAcarreo)
          {
            acarreo = "si";
          }
          else
          {
            acarreo = "no";
          }
          var rowA = table.insertRow(numIncremental);
          var cell1A = rowA.insertCell(0);
          var cell2A = rowA.insertCell(1);
          var cell3A = rowA.insertCell(2);
          var cell4A = rowA.insertCell(3);
          cell1A.innerHTML = id;
          cell2A.innerHTML = tipoInfraccion2;
          cell3A.innerHTML = montoAPagar;
          cell4A.innerHTML = acarreo;
          numIncremental++;
        }
       
      }
      document.getElementById("divInterno2").appendChild(table);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


function determinarInfraccion(numero){
var xmlhttp = new XMLHttpRequest();
var url = "https://infraccionesya.herokuapp.com/api/tiposInfraccion/" + numero +"/";
var descripcion;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        descripcion = myArr.descripcion;
    }
};
xmlhttp.open("GET", url, false);
xmlhttp.send();

return descripcion;
}