// Function qui retourne une autre fonction(callback)

// function usingCallac(params) {
//   params();
// }

// usingCallac(function () {
//   console.log("bonjour fonction callback");
// });

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

// function count_number(nombre){
//   return nombre.length

// }

// console.log(count_number(1234))

/*
  définissez un objet qui posséde les propriétés suivantes:
- "login"  dont la valeur est une chaîne de caractère
- "username"  dont la valeur est une chaine de caractère
- "matricule" dont la valeur est une chaine de caractère
- "access"  dont la valeur est un object possédant les clefs : "challenge,battle,livecoding", les valeurs des cléfs sont des booléens
- "results" dont la valeur est un tableau contenant des objects (la structure est {name:String,links:Array[String],points:Number})
- "points" dont la  valeur est un entier
----
la propriété "access" ne doit pas être itérable
la propriété "points" et "matricule"  ne peuvent être modifiés
*/

// let Obj = {
//   login: "diaramadou",
//   username: "diarassouba",
//   matricule: "130456161Q",
//   access: {
//     challenge: true,
//     battle: true,
//     livecoding: false,
//   },
//   results: [
//     { name: "Diara", links: ["two", "trois"], points: 10 },
//     { name: "couda", links: ["free", "quatre"], points: 11 },
//   ],
//   points: 50,
// };

// Object.defineProperties(Obj, {
//   access: { enumerable: false },
//   points: { writable: false },
//   matricule: { writable: false },
// });

/*
  crée un objet qui posséde les propriétés suivantes "a,b,c,discriminant,result",
les propriétés a,b et c sont des entiers.
la propriété "discriminant", est une fonction qui calcule le discrimant d'une équation du second dégré, dont les inconnues sont les propriétés a, b et c de l'objet
la propriété "result" est une fonction qui retourne le résultat de l'équation du second dégré dont les inconnues sont les propriétés a, b et c de l'objet.
*/

// let SecondObject = {
//   a: 9,
//   b: 1,
//   c: 8,
//   fucn() {
//     console.log(this.a);
//   },
//   discriminant() {
//     return this.b ** 2 - 4 * this.a * this.c;
//   },
//   result() {
//     let discri = this.discriminant();
//     let X1 = ((-this.b - Math.sqrt(discri)) / 2) * this.a;
//     let X2 = ((-this.b + Math.sqrt(discri)) / 2) * this.a;
//     let X = -this.b / (2 * this.a);
//     if (discri === 0) {
//       return X;
//     } else if (discri < 0) {
//       return "Pas solution";
//     } else {
//       return { X1, X2 };
//     }
//   },
// };

// console.log(SecondObject.result());

/*
    Exercice 3:
crée un objet nommé  "math"  qui va regrouper tous les fonctions mathématique suivantes: "pow,sqrt,max,min,abs"
NB: checker le fonctionnement des différents fonctions présente sur l'objet "Math" native en javascript et reproduisez leur fonctionnement
 */

// let mathema = {
//   Maxi(a) {
//     if (typeof a !== "number") {
//       return -1;
//     } else {
//       let max = arguments[0];
//       for (let index = 0; index < arguments.length; index++) {
//         if (max < arguments[index]) {
//           max = arguments[index];
//         }
//       }
//       return max;
//     }
//   },
//   Mini(a) {
//     if (typeof a !== "number") {
//       return -1;
//     } else {
//       let min = arguments[0];
//       for (let index = 0; index < arguments.length; index++) {
//         if (min > arguments[index]) {
//           min = arguments[index];
//         }
//       }
//       return min;
//     }
//   },
//   Abs(a) {
//     if(typeof a !== 'number'){
//       return -1
//     }else{
//           if (a < 0) {
//               return -a
//           } else {
//               return a
//           }
//     }
//   },
// };

// console.log(mathema.Maxi("a", "z", 32, 234));
// console.log(mathema.Mini(13, 35, 32, 234));

// console.log(mathema.Abs(['a']))

// const form = document.querySelector(".form");
// const textErrorNom = document.querySelector(".nom");
// const textErrorPrenom = document.querySelector(".Prenom");
// let nom = document.getElementById(`nom`);
// let Prenom = document.getElementById("prenom");
// let description = document.getElementById("description");
// let descri = document.querySelector(".descri");
// let btn = document.querySelector(".btn button");
// console.log(btn);
// let Obj = {
//   Name: false,
//   LastName: false,
//   Description: false,
// };

// nom.addEventListener("input", (e) => {
//   nomTaille = e.target.value.length;
//   if (e.target.value.includes(" ") || nomTaille >= 15) {
//     Obj.Name = false;
//     console.log("ok");
//     nom.style.outline = "2px solid red";
//     textErrorNom.innerHTML ="Desole vous avez atteint le nombre maxi de caratère";
//   } else{
    
//     Obj.Name = true;
//     nom.style.outline = "none";
//     textErrorNom.innerHTML = "";
//   }
//   checkValue()
// });

// Prenom.addEventListener("input", (e) => {
//   prenomTaille = e.target.value.trim().split(" ");
//   if (prenomTaille.length >= 3) {
//     Obj.LastName = false;
//     console.log("ok");
//     Prenom.style.outline = "2px solid red";
//     textErrorPrenom.innerHTML =
//       "Desole vous avez atteint le nombre maxi de caratère";
//   } else {
//     Obj.LastName = true;
//     Prenom.style.outline = "none";
//     textErrorPrenom.innerHTML = "";
//   }
//   checkValue()
// });

