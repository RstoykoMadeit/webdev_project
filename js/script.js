function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 0, lng: 0},
  });
}

var marker = new google.maps.Marker({
  position: { lat: 0, lng: 0},
	map: map,
});