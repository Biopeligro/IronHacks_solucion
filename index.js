const FUTUROS_APARTAMENTOS = "https://data.cityofnewyork.us/resource/hg8x-zxpr.json"
const OFICINAS_DCP = "https://data.cityofnewyork.us/resource/w449-f4d7.json"
const VACUNAS_GRIPE = "https://data.cityofnewyork.us/resource/w9ei-idxz.json"
const FERIAS_AGRICOLAS = "https://data.ny.gov/resource/wcwd-s5vt.json"
const CAJEROS_ESTADO = "https://data.ny.gov/resource/ndex-ad5r.json"
const INDICENTES_COLEGIOS = "https://data.cityofnewyork.us/resource/qybk-bjjc.json"

var data;
var map;

var informacion_apartamentos = [];
var informacion_oficinasDCP = [];
var informacion_vacunas = [];
var informacion_ferias = [];
var informacion_cajeros = [];
var informacion_incidentes = [];

var apartamentos;
var oficinasDCP;
var vacunasGripe;
var feriasAgricolas;
var cajerosEstado;
var incidentesColegios;
	
// ============================================================================
// INFORMACION DE APARTEMENTOS EN CONSTRUCCION
function cargar_Apartamentos(){
	$.getJSON(FUTUROS_APARTAMENTOS, function(data, tStatus){
		$.each(data, function(i, result){
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(parseFloat(result.latitude), parseFloat(result.longitude)),
				map: null,
				icon : 'https://cdn2.iconfinder.com/data/icons/bitsies/128/City-24.png'
			});
			informacion_apartamentos.push(marker);
		});
	});
};

function setApartamentos(type){
	for (var i = 0; i < informacion_apartamentos.length; i++){
			informacion_apartamentos[i].setMap(type);
	}
}
// ============================================================================


// ============================================================================
// INORMACION SOBRE LAS OFICINAS DCP EN NY

// ============================================================================



// ============================================================================
// INFORMACION SOBRE PUESTOS DE VACUNACION CONTRA LA GRIPE
function cargar_Vacunas(){
    $.getJSON(VACUNAS_GRIPE, function(data, tStatus){
    		$.each(data, function(i, result){
    			var marker = new google.maps.Marker({
    				position: new google.maps.LatLng(parseFloat(result.latitude),parseFloat(result.longitude)),
    				map: null,
    				icon : 'https://cdn1.iconfinder.com/data/icons/locations-redesign/48/Doctors1-32.png'
    			});
    			informacion_vacunas.push(marker);
    		});
    	});
}

function setVacunas_gripe(type){
	for (var i = 0; i < informacion_vacunas.length; i++){
			informacion_vacunas[i].setMap(type);
	}
}
// ============================================================================


// ============================================================================
// INFORMACION SOBRE LAS FERIAS AGRICOLAS EN NY
function cargar_FeriasAgricolass(){
    $.getJSON(FERIAS_AGRICOLAS, function(data, tStatus){
    		$.each(data, function(i, result){
    			var marker = new google.maps.Marker({
    				position: new google.maps.LatLng(parseFloat(result.location_1.latitude),parseFloat(result.location_1.longitude)),
    				map: null,
    				icon : 'https://cdn2.iconfinder.com/data/icons/free-mobile-icon-kit/26/Agriculture.png'
    			});
    			informacion_ferias.push(marker);
    		});
    	});
}

function setFeriasAgricolas(type){
	for (var i = 0; i < informacion_ferias.length; i++){
			informacion_ferias[i].setMap(type);
	}
}
// ============================================================================


// ============================================================================
// INFORMACION SOBRE LA UBICACION DE CAJEROS DEL ESTADO
function cargar_Cajeros(){
    $.getJSON(CAJEROS_ESTADO, function(data, tStatus){
    		$.each(data, function(i, result){
    			var marker = new google.maps.Marker({
    				position: new google.maps.LatLng(parseFloat(result.location_1.latitude),parseFloat(result.location_1.longitude)),
    				map: null,
    				icon : 'https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/29-Banking-Atm-24.png'
    			});
    			informacion_cajeros.push(marker);
    		});
    	});
}

function setCajeros(type){
	for (var i = 0; i < informacion_cajeros.length; i++){
			informacion_cajeros[i].setMap(type);
	}
}
// ============================================================================


// ============================================================================
// INFORMACION DE INDICENTES EN ESCUELAS
function cargar_incidentesCol(){
	$.getJSON(INDICENTES_COLEGIOS, function(data, tStatus){
		$.each(data, function(i, result){
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(parseFloat(result.latitude), parseFloat(result.longitude)),
				map: null,
				icon : 'https://cdn1.iconfinder.com/data/icons/project-management-8/500/caution-24.png'
			});
			informacion_incidentes.push(marker);
		});
	});
};

function setIncidentesCol(type){
	for (var i = 0; i < informacion_incidentes.length; i++){
			informacion_incidentes[i].setMap(type);
	}
}
// ============================================================================



// ============================================================================
// FUNCIONES PARA MOSRTAR LOS DATOS AL HACER CLIC SOBRE LOS BOTONES

$(document).ready(function() {
	
	// ============================================================================
	$("#apartamentos").on('click', function(){
		setApartamentos(map);
		
	});
	
	$("#borrar_apartamentos").on('click', function(){
	    setApartamentos(null);
	});
	// ============================================================================


	// ============================================================================
	$("#oficinas").on('click', function(){
		setOficinas(map);
		
	});
	
	$("#borrar_oficinas").on('click', function(){
	    setOficinas(null);
	});
	// ============================================================================


	// ============================================================================
	$("#vacunas").on('click', function(){
		setVacunas_gripe(map);
		
	});
	
	$("#borrar_vacunas").on('click', function(){
	    setVacunas_gripe(null)
	});
	// ============================================================================


	// ============================================================================
	$("#ferias").on('click', function(){
		setFeriasAgricolas(map);
		
	});
	
	$("#borrar_ferias").on('click', function(){
	    setFeriasAgricolas(null)
	});
	// ============================================================================


	// ============================================================================
	$("#cajeros").on('click', function(){
		setCajeros(map);
		
	});
	
	$("#borrar_cajeros").on('click', function(){
	    setCajeros(null)
	});
	// ============================================================================


	// ============================================================================
	$("#cajeros").on('click', function(){
		setCajeros(map);
		
	});
	
	$("#borrar_cajeros").on('click', function(){
	    setCajeros(null)
	});
	// ============================================================================


	// ============================================================================
	$("#incidentes").on('click', function(){
		setIncidentesCol(map);
		
	});
	
	$("#borrar_incidentes").on('click', function(){
	    setIncidentesCol(null)
	});
	// ============================================================================

});

// ============================================================================





function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7291, lng: -73.9965},
        zoom: 17
    });
}

cargar_Apartamentos();
cargar_Vacunas();
cargar_FeriasAgricolass();
cargar_Cajeros();
cargar_incidentesCol();
