// function multiply(num, lim){
//     let sum = 0;
//       if(isNaN(num) || isNaN(lim)){
//           return -1
//       }else{
//           for (let i = 0; i < lim; i++) {
//                 sum += num*i
//           }
//           return sum
//       }
// }

/* écrivez une fonction nommé "countnumbers" qui prend en 
paramètre une chaine de caractère. si le 
paramètre n'est pas une chaine retourné -1 
retourner la somme de tous les nombres
 compris dans la chaine*/
/*
 function countnumbers(chaine){
     if (typeof(chaine) !== 'string') {
         return -1
     }else{
         let num = chaine.split('') ;
         let numbr = num.filter(lem => !isNaN(lem))
     }
 }
 console.log(countnumbe rs('4r4'))
*/

/*
Créer la fonction 'intersect_arrays' qui prend en paramètre deux tableaux T1 et T2 et doit retourner un nouveau tableau contenant tous les éléments communs aux deux tableaux ranger dans l'ordre croissant.
*/
// function intersect_arrays(T1, T2) {
//   if (!Array.isArray(T1) || !Array.isArray(T2)) {
//     return -1;
//   } else {
//     let nexTAb = [];
//     for (let i = 0; i < T1.length; i++) {
//       for (let j = 0; j < T1.length; j++) {

//         if (typeof T1[i] !== 'number' || typeof T2[i] !== 'number') {
//           return -1
//         } else {
//           if ((T1[i] == T2[j])){
//             nexTAb.push(T1[i]);io
//           }
//         }
//       }
//     }
//     return nexTAb;
//   }
// }

// console.log(intersect_arrays([1,2,3,4],[4,25,2,8,3]))
// console.log(intersect_arrays([1,2,3,4],[4,'25',"2",8,3]))
// console.log(intersect_arrays([1,2,3,4],[4,[25],2,8,3]))

/*
Créer la fonction 'remove_duplicates' qui prend en paramètre un tableau T et doit retourner le tableau sans les éléments en double.
*/

// function remove_duplicate(tab) {

//   if (!Array.isArray(tab)) {
//     return -1;
//   } else{
//         return tab.filter((x, i) => tab.indexOf(x) === i);
//       // return unique = tab.reduce((prev, cur) => (prev.indexOf(cur) === -1) ? [...prev, cur] : prev, []);
//   }

// }
// console.log('test',remove_duplicate([1,2,3,4,6,7]))
/*
Créer la fonction 'parity' qui fera la comparaison entre les éléments pairs et impairs d'un tableau T passé en paramètre. Si la somme des éléments pairs est supérieure ou éguale à la somme des éléments impairs du tableau, la fonction retounera "true" sinon "false"
*/

// function parity(tab) {

//   if (!Array.isArray(tab)) {
//     return -1;
//   }else{
//       let Pairs = [];
//       let impairs = [];
//       let somPairs = 0;
//       let somImpairs = 0;
//       for (let ind = 0; ind < tab.length; ind++) {
//           if (typeof tab[ind] !== 'number' || tab[ind] < 0) {
//               return -1
//           }else{
//             if(tab[ind] % 2 == 0) {
//                 Pairs.push(tab[ind])
//             }else{
//               impairs.push(tab[ind])
//             }
//           }
//       }
//         console.log(Pairs)

//       for (let i = 0; i < Pairs.length; i++) {
//         somPairs+= Pairs[i]
//       }
//       for (let j = 0; j < impairs.length; j++) {
//         somImpairs+= impairs[j]
//       }

//       console.log(somPairs,somImpairs)
//       if (somPairs > somImpairs) {
//           return true
//       }
//       if(somPairs < somImpairs){
//         return false
//       }
//   }

// }

// console.log(parity([1,2,3,4,7,9,7]))

//  function premier(delt) {
//    if (typeof delt !== "number" || delt > 30 || delt < 0) {
//      return -1;
//    } else {
//      for (var i = 2; i < delt; i++) if (delt % i === 0) return false;
//      return delt > 1;
//    }
//  }
//  console.log(premier(1))
//  console.log(premier(3))
//  console.log(premier(10))
//  console.log(premier(11))
/**
 *
 * Ecrire une fonction nommé "multi" qui prend en paramètre un nombre, et qui ensuite écrit la table de multiplication de ce nombre.
 *
 */

function multi(num) {
  if (typeof num !== "number") {
    return -1;
  } else {
    let str = "";
let tab = [];
    for (let i = 1; i < 6 ;i++) {
        tab.push(num*i)
    }
    return `${tab.join(',')},...,${num*10}`
    // for (let i = 1; i < 9; i++) {
    //   if (i > 5) {
    //     str += ".";
    //     continue;
    //   }
    //   str += `${num * i},`;
    // }
    // return `${str},${num * 10}`;
  }
}

console.log(multi(10));
