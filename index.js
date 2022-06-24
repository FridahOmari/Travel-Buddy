window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
    getParks()
    addEventListeners()
  })
  // Fetch
  let parks
  function getParks() {
    const url = 'https://developer.nps.gov/api/v1/parks?api_key=wSlcKl1LSOpHXf164FTShbQZC4cmu1VWTJiipnFk&limit=10'
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        parks = data
        renderParks()
      })
  }
  // Render Parks Function
  var LIKES = 0
  function renderParks() {
    console.log("hello")
    const parkDiv = document.getElementById('parks')
    parkDiv.innerHTML = ' '
    let filteredParks = parks.data
    console.log(filteredParks)
    for (let i = 0; i < filteredParks.length; i++) {
      const ul = document.createElement('ul')
      const img = document.createElement('img')
      const descrip = document.createElement('p')
      const directions = document.createElement('a')
      const liker = document.createElement('button')
      liker.textContent = LIKES
      directions.innerText = 'Get Directions'
      directions.href = filteredParks[i].directionsUrl
      directions.target = '_blank'
      img.src = filteredParks[i].images[0].url
      ul.innerText = filteredParks[i].fullName
      descrip.innerText = filteredParks[i].description
      parkDiv.append(img, ul, descrip, directions, liker)
      liker.addEventListener('click', likePark)
    }
  }
  const likePark = (e) => {
    const liker = e.target
    LIKES++
    console.log(LIKES)
    liker.textContent = LIKES
  }