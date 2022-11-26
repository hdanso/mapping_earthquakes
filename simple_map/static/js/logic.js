// Add console.log to check to see if our code is working
console.log("working")

// Create the map object eith a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);
    // Assigned variable to L.map() object and represent it with mapod
    // mapid will reference id tag in th div element
    // setView - sets view of map with geo center

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', { // Assigning streets variable to tileLayer()
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>', // add API url with access token and open streetmap url
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map); // add the graymap object tile layer to our let map

//NOTE: can change map styles using a different map id (see below)
// Different map styles
    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11


