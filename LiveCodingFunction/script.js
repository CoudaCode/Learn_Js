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

// function multi(num) {
//   if (typeof num !== "number") {
//     return -1;
//   } else {
//     let str = "";
// let tab = [];
//     for (let i = 1; i < 6 ;i++) {
//         tab.push(num*i)
//     }
//     return `${tab.join(',')},...,${num*10}`
    // for (let i = 1; i < 9; i++) {
    //   if (i > 5) {
    //     str += ".";
    //     continue;
    //   }
    //   str += `${num * i},`;
    // }
    // return `${str},${num * 10}`;
//   }
// }

// console.log(multi(10));



// function countVowels(chaine){
//   if (typeof(chaine) !== 'string') {
//       return -1
//   } else {
//     let cpt = 0;
//       let Voyell = ['a','o','i','e','u','y','A','O','I','E','U','Y']
//       for (let ind = 0; ind < chaine.length; ind++) {
//           for (let index = 0; index < Voyell.length ; index++) {
//             if (chaine[ind] == Voyell[index]) {
//                   cpt += 1;
//             }
//           }

//        }

//        return cpt
//    }
// }

// console.log(countVowels('aebdsmopd'))
// console.log(countVowels('Qoopozzjhqsdvh'))
// console.log(countVowels('Axscvqcs,cdsjgdkk123'))

// function countnumbers(chaine){
//    if (typeof(chaine) !== 'string'){
//        return -1
//    }else{
//        let num = chaine.split('');
//        let numbr = num.filter(lem => !isNaN(lem))
//    }
//   }
// console.log(countnumbers('4r4'))


// function reverseWords(char){
//   if (typeof char !== 'string') {
//       return -1
//   } else{
//       let tab = char.split(' ')

//       let data = tab.map((dat)=> dat.split("").reverse().join(""))

//       return data.join(" ")
//   }
// }

// console.log(reverseWords('abc'))
// console.log(reverseWords('hello world'))




// function remove_duplicate(tab) {

//   if (!Array.isArray(tab)) {
//     return -1;
//   } else{
//         return tab.filter((x, i) => tab.indexOf(x) === i);
//       // return unique = tab.reduce((prev, cur) => (prev.indexOf(cur) === -1) ? [...prev, cur] : prev, []);
//   }
// }


// console.log(remove_duplicate(''))


// function intersect_arrays(t1, t2){
//   let ret = []
//     if (!Array.isArray(t1) || !Array.isArray(t2)) {
//         return -1
//     } else {
//         for (let ind = 0; ind < t1.length; ind++) {
//             for (let j = 0; j < t2.length; j++) {
//                 if(t1[ind] == t2[j]){
//                   ret.push(t1[ind])
//                 }
              
//             }
          
//         }
//         return ret
//     }
// }


// console.log(intersect_arrays([1,2,4,8], [9,2,8,7]));

// console.log(intersect_arrays([1,2,4,8], "[9,2,8,7])"));



// function hasDistinctElements(tab) {
//   let flag = false
  
//   if (!Array.isArray(tab)) {
//         for (let i = 0; i < tab.length; i++) {
//             if (typeof tab[i] !== 'number'){
//                return -1
//             }
//         }
//   }else{
//     for (let j = 0; j < tab.length; j++) {
//       if (tab[j] !== tab[j-1] && tab[j] !== tab[j+1] || tab[0] !== tab[tab.length-1] ) {
//         flag = true
//       }else{
//         flag = false
//       }
//     }

//     if (flag){
//       return true;
//     } else{
//       return false;
//     }
//   }
// } 

// console.log(hasDistinctElements([,2,4,8]))

// function lessThan(chr, num) {
//     if(typeof chr !== 'string' || typeof num !== 'number') {
//       return -1
//     }else{
//           if(chr.length < num){
//              return 'less'
//           }else if(chr.length > num){
//             console.log(chr.length);
//             return 'most'
//           }else{
//             return 'same'
//           }
//     }
// }

// console.log(lessThan("salut", 10));
// console.log(lessThan("bonjoursrgzgrezrez", 10));
// console.log(lessThan(2, 10));
// console.log(lessThan("salut", ''));

// function hasDistinctElements(tab){
//    let tb = []
//     if (!Array.isArray(tab)){
//         for (let i = 0; i < tab.length; i++) {
//           if (typeof tab[i] !== 'number' ) {
//               return -1
//           }
//         }
//     }else{
//           tb = tab.filter((a,x)=> tab.indexOf(a) !== x)
//           console.log(tb.length);


//           if (tb.length > 0) {
//             return true
//           }else{
//             return false
//           }
//         }
// }


// console.log(hasDistinctElements([1,2,1,4,5,8,8]))

// console.log(hasDistinctElements([1,2,4,5,8,14]))


// function positif(tab){let table = tab.filter((e)=> e>0 && e%3==0)
//   console.log(tab)
//   return table

// }

// console.log( positif([1,2,3]));

// recupere les chaine de caratere don la taille est inferieur ou egal a 7 et ensuite on va utiliser la methode map pour renverser ces chaine

// function carac(carac1) {

// let tab=carac1.filter((e)=>e.length<=7)

//    return  tab.map((e)=>{
//         let output = " "
//         for (let i =e.length-1; i>=0;i--) {
//              output+=e[i]
//         }
//         return output
//     })
//     }

// console.log(carac(["bonjour",'petit']));

// Retourne l'intersection
// function intersect(tab1, tab2){
//      return tab1.filter((e) => tab2.includes(e))
// }
// Retourne Reunion
function intersect(tab1, tab2){
    //  return tab1.filter((e) => tab2.includes(e))

    let tab = [];
    let [plusLong, plusCourt] = tab1.length > tab2.length ? [tab1, tab2] : [tab2, tab1];


        for (let i = 0; i < plusLong.length; i++) {
            if (!plusCourt.includes(plusLong[i])) {
                 tab.push(plusLong[i])
            }
            
        }
        for (let j = 0; j < plusCourt.length; j++) {
            if (!plusLong.includes(plusCourt[j])) {
                 tab.push(plusCourt[j])
            }
            
        }
            return [...new Set(tab)] // New Set retourne un tableau sans les doublons
}


console.log(intersect([1,2,3],[3,7,6,6,6,6]))
console.log(intersect([1,2,"5",,false],["se",2,22,"zz","5",false]))


function isAnagram(chr, str){
    if (typeof chr !== 'string' || typeof str !== 'string') {
        return -1
    }else{
        if (chr.length !== str.length){
            return 'false'
        }else{
            let a = chr.split('').sort().join('')
            let b = str.split('').sort().join('')
            console.log(a , b)

            if(a.length == b.length){
                return 'true'
            }else{
                return 'false'
            }
        }
    }
}


console.log(isAnagram("nobd", "bon"))