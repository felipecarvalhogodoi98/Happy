//map
const map = L.map('mapid').setView([-21.1298000,-46.6259652], 10)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lng, lat}) {
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>`)
    
    //create and add marker
    L.marker([lat,lng], {icon} )
    .addTo(map) 
    .bindPopup(popup)
}

const orphanagesSpam = document.querySelectorAll('.orphanages spam')

orphanagesSpam.forEach( span =>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lng: span.dataset.lng,
        lat: span.dataset.lat
    }
    addMarker(orphanage)
})
