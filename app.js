const mymap = L.map('map').setView([26.796976001970535, 82.19480171008078], 15);

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Pravinkumar Singh';

const tileLayer = L.tileLayer(tileURL, {attribution});

tileLayer.addTo(mymap);

const marker = L.marker([26.79643970762935, 82.1943725566498]);
marker.bindPopup("<div>
                 <img src="raam-mandir.jpg">
                 <h2>Shree Raam Janmabhoomi Mandir</h2>
                 </div>");

marker.addTo(mymap)
