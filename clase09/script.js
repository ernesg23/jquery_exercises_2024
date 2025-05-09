vec = {
    "id": 749,
    "name": "Coat Rack Head",
    "status": "unknown",
    "species": "Mythological Creature",
    "type": "Demon",
    "gender": "Male",
    "origin": {
        "name": "Hell",
        "url": "https://rickandmortyapi.com/api/location/116"
    },
    "location": {
        "name": "Hell",
        "url": "https://rickandmortyapi.com/api/location/116"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/749.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/46"
    ],
    "url": "https://rickandmortyapi.com/api/character/749",
    "created": "2021-10-17T13:57:49.619Z"
};

$(document).ready(function(){
    let celd;
    celd = document.getElementById("image").src=(vec["image"]);

    celd = document.getElementById("header");
    celd.innerHTML = vec["name"];
    celd.href=(vec["url"]);
    /* $.('.header').click(function(){
        console.log("Hola");
    })
    $.ajax(function(){
        url= "https://rickandmortyapi.com/api/character/749";
    })
}) */
/* function init(url) {
    let a = document.getElementById("header");
    a.setAttribute("href", url);
    a.innerHTML = vec["name"];
    a.appendChild(a);
    document.body.appendChild(a);
}
 
window.onload = init(vec["url"]); */