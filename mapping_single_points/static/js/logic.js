// Create the map object
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a marker to the map for LA, California
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Change the marker on the map to a circle/dot
L.circle([34.0522, -118.2437], {
    radius: 100
}).addTo(map);
