const mymap = L.map('map').setView([19.273107721825465, 72.87868857401367], 15);

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Pravinkumar Singh';

const tileLayer = L.tileLayer(tileURL, {attribution});

tileLayer.addTo(mymap);

const clayer = L.circle([19.273107721825465, 72.87868857401367], {radius: 200,color: 'cyan'});
clayer.addTo(mymap);


const bounds = [[54.559322, -5.757822], [56.1210604, -3.021240]];
const rectangle = L.rectangle(bounds);
rectangle.addTo(mymap);

//polygons
var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04],[41, -105.05]];
var polygon = L.polygon(latlngs, {color: 'red'}).addTo(mymap)

// latlng = [19.273107721825465, 72.87868857401367];
// marker.bindPopup(popupContent).openPopup();
// var popup = L.popup()
//     .setLatLng(latlng)
//     .setContent('<p>Hello world!<br />This is a nice popup.</p>')
//     .openOn(map);

// const icon = {
//     iconURL = 'store.jpg'
// }

// const icon = L.icon({iconURL: 'store.jpg',
//                     iconSize: [80, 60]
// });
    
const marker = L.marker([19.273107721825465, 72.87868857401367]);
marker.bindPopup("MY PopUP");
marker.bindTooltip("my tooltip text").openTooltip();
marker.addTo(mymap)

// const myMap = L.map('map').setView([22.9074872, 79.07306671], 5);
// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const attribution =
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ❤️';
// const tileLayer = L.tileLayer(tileUrl, { attribution });
// tileLayer.addTo(myMap); 