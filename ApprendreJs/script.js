// Function qui retourne une autre fonction(callback)


function usingCallac(params) {
        params()
}

usingCallac(function() {
  console.log('bonjour fonction callback');
})


// Fonction MAP effectue une action sur chaque element et retourne un nouveau tableau avec a chaque fois l'action qui aura ete effectuer



// let tab =[1,2,3,4];

// let numTab = tab.map(el =>{
//   return el + 2
// })

// console.log(numTab);


// Retourne un tableau d'element respectant les conditions passé en parametre de la fonction callBack

// let tabfilter =[1,2,3,4];

// let numFilter = tabfilter.filter(function(el){
//   return el > 2
// })

// console.log(numFilter);


// recuce Methode permet de reduire les elemznt d1 tableau en accumulant les valeur


// let reduced =[1,2,3,4];

// let NumReduce = reduced.reduce(function(a,b){
//   return a+b
// })
// a = accumulateur qui par defaut est à 0
// b = la valeur courante commencant par le premier element du tableau



// console.log(NumReduce);


// Supprimer un element dans un objet 

// const obj = {
//   race : 'aligator',
//   poids :'ligne',
//   diara:10}

// const obj2 = obj

// obj2.race = "chien"

// console.log(obj, obj2)


// function integerOnly(tab){

//   const listes = []
//     if(!Array.isArray(tab) ){
//         return -1
//     }else{
//       for (let i = 0; i < tab.length; i++) {
//             listes.push(tab[i])
        
//       }
//       return listes
//     }    
 
// }

// console.log( integerOnly([1,2,3,4]))

// console.log( integerOnly(1))

function count_number(nombre){
  return nombre.length
 
}

console.log(count_number(1234))