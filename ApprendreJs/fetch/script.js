window.addEventListener('DOMContentLoaded', async ()=>{
    let data = await fetch(`https://api.themoviedb.org/3/account?api_key=6b6342d98c3af7838cc4b3f723a531bc`)
    let results = await data.json()
        console.log(results);
}) 