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