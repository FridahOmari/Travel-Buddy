window.addEventListener('DOMContentLoaded', () => {
    getParks()
    setTimeout(() => {
        renderParks()
    }, 
    1000);
})


// Fetch
let parks = []

function getParks() {
    const url = 'https://developer.nps.gov/api/v1/parks?api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk&limit=10'
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(p => {
            parks.push(p.data)
            console.log(parks)

        })
     

}



// Render Parks Function
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function renderParks() {
    const parkDiv = document.getElementById('parks')
    parkDiv.innerHTML = ' '

    for (let i = 0; i < parks.length; i++) {

        const ul = document.createElement('ul')
        const img = document.createElement('img')
        const descrip = document.createElement('p')
        const directions = document.createElement('a')
        const liker = document.createElement('button')
        liker.textContent = EMPTY_HEART
        directions.innerText = 'Get Directions'
        directions.href = parks[i].directionsUrl
        directions.target = '_blank'
        ul.innerText = parks[i].fullName
        descrip.innerText = parks[i].description
        parkDiv.append(ul, descrip, directions, liker)
        liker.addEventListener('click', likePark)
    }
}


const likePark = (e) => {
    const liker = e.target
    const like = liker.textContent
    if (like === EMPTY_HEART) {
        liker.textContent = FULL_HEART
    } else {
        liker.textContent = EMPTY_HEART
    }
}

