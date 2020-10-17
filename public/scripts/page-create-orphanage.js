//map
const map = L.map('mapid').setView([-21.1298000,-46.6259652], 10)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})

//create and add marker
let marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    

    //remove icon layer
    marker && map.removeLayer(marker);

    //add icon tileLayer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})

//fotos upload
function addPhotoField(){
    //get container
    const container = document.querySelector('#images')
    //get new-upload
    const fildsContainer = document.querySelectorAll('.new-upload')
    //clone last image
    const newFildContainer = fildsContainer[fildsContainer.length - 1].cloneNode(true) 

    const input = newFildContainer.children[0]

    //if empty field
    if(input.value == "" ){
        return
    }
    //clean text
    input.value = ""
    //add clone in image container
    container.appendChild(newFildContainer)
}

function deletePhotoField(event){
    spam = event.currentTarget

    const fildsContainer = document.querySelectorAll('.new-upload')

    if(fildsContainer.length < 2 ){
        //clean
        spam.parentNode.children[0].value = ''
        return
    }

    //delete
    spam.parentNode.remove()
}

//select open-on-weekends
function toggleSelect(event){
    //select button yes and not
    const buttons = document.querySelectorAll(".button-select button")
    //remove in buttons active class 
    buttons.forEach(function(button)
     {button.classList.remove("active")}
    )
    //add in button select active class
    const button = event.currentTarget
    button.classList.add("active")

    const input = document.querySelector('[name=open-on-weekends]')

    input.value = button.dataset.value
}

function validate(event){
    const lat = document.querySelector('[name=lat')
    const lng = document.querySelector('[name=lng')

    if(lat.value == '' && lng.value == ''){
        event.preventDefault()
        alert('Selecione a localização')
    }
    
}