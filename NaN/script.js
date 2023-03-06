// function checktab(param) {
//   let nbrPair = [];
//   let check = false;
//   for (let i = 0; i < param.length; i++) {
//     if (typeof param[i] == "number") {
//       check = true;

//       if (param[i] % 2 == 1) {
//         nbrPair.push(param[i]);
//       }
//     }
//   }

//   if (!check) {
//     console.log("la fonction contient des nombres");
//   } else if (nbrPair.length > 0) {
//     console.log(nbrPair);
//   } else {
//     console.log(-1);
//   }
// }

// checktab([1, 2, 3, 4, "diara"]);

// function secondDegre(a, b, c) {
//   console.log(a);
//   var X1;
//   var X2;
//   var X;

//   var delt = b * b - 4 * (a * c);
//   console.log(delt);
//   switch (delt) {
//     case delt > 0:
//       X1 = (-b - Math.sqrt(delt)) / (2 * a);
//       X2 = (-b + Math.sqrt(delt)) / (2 * a);
//       alert("les solutions sont : \n X1=" + X1 + "\n X2= " + X2);
//       break;
//     case (delt = 0):
//       X = -b / (2 * a);
//       alert(X);
//       break;
//     default:
//       alert("pas de solutions");
//       break;
//   }
// }

// secondDegre(
//   parseInt(prompt("Entrer la valeur de A")),
//   parseInt(prompt("Entrer la valeur de b")),
//   parseInt(prompt("Entrer la valeur de c"))
// );

// function secondegre() {}

// let tab = [];

// var A = null;
// for (let x = 0; x < 3; x++) {
//   if (x == 0) {
//     do {
//       A = prompt("entrez la valeur de A");
//     } while (isNaN(A));
//     tab.push(A);
//   } else if (x == 1) {
//     do {
//       A = prompt("entrez la valeur de B");
//     } while (isNaN(A));
//     tab.push(A);
//   } else {
//     do {
//       A = prompt("entrez la valeur de C");
//     } while (isNaN(A));
//     tab.push(A);
//   }
// }
// console.log(tab);

// var val1 = document.getElementById("val1");
// var val2 = document.getElementById("val2");

// // var nbre1 , nbre2
// var nbre1;
// var Para = document.getElementById("demo");

// val1.addEventListener("input", (e) => {
//   nbre1 = e.target.value;
//   console.log(nbre1);

//   console.log(val2.value);

//   console.log(nbre2);

//   let sum = parseInt(nbre2) + parseInt(nbre1);

//   Para.append(sum);
//   console.log(typeof sum);
// });

// val2.addEventListener("input", (e) => {
//   nbre2 = e.target.value;

//   console.log(val1.value);

//   console.log(nbre2);

//   let sum = parseInt(nbre2) + parseInt(nbre1);

//   Para.append(sum);
//   console.log(typeof sum);
// });

// val1.addEventListener("input", (e) => {
//   nbre1 = e.target.value;
//   console.log(nbre1);

//   for (let i = 0; i <= 10; i++) {
//     let sum = parseInt(nbre1 * i);
//     let desh = document.createElement("p");
//     // Para.append(sum +"\n")

//     // console.log(typeof(sum))

//     desh.innerText = `${nbre1} * ${i} = ${nbre1 * i} \n`;

//     document.body.append(desh);
//   }
// });

// If imbriqué

// let tets = confirm("Avez Vous plus de 18 ans");

// if(tets == true){
//       let demo = parseInt(prompt("entrer un nombre de 1 à 10"));
//       if (demo % 2 == 0){
//           let deo = parseInt(prompt(`entrez un nombre compris entre 1 et ${demo}`));
//           if (deo >= 1 && deo <= demo && deo%3 === 0) {
//               alert("Vous avez gagner")
//           }else{
//             alert("Vous avez Perdu")
//           }
//       } else {
//         alert("vous avez perdu");
//       }
// } else {
//   alert("vous n'êtes pas autorisé");
// }

////

// let nmber = parseInt(prompt('Entrer un nombre'));

// if((nmber%2==0 && nmber&&5==0) || (nmber%3==0 && nmber%9== 0)){
//   alert('Gagné')
// }else{
//   alert('tu as gor')
// }

// let diar = prompt(
//   "Entrer les trois valeurs a,b,c en les separant par des espaces"
// );

// let tab = diar.split(" ");
// let delta = 0;

// let X1, X2, X;
// if (
//   tab.length == 3 &&
//   tab.every((str) => {
//     return !isNaN(str);
//   })
// ){
//     const [a,b,c] = tab
//     delta = parseInt(b) ** 2 - 4 * parseInt(a) * parseInt(c);
//     console.log(delta);

//     if (delta == 0) {
//       X = -parseInt(b) / (2 * parseInt(a));

//       alert(`Discriminant est égale à ${delta}.\n La racine unique est ${X}`);
//     } else if (delta > 0) {
//       X1 =
//         (-parseInt(b) - Math.floor(Math.sqrt(delta))) /
//         (2 * a);
//       X2 =
//         (-parseInt(b) + Math.floor(Math.sqrt(delta))) /
//         (2 * a);
//       alert(
//         `Discriminant est postif et égale à ${delta}.\n Les racines sont sont ${X1} et ${X2}`
//       );
//     } else {
//       alert(
//         `Discriminant est négatif et égale ${delta} , l'equation n'admet pas de solution`
//       );
//   }
// } else {
//   console.log("entrez un nombre");
// }




// function funsplit(char, separate) {
//     //  créer une fonction split qui divise une chaine de caractere et la divise en fonction du separateur  @@
//     let tab = []
//     let total = "";
    
//     char = char.replaceAll(separate, ",");
//     console.log(char)
//     for (const chr of char) {
       
//             if(chr != separate){total += chr}
//             if(chr == separate){
//                 tab.push(total)
//                 console.log(tab)
//                 total == ""
//             }        
//         }
        
//         tab.push(total)
       
//        if(separate == ""){
//                 tab.pop()
//                 tab.shift()
//        }
   
//         return tab
// }
// console.log(funsplit("Bonjour je suis Nanien je suis ivoirien tout le monde", "je"));


// function decoupeur(mot, separateur) {
//     // Va contenir les sous-chaîne qu'on va séparer 
//     let archive = [];   
//     // Va recevoir la sous-chaîne 
//     let sousChaine = "";
//     // Par défaut je récupère indice de la sous-chaîne dans le mot 
//     let indexSousChaine = mot.indexOf(separateur);
//     console.log(indexSousChaine);
//     // Si separateur existe dans le mot 
//     while (indexSousChaine > -1 ){
//         // Si separateur est diferent de chaîne vide
//         if (separateur != "" ){
//             // Je récupère les caractères qui se trouve avant la prémière occurance du séparateur 
//             sousChaine = mot.substr(0, indexSousChaine);
//             // Dans le mot je remplace la première occurance de séparateur par chaîne vide et je stocke dans mot 
//             mot = mot.replace(separateur, "");
//             // Dans le mot je remplace la sous-chaîne à séparer par chaîne vide et je stocke dans mot 
//             mot = mot.replace(sousChaine, "");
//             // J'ajoute la sous-chaine à séparer dans le tableau archive 
//             archive.push(sousChaine);
//             // Je recherche à nouveau d'indice du séparateur dans le nouveau mot 
//             indexSousChaine = mot.indexOf(separateur);
//         }else{
//             // Si séparateur est une chaîne vide j'ajoute chaque caractère du mot dans le tableau archive
//             archive.push(mot[mot.indexOf(separateur)]);
//             // Je remplace le premier caractère du mot par une chaîne vide
//             mot = mot.replace(mot[0], "");
//             // Si le mot contient un seul caractère, 
//             if(mot.length === 1 ){
//                 // j'ajoute immédiatement le mot dans l'archive 
//                 archive.push(mot);
//                 // Et je sorts systématiquement dans la boucle 
//                 break;
//             }
//         }
//     }
//     // Si le séparateur n'existe pas dans le mot, 
//     if (indexSousChaine === -1 ){
//         // J'ajoute te texte brute dans l'archive 
//         archive.push(mot);
//     }
//     // Je retourne le tableau archive 
//     return archive;
// }

//console.log(decoupeur("Bonjour, je suis Nanien, je suis ivoirien ", "je"));

// La fonction Slice
// La focntion Substr


// function multi(A) {
//     let i=1;
//     multi= ""
//     while(i<=10){
//         multi+= `${A*i},`
//         if(i==10){
//             multi+= `${A*i}`
//         }   
//         i++
//     }
//     return multi

// }
// console.log(multi(4))
// console.log(multi(5))
// console.log(multi(10))
// function multi(A) {
//         let i=1;
//         multi= ""
//         while(i<=10){
//             multi+= `${A*i},`
//             if(i==10){
//                 multi+= `${A*i}`
//             }   
//             i++
//         }
//         return parseInt(multi)
    
//     }
    
function countnumbres(stg){
        let tab = [];
        let somme = 0;
        if(stg == "" || stg == 0){
            return -1
        }else{
            for(const i of stg){
                if(!isNaN(i)){
                    tab.push(i)
                }else{
                    return -1
                }
            }
            for (const j of tab){
                somme += parseInt(j)                    
            }
    
        }
        return somme
        
}

