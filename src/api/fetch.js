
const URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`

export function getFetch() {
     return fetch(`${URL}`)
     .then((res) => res.json())
   }
