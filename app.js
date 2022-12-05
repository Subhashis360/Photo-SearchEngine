let button = document.getElementById("submit")
let textbox = document.getElementById("textbox")
let photo1 = document.getElementById("a11")
let photo2 = document.getElementById("a22")
let photo3 = document.getElementById("a33")
let photo4 = document.getElementById("a44")
let photo5 = document.getElementById("a55")
let photo6 = document.getElementById("a66")
let photo7 = document.getElementById("a77")
let photo8 = document.getElementById("a88")
let nextbtn = document.getElementById("nextpage")
let search = document.getElementById("textbox")
const box = document.getElementById('buttondiv')
let pageno = document.getElementById("currentpage")

var apikeys = ["563492ad6f91700001000001091ba005943345dc85981479cf813c19","563492ad6f91700001000001a238a8c9e072459c9dbc43f9c94e77f7","563492ad6f9170000100000194445b7d8e4c48acacb6e3127f44dc70"]

const apikey = apikeys[Math.floor(Math.random()*apikeys.length)]

let page = 1;
pageno.innerHTML=page;

async function clicked() {

let searchval = search.value

let url = `https://api.pexels.com/v1/search?query=${searchval}`

fetch(url, {
    method: 'GET',
    headers: {'Authorization' : apikey }
})
.then((response) => response.json())
.then ((data) => {
    photo1.src = data.photos[0].src.large2x
    photo2.src = data.photos[1].src.large2x
    photo3.src = data.photos[2].src.large2x
    photo4.src = data.photos[3].src.large2x
    photo5.src = data.photos[4].src.large2x
    photo6.src = data.photos[5].src.large2x
    photo7.src = data.photos[6].src.large2x
    photo8.src = data.photos[7].src.large2x
    page = 1;
    pageno.innerHTML=page;
})

}


async function nextpage() {
    
    let searchval = search.value

    let url = `https://api.pexels.com/v1/search/?page=${page}&per_page=8&query=${searchval}`

fetch(url, {
    method: 'GET',
    headers: {'Authorization' : apikey }
})
.then((response) => response.json())
.then ((data) => {
    photo1.src = data.photos[0].src.large
    photo2.src = data.photos[1].src.large
    photo3.src = data.photos[2].src.large
    photo4.src = data.photos[3].src.large
    photo5.src = data.photos[4].src.large
    photo6.src = data.photos[5].src.large
    photo7.src = data.photos[6].src.large
    photo8.src = data.photos[7].src.large
    page = (page+1);
    pageno.innerHTML=page;
    console.log(page)
})

}

async function prevpage() {

    if (page <= 1) {
        alert("You are alredy in Last Page 1")
    } else {
    
    let searchval = search.value

    let url = `https://api.pexels.com/v1/search/?page=${page}&per_page=8&query=${searchval}`

fetch(url, {
    method: 'GET',
    headers: {'Authorization' : apikey }
})
.then((response) => response.json())
.then ((data) => {
    photo1.src = data.photos[0].src.large
    photo2.src = data.photos[1].src.large
    photo3.src = data.photos[2].src.large
    photo4.src = data.photos[3].src.large
    photo5.src = data.photos[4].src.large
    photo6.src = data.photos[5].src.large
    photo7.src = data.photos[6].src.large
    photo8.src = data.photos[7].src.large
    page = (page-1);
    pageno.innerHTML=page;
    console.log(page)
})

}}


