const mymap = L.map('map').setView([26.796746161849036, 82.20019766008075], 15);

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Pravinkumar Singh';

const tileLayer = L.tileLayer(tileURL, {attribution});

tileLayer.addTo(mymap);