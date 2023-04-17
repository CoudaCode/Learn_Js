window.addEventListener('DOMContentLoaded',async() =>{  
  let API_KEY = `6b6342d98c3af7838cc4b3f723a531bc`
  let API_BASE = `https://api.themoviedb.org/3`
  console.log(location.href);
  const resut = location.href.split('#');
  console.log(resut)
  const nouvel = await fetch(`${API_BASE}/movie/${resut[1]}?api_key=${API_KEY}`)
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'
  data = await nouvel.json()
  console.log(data)
  container = document.querySelector('.container')

     let div = `
      <div class="img">
      <img src="${IMG_URL+data.poster_path}" alt=""  >
      </div>
      <div class="content">
      <h1>${data.original_title}</h1>
      <span class="note">${Math.ceil(data.vote_average)}</span>
      <p class="text">${data.overview}</p>
      </div>
      `
    
          container.innerHTML = div
});