// description.addEventListener("input", (e) => {
//   descripTaille = e.target.value.trim().length;
//   if (descripTaille > 10) {
//     Obj.Description = false;
//     e.target.value = e.target.value.slice(0, 10);
//     description.style.outline = "2px solid red";
//     descri.innerHTML = "Desole vous avez atteint le nombre maxi de caratère";
//   } else {
//     Obj.Description = true;
//     description.style.outline = "none";
//     descri.innerHTML = "";
//   }
//   checkValue()
// });

//  function checkerValue(obj){
//     console.log(obj.DescripTest)

//     if (obj.nomTest == true && obj.PrnomTest == true && obj.DescripTest == true){
//       console.log(btn)
//       btn.style.display ="block"
//     }else{
//       btn.style.display ="none"
//     }
// }

// function checkValue() {
//   let dash = Object.values(Obj);

//   btn.style.display = dash.every((lem) => lem) ? "block" : "none"

  // if (dash.every((lem) => lem)){
  //       btn.style.display ="block"
  //     }else{
  //       btn.style.display ="none"
  //     }
//   console.log(dash);
// }

// btn.addEventListener('click', (e)=>{
//   console.log(e)
// })

// function facto(num){

//        if(num === 0 || num === 1){
//         return 1
//        }else{

//          return facto(num - 1)* num

//        }

// }

// console.log(facto(1));

// let tab = ['mangue','action']

// for (const key of tab) {
//     console.log(tab.indexOf(key))
// }


// [[10,12], [15,4],[20,16]]


// function statistic(tab){
//  let effCumule = tab.reduce((acc, x)=> acc + x[1], 0)
//  let maxeff = Math.max(...tab.map((a) => a[1]))

//   let indexMax = tab.indexOf((a)=> a == maxeff)

//  console.log(maxeff, indexMax); 



// }

// statistic([[10,12], [15,4],[20,16]])


// function matrix(tab){
//   let str = [];
//   let taile = tab[0].length
//   let dom = tab.flat().sort((a,b)=> a-b)

//     while(dom.length > 0){
//       let ash = dom.splice(0,taile)
//         str.push(ash)
        
//     }
//     return str
// }

// console.log(matrix([[-1,2,3],[5,-2,4]]))

// function findLast(tab) {

//     for (let i = 0; i < tab.length; i++) {
//       console.log(tab[i+1]);
//       if(tab[i] > tab[i+1]){
//           return tab[i]
//         }
//       }
   
// }

// console.log(findLast([1,3,4,1]))



// function stat(tableau){

  
//   let effcumule = tableau.reduce((even,a)=> even + a[1], 0)
//   let maxeff = Math.max(...tableau.map((e)=> e[1]))
//   let indexmaxeff = tableau.findIndex((e)=> e[1] == maxeff)
//   let modal = tableau[indexmaxeff]

//   let moyenne = (effcumule/tableau.length)

//   let tabfrequence = tableau.map((lem)=> parseFloat(((lem[1]*100)/effcumule).toFixed(2)))

//   let percent = tabfrequence.reduce((even,a)=> even + a, 0)

//   let effecifCumulé = [tableau[0][1]];
//   console.log(effecifCumulé);

//     for (let i = 0; i <= tableau.length; i++) {
//       console.log(tableau[i]);
//       // effecifCumulé.push(tableau[i][1] + tableau[i+1][1]);
//     }
  
//   // console.log(effecifCumulé);
//   // return `la serie statistique de données ${tableau} a pour classe modale ${modal} , pour frequence ne pourcentage le tableau ${tabfrequence}, la moyenne ${moyenne}`

//   // console.log(percent);
//   // console.log(tabfrequence)



//   // console.log(moyenne)
  
//   // console.log(indexmaxeff)

//   //  console.log(maxeff)

//   // console.log(effcumule);

//   // console.log(modal)



// }

// stat([[10,12], [15, 4], [20, 2],[70, 5]]);


// function somPremier(nbr){
//       if (nbr < 2) return 0

//       let array = new Array(nbr-1).fill('a')
//       let isPremier = !array.find((val, index)=> index > 1 && nbr%index == 0)
//       console.log(nbr, isPremier);
//       return (isPremier ? nbr : 0) +somPremier(nbr-1)  
// }

// console.log(somPremier(7))



// function arrIndex(arr, idx){
//   if (!Array.isArray(arr) || !Array.isArray(idx)) return -1
    
//   let flatTAb = arr.flat ()
//   let str = idx.map((a)=>{
//       return flatTAb[a-1]
//   })
//   console.log(str.join(''))

// }

// console.log(arrIndex([
//   ["m", "u", "b"],
//   ["a", "s", "h"],
//   ["i", "r", "1"]
// ],
// [1, 3, 5, 8]))



// function rangeOfNumbers(startNum, EndNumb){
//   if (startNum == EndNumb) return [EndNumb]    
//   let tab = [startNum]
//   console.log(typeof(tab));
//   console.log(startNum);
//   tab.push(rangeOfNumbers(startNum +1 , EndNumb))
//   return  tab.flat()
// }

// console.log(rangeOfNumbers(1,5))
// console.log(rangeOfNumbers(6,9))



// // Sosie de la fonction Array.Maps

let checkString = class {
    constructor(str){
         this.str = str
    }
    Update(cb){
      let arr = [];  
      for (let i = 0; i < this.str.length; i++){
        let newValues = cb(this.str[i], i)
        console.log(newValues)
        arr.push(newValues)
      }
      return arr
    }
}


let Obj = new checkString([1,2,3,4,5,6,7,8,9,10])
let nexTable = Obj.Update((a, i)=> 2*a)

console.log(nexTable);



function findAverage(array){
  // your code here
  console.log(array)
  if (array.length === 0) return 0
  return array.reduce((a,x)=> a+ x,0) / array.length
}


console.log(findAverage([]))








