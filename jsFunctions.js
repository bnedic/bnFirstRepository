window.onload = init;
var map = null;
function init() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getLocation);
	}
	else {
		console.log("Sorry, no Geolocation support!");
	}
} 

function getLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	alert("My position is: " + latitude + ", " + longitude);
	if (!map) {showMap(latitude, longitude);}
	
	addMarker(latitude, longitude);
}

function addMarker(lat, long) {
var googleLatLong = new google.maps.LatLng(lat, long);
var markerOptions = {
position: googleLatLong,
map: map,
title: "Where I'm thinking today"
}
var marker = new google.maps.Marker(markerOptions);
}

function showMap(lat, long) {
	var googleLatLong = new google.maps.LatLng(lat, long);
	var mapOptions = {zoom: 12,center: googleLatLong,mapTypeId: google.maps.MapTypeId.ROADMAP};
	var mapDiv = document.getElementById("map");
	map = new google.maps.Map(mapDiv, mapOptions);
	map.panTo(googleLatLong);
}