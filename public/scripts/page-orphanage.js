const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

//get spam lat lng
const spam = document.querySelector("spam[data-lat]")

//map
const map = L.map('mapid', options).setView([spam.dataset.lat,spam.dataset.lng], 14)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup overlay

//create and add marker
L.marker([spam.dataset.lat,spam.dataset.lng], {icon} )
.addTo(map) 


//image gallery

function selectImage(event){
    const button = event.currentTarget;

    //remove .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //select image
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //att container of image
    imageContainer.src = image.src
    //add .active in this
    button.classList.add("active")
}