// Function qui retourne une autre fonction(callback)

function usingCallac(params) {
  params();
}

usingCallac(function () {
  console.log("bonjour fonction callback");
});

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

let Obj = {
  login: "diaramadou",
  username: "diarassouba",
  matricule: "130456161Q",
  access: {
    challenge: true,
    battle: true,
    livecoding: false,
  },
  results: [
    { name: "Diara", links: ["two", "trois"], points: 10 },
    { name: "couda", links: ["free", "quatre"], points: 11 },
  ],
  points: 50,
};

Object.defineProperties(Obj, {
  access: { enumerable: false },
  points: { writable: false },
  matricule: { writable: false },
});

/*
  crée un objet qui posséde les propriétés suivantes "a,b,c,discriminant,result",
les propriétés a,b et c sont des entiers.
la propriété "discriminant", est une fonction qui calcule le discrimant d'une équation du second dégré, dont les inconnues sont les propriétés a, b et c de l'objet
la propriété "result" est une fonction qui retourne le résultat de l'équation du second dégré dont les inconnues sont les propriétés a, b et c de l'objet.
*/

let SecondObject = {
  a: 9,
  b: 1,
  c: 8,
  fucn() {
    console.log(this.a);
  },
  discriminant() {
    return this.b ** 2 - 4 * this.a * this.c;
  },
  result() {
    let discri = this.discriminant();
    let X1 = ((-this.b - Math.sqrt(discri)) / 2) * this.a;
    let X2 = ((-this.b + Math.sqrt(discri)) / 2) * this.a;
    let X = -this.b / (2 * this.a);
    if (discri === 0) {
      return X;
    } else if (discri < 0) {
      return "Pas solution";
    } else {
      return { X1, X2 };
    }
  },
};

console.log(SecondObject.result());

/*
    Exercice 3:
crée un objet nommé  "math"  qui va regrouper tous les fonctions mathématique suivantes: "pow,sqrt,max,min,abs"
NB: checker le fonctionnement des différents fonctions présente sur l'objet "Math" native en javascript et reproduisez leur fonctionnement
 */

let mathema = {
  Maxi(a) {
    if (typeof a !== "number") {
      return -1;
    } else {
      let max = arguments[0];
      for (let index = 0; index < arguments.length; index++) {
        if (max < arguments[index]) {
          max = arguments[index];
        }
      }
      return max;
    }
  },
  Mini(a) {
    if (typeof a !== "number") {
      return -1;
    } else {
      let min = arguments[0];
      for (let index = 0; index < arguments.length; index++) {
        if (min > arguments[index]) {
          min = arguments[index];
        }
      }
      return min;
    }
  },
  Abs(a) {
    if(typeof a !== 'number'){
      return -1
    }else{
          if (a < 0) {
              return -a
          } else {
              return a
          }
    }
  },
};

console.log(mathema.Maxi("a", "z", 32, 234));
console.log(mathema.Mini(13, 35, 32, 234));

console.log(mathema.Abs(['a']))
