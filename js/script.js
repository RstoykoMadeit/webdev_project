var positions = {
	"6 Flags": { lat: 42.377740, lng:  -87.933897},
	"Taco Bell": { lat: 42.049217, lng: -88.086170},
	"IIT Tower": {lat: 41.833811, lng:  -87.626932}
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: positions["6 Flags"]
  });
for (var place in positions) {
  var position = positions[place]; 
  new google.maps.Marker({
	  position: position,
	  map: map,
		title: place
});
}