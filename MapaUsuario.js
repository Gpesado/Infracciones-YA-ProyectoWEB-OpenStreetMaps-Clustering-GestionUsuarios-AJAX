
function cargarMapaUsuario()
{
	var ungsLocation = [-34.5221554, -58.7000067];

	var zonaAzul = new Zona("azul", [
		L.latLng(-34.515594, -58.705654),
		L.latLng(-34.523503, -58.714062),
		L.latLng(-34.519177, -58.719890),
		L.latLng(-34.511089, -58.711374),
		L.latLng(-34.514062, -58.707909),
		L.latLng(-34.513824, -58.707584),
	]);

	var zonaVerde = new Zona("verde",[
		L.latLng(-34.515594, -58.705654),
		L.latLng(-34.52350, -58.71417),
		L.latLng(-34.52808, -58.70784),
		L.latLng(-34.52046, -58.69986),
		]);
	
	var estacionamientosAzules = [];
	estacionamientosAzules[0] = new Estacionamiento("adea-0001",zonaAzul,L.latLng(-34.51601,-58.71335),"libre","-");
	estacionamientosAzules[1] = new Estacionamiento("sfgn-0002",zonaAzul,L.latLng(-34.51707,-58.70918),"libre","-");
	estacionamientosAzules[2] = new Estacionamiento("hgdh-1234",zonaAzul,L.latLng(-34.51930, -58.71846),"libre","-");

	var estacionamientoMio = new Estacionamiento("MIE-123",zonaAzul,L.latLng(-34.51859,-58.71600),"ocupado","1232-66asl");

	var map = L.map('pantalla2').setView(ungsLocation,15);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{atribution: 'aaa'}).addTo(map);

	var polygonZonaAzul = L.polygon(zonaAzul.limites).addTo(map);

	var greenIcon= new L.Icon({
  		iconUrl: 'leaflet/images/marker-icon-2x-green.png',
  		shadowUrl: 'leaflet/images/marker-shadow.png',
  		iconSize: [25, 41],
  		iconAnchor: [12, 41],
  		popupAnchor: [1, -34],
  		shadowSize: [41, 41]
	});

	var purpleIcon= new L.Icon({
  		iconUrl: 'leaflet/images/marker-icon-2x-purple.png',
  		shadowUrl: 'leaflet/images/marker-shadow.png',
  		iconSize: [25, 41],
  		iconAnchor: [12, 41],
  		popupAnchor: [1, -34],
  		shadowSize: [41, 41]
	});

	var redIcon= new L.Icon({
  		iconUrl: 'leaflet/images/marker-icon-2x-red.png',
  		shadowUrl: 'leaflet/images/marker-shadow.png',
  		iconSize: [25, 41],
  		iconAnchor: [12, 41],
  		popupAnchor: [1, -34],
  		shadowSize: [41, 41]
	});

	var purpleIcon= new L.Icon({
  		iconUrl: 'leaflet/images/marker-icon-2x-purple.png',
  		shadowUrl: 'leaflet/images/marker-shadow.png',
  		iconSize: [25, 41],
  		iconAnchor: [12, 41],
  		popupAnchor: [1, -34],
  		shadowSize: [41, 41]
	});

	var marcadorMiEstacionamiento = L.marker(estacionamientoMio.ubicacion,  {icon: redIcon});
	marcadorMiEstacionamiento.bindPopup("<b>Mi estacionamiento</b><br>"+"Codigo: "+estacionamientoMio.codigo+"<br>"+"Zona: "+estacionamientoMio.zona.color).openPopup();
	map.addLayer(marcadorMiEstacionamiento);

	var marcadoresAzules = [];
	for(i = 0 ; i < estacionamientosAzules.length; i++)
	{
		marcadoresAzules[i] = L.marker(estacionamientosAzules[i].ubicacion);
		marcadoresAzules[i].bindPopup("<b>Estacionamiento</b><br>"+"Codigo: "+estacionamientosAzules[i].codigo+"<br>"+"Zona: "+estacionamientosAzules[i].zona.color).openPopup();
		map.addLayer(marcadoresAzules[i]);
	}

	var cluster1 = L.markerClusterGroup();
	cluster1.addLayers([
		marcadoresAzules[0],marcadoresAzules[1],marcadoresAzules[2], marcadorMiEstacionamiento
		]);
	map.addLayer(cluster1);

	var polygonZonaVerde = L.polygon(zonaVerde.limites).addTo(map); 

	var estacionamientosVerdes = [];
	estacionamientosVerdes[0] = new Estacionamiento("abcd-4155",zonaVerde,L.latLng(-34.52048,-58.70132),"libre","-");
	estacionamientosVerdes[1] = new Estacionamiento("xxds-2300",zonaVerde,L.latLng(-34.52507, -58.70813),"libre","-");

	var marcadoresVerdes = [];
	/*for(int = 0 ; i < estacionamientosVerdes.length; i++)
	{
		marcadoresVerdes[i] = L.marker(estacionamientosVerdes[i].ubicacion/*, {icon: greenIcon});
	}*/
	
	marcadoresVerdes[0] = L.marker(estacionamientosVerdes[0].ubicacion, {icon: greenIcon});
	marcadoresVerdes[1]= L.marker(estacionamientosVerdes[1].ubicacion, {icon: greenIcon});
	for (i = 0; i < marcadoresVerdes.length; i++) 
	{
		marcadoresVerdes[i].bindPopup("<b>Estacionamiento</b><br>"+"Codigo: "+estacionamientosVerdes[i].codigo+"<br>"+"Zona: "+estacionamientosVerdes[i].zona.color).openPopup();
		map.addLayer(marcadoresVerdes[i]);
	} 

	
	var cluster2 = L.markerClusterGroup();
	cluster2.addLayers([

		marcadoresVerdes[0],
		marcadoresVerdes[1],
		]);
	map.addLayer(cluster2);

	var comercios = [];
	comercios[0] = new Comercio("Maxikiosco Fito","maxkio-332223", "Romain Rolland", "567", L.latLng(-34.51661, -58.71190));
	comercios[1] = new Comercio("Pancheria Roldan","panrol-458526", "Dante Alghieri", "5656", L.latLng(-34.51813, -58.71642));
	comercios[2] = new Comercio("Libreria McAlister","libmca-123456", "Velazquez", "5300", L.latLng(-34.51928,-58.71239));
	comercios[3] = new Comercio("Pizzeria los hdp","pizhdp-548123", "Verdi", "700", L.latLng(-34.51935,-58.70569));
	comercios[4] = new Comercio("Kiosco Chakra","kiocha-37123", "Lourdes", "1200", L.latLng(-34.52444,-58.71023));

	var marcadoresComercios = [];

	for(i = 0 ; i < comercios.length ; i++)
	{
		marcadoresComercios[i] = L.marker(comercios[i].ubicacion,{icon: purpleIcon});
		map.addLayer(marcadoresComercios[i]);
		marcadoresComercios[i].bindPopup("<b>Comercio Adherido</b><br>"+"Nombre: "+comercios[i].nombre+"<br>"+"Direccion: "+comercios[i].calle+" "+comercios[i].altura).openPopup();
	
	}
	var cluster3 = L.markerClusterGroup();
	cluster3.addLayers([

		marcadoresComercios[0],
		marcadoresComercios[1],
		marcadoresComercios[2],marcadoresComercios[3],marcadoresComercios[4]
		]);
	map.addLayer(cluster3);

	polygonZonaVerde.setStyle({fillColor: '#17bC05'});
	polygonZonaVerde.setStyle({color: '#17bC05'});

}