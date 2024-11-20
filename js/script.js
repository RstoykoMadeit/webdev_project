var positions = {
	"6 Flags": { lat: 42.377740, lng:  -87.933897},
	"Taco Bell": { lat: 42.049217, lng: -88.086170},
	"IIT Tower": {lat: 41.833811, lng:  -87.626932}
};

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
   zoom: 8,
   center: positions["6 Flags"]
  });
	
  for (var place in positions) {
    var position = positions[place];
		
    var markerIcon = {
			url: "images/mask.jpg",
		  scaledSize: new google.maps.Size(60, 60)
		};
		
    var marker = new google.maps.Marker({
	    position: position,
	    map: map,
		  title: place,
			icon: markerIcon
   });
	
	 marker.setAnimation(google.maps.Animation.BOUNCE);
	
	  var infoWindow = new google.maps.InfoWindow({
		  content: "<h3${place}</h3><p>Coordinates: ${position.lat}, ${position.lng}</p>"
	 });
	
	  marker.addListener('click', function() {
		  infoWindow.open(map, this);
	  });
  }
}