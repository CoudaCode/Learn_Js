// var onput = document.querySelector('#enter')
// var div = document.querySelector('.div')
// onput.addEventListener('input',(e)=>{
//     var enter = e.target.value
//     // console.log(typeof(enter))

//     switch (enter) {
//         case "blue":
//             div.style.backgroundColor = "blue"
//             break;
//         case "rouge":
//             div.style.backgroundColor = "red"
//             break;
//         case "jaune":
//             div.style.backgroundColor = "yellow"
//             break;
//         case "gris":
//         div.style.backgroundColor = "grey"
//         break;
//         case "noir":
//             div.style.backgroundColor = "black"
//             break;
//         case "vert":
//             div.style.backgroundColor = "green"
//             break;
//         default:
//             // div.textContent ="Ce n'est pas une couleur"
//             break;
//     }
// })

// var select = document.querySelector('#select')
// var div = document.querySelector('.div')
// var input = document.querySelector('#enter')
// select.addEventListener('change', (e)=>{
//     console.log(select.value)
//     switch (select.value) {
//         case "blue":
//             div.style.backgroundColor = "blue"
//             break;
//         case "rouge":
//             div.style.backgroundColor = "red"
//             break;
//         case "jaune":
//             div.style.backgroundColor = "yellow"
//             break;
//         case "gris":
//         div.style.backgroundColor = "grey"
//         break;
//         case "noir":
//             div.style.backgroundColor = "black"
//             break;
//         case "vert":
//             div.style.backgroundColor = "green"
//             break;
//         default:
//             // div.textContent ="Ce n'est pas une couleur"
//             div.style.backgroundColor = "yellow"
//             break;
//     }
// })


// input.addEventListener('input',(e)=>{
//         var enter = e.target.value
//        console.log(typeof(enter))
    

//         if (e.target.value){
//             div.style.width = enter+'px';
//             div.style.height = enter+'px';
//         }
        
//     })


/* Range Div 


var range = document.querySelector('#range')

console.log(range)

let color = ['red', 'yellow','brown','darkred','orange']

var div = document.querySelector('.chang')

console.log(div)

var inter = null

range.addEventListener('change',(e)=>{
    console.log(e.target.value * 100)
    clearInterval(inter)
        inter = setInterval(()=>{
        demo = Math.floor(Math.random() *200 + 100)
        // console.log(demo);
        index = Math.floor(Math.random()* color.length)
        // console.log(index)
        // console.log(color[index])
    
        div.style.width = demo + 'px'
        div.style.height = demo + 'px'
        div.style.backgroundColor = color[index]
    },e.target.value * 100)
})


*/




// var demo = setInterval(function(){
//     count +=50
    // console.log(count)
    // console.log('test')
    // switch (count) {
    //     case 150:
    //         div.style.width =`${count}px`
    //         div.style.backgroundColor =`orange`
    //         break;
    //     case 200:
    //         div.style.width =`${count}px`
    //         div.style.backgroundColor =`green`
    //         break;
    //     case 250:
    //         div.style.width =`${count}px`
    //         div.style.backgroundColor =`brown`
    //         break;
    //     case 300:
    //         div.style.width =`${count}px`
    //         div.style.backgroundColor =`red`
    //         break;
    //     default:
    //         
    //         break;
    // }
    // if(count == 100){
    //     div.style.width =`${count}px`
    //     div.style.backgroundColor =`blue`
    // }
    // else if(count == 150) {
    //     div.style.width =`${count}px`
    //     div.style.backgroundColor =`orange`
    // } else if ( count == 200) {
    //     div.style.width =`${count}px`
    //     div.style.backgroundColor =`green`
    // }else if(count == 250){
    //     div.style.width =`${count}px`
    //     div.style.backgroundColor =`brown` 
    // }else if(count == 300){
    //     div.style.width =`${count}px`
    //     div.style.backgroundColor =`red`
    // }else{
    //     clearInterval(demo)
    // }

    


// },500)








// CASINO
// let time = 200;
// var casino = document.querySelector('.casino');
// let count = 0;
// let timout = 2000
// let tab = [1,2,3,4,5,6]
// var inter = null;
// var Compt = 1
// let timeCount = 80;

// let inter2 = null



// decompte(timeCount)


//  while(timeCount < 200){
//     clearTimeout = inter2
// //    inter2 = setTimeout(()=>{
// //         // decompte(timeCount)
// //         timeCount += 20
// //      },Compt*3000)
    
// //      console.log(timeCount);
// //      Compt++
// }

 //////// utilisation de fonction recursive



// function decompte(time){

//     // clearInterval(inter)
//     inter = setInterval(()=>{
//         casino.textContent = tab[count]
//         count++
//         if(count == 6){
//             count = 0
//         }
        

//     }, time)

//     decompte(time+110)
// }

// decompte(timeCount)





// diara
// Fonction recursive

let number = document.querySelector('#number')
let text = document.querySelector('#text')
console.log(text)
let result;

function fact(nbr) 
{
  if (nbr === 0)
  {
     return 1;
  }
  return nbr * fact(nbr-1);
}


number.addEventListener('input',(e)=>{
    let number = e.target.value;
    console.log(e.target.value)
    text.textContent = "text"
})
console.log(number)