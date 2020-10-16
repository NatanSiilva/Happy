const options = {
    draggings: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

//Create map

const map = L.map('mapid', options).setView([-29.9445521,-51.1010502], 10)


//create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//Create and add marker

L
.marker([-29.9445521,-51.1010502], { icon })
.addTo(map)




function selectImage(event){

    const button = event.currentTarget
   

    //remove todas as classes .active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((removeActiveClass))

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a image clicada
    const image = button.children[0]
    const imageConatiner = document.querySelector(".orphanage-details > img")
    //selecionar o contaiener de image

    imageConatiner.src = image.src

    //adcionar a classe .active para este botão

    button.classList.add("active")
}