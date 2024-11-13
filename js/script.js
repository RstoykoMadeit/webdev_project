function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 0, lng: 0},
  });
}

const marker = new AdvancedMarkerElement({
  map,
  position: { lat: 0, lng: 0},
});