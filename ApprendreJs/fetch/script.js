window.addEventListener('DOMContentLoaded', async ()=>{
    // let data = await fetch(`${APiBaseName}movie/550?api_key=${APiKey}`)
    // let data = await fetch(`${APiBaseName}movie/550?api_key=${APiKey}`)
    //  let data = await fetch(`${ApiBaseName}movie/now_playing?api_key=${APiKey}`)

   //let data = await fetch(`${ApiBaseName}movie/502356?api_key=${APiKey}&language=en-US`)
        let APiBaseName = `https://api.themoviedb.org/3/`
        let APiKey = "6b6342d98c3af7838cc4b3f723a531bc"
        let imgKey = 'https://image.tmdb.org/t/p/w500'
        let data, dat 

        let container = document.querySelector('.container')
        let pageNumber = document.querySelector('.pagination-numbers')
        let pageContainer = document.querySelector('.pagination-container')
        let prev = document.querySelector('.prev')
        let next = document.querySelector('.next')
        let donnes = [];
        let page = 1;
        let LimitMovies = 20
        let limit  = Math.ceil()
        console.log(limit);

        let previous ;

        count = 0;

        console.log(pageContainer.children[2])
        //     pageContainer.children[2].addEventListener('click' , function(e){
        //         count++;
        //         request(count)

        //         console.log( pageContainer.children[2].title)

        //     })
        // pageContainer.children[0].addEventListener('click' , function(e){
        //         count--;
        //         request(count)
        // })

    //     function actionPrec(e){
            
           

    //         let suiv, avant;
            
            
            
    //         if (prev.id === -1 && next.id === 0){
    //             suiv = 1;
    //             avant = 0
    //         }else{
    //             page--
    //             suiv =  parseInt(next.id) + page
    //             avant = parseInt(prev.id) + page
    //         }

            
    //         console.log(prev.id,next.id,avant,suiv)
        
    // }
    
    // function actionSuv(e){
    //         page++

    //         suiv =  parseInt(next.id) + page;
    //         avant = parseInt(prev.id) + page;
            
    //         console.log(avant,suiv)

    //         request(suiv)
    // }
        prev.addEventListener('click', function (e) {
            count--;

            previous = count
            if (count == 0){

                previous = 0

            }
            request(count)
        })

        next.addEventListener('click', function (e){
          
            count++;

            previous = count
            if (count == 10){
                previous = 20
            }

           request(count)

        })
         



        async function request(page){

            // for (let ind = 1; ind <=5; ind++) {
                data = await fetch(`${APiBaseName}discover/movie?api_key=${APiKey}&page=${page}`)
                dat = await data.json()
                console.log(dat)
                donnes.push(dat.results)
            // }
            console.log('test', donnes);
            for (let i = 0; i <donnes.length; i++){
                console.log('donnes',donnes[i])
                     let div = document.createElement('div')
                     div.classList.add('cadre')
                     div.innerHTML = `
                                         <div>
                                         <div class="backgroungImg">
                                            <img src="${imgKey+donnes[i].backdrop_path}" width="100%" height="100%" alt="" >
                                         </div>
                                         <div class="percent">
                                         </div>
                                         <div class="title">
                                         <p class="">${donnes[i].title}</p>
                                         <span class="">${donnes[i].release_date}</span>
                                         </div>
                                         </div>
                                     `
        
                                    container.appendChild(div)
                    
                 }
            }
}) 



#A4BC92
#DDFFBB


// #0B2447
// #009FBD