// btn = document.querySelector('button');
// para = document.querySelector('p');

// // btn.addEventListener('mouseover', (e)=>{

// //   inp.value = "JE suis Nanien"
// //   para.textContent = "JE suis Nanien".split('').reverse().join('');
// // })

// // inp.addEventListener('input',(e)=>{

// //     para.textContent = e.target.value.split('').reverse().join('');

// // })
//Creation d'element html en entrant des donnés dans le input

// let tab =[1,2,3,4,5,6]

// function customForEach(demo, callback){
//   for (let i = 0; i < tab.length; i++) {
//     callback(tab[i])
//   }
// }
// customForEach(tab,(item)=>{

// console.log(item)
/* A>div>contenu>{"width":"200px", "height":"200px","backgroundColor":"red","textAlign
":"center"}*/
inp = document.querySelector("input");
content = document.querySelector(".content");

inp.addEventListener("keyup", (e) => {
  let enter = e.keyCode;
  console.log(enter)
  if (enter === 13) {
    tab = e.target.value.split(">");
    let tell = JSON.parse(tab[3])
    console.log(tab[3])
    // console.log(typeof(Style))
      switch (tab[0]){
        case "A":
                  if(content.querySelector(tab[1])) {
                      alert('Vous ne pouvez pas ajouter un' + tab[1] )
                  }else{
                      element = document.createElement(tab[1]);
                      element.textContent = tab[2]
                      for (const tem in tell){
                          console.log([tem]);
                          console.log(tell[tem]);
                          element.style[tem] = tell[tem];
                          console.log(element.style)
                          
                      }
                      content.appendChild(element)
                  }
                  
          break;
          case "U":
              if (content.querySelector(tab[1])){
                for(let tem in tell){
                    content.querySelector(tab[1]).style[tem] =tell[tem];
                }

                content.querySelector(tab[1]).textContent = tab[2]
            }
            break;

            case "D":
              if(content.querySelector(tab[1])){
                    content.remove(tab[1]);
            }else{
                  console.log('no exist')
            }
            break;
        default:
          break;
    }
  }

 
});



// page form
// localStorage.setItem('admin', JSON.stringify([{nom:"koko",prenom:"marie"}]))

// // page pour affiche
// let re = JSON.parse(localStorage.getItem('admin'));

// console.log(re["nom"])

