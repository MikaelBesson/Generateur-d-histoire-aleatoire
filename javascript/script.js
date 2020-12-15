let noms = ["Pierre aime", "Charlotte a envie de", "Jean n'aime pas", "Lucie veut bien", "Charlie s'en fout de"];
let objet = ["avec un marteau","avec une voiture","avec un ballon","avec un telephone","avec un micro-onde"];
let temps = ["quand il fait -1000","quand il fait 15°","quand il fait 25°","quand il fait 5°","quand il fait 7°"];
let lieux = ["a fourmies","a quinson","sur la lune","a la plage"," en guadeloupe"];
let verbes = ["manger","dormir","fumer","partager","courir"];
let affiche = document.getElementById("texte");

let name = document.getElementById("input");


let boutonGenerer = document.getElementById("generate");

boutonGenerer.addEventListener("click",function (){
    let name1 = name.value;

    let randomNoms = noms[Math.floor(Math.random() * noms.length)];

    let randomobjet = objet[Math.floor(Math.random() * objet.length)];

    let randomtemps = temps[Math.floor(Math.random() * temps.length)];

    let randomlieux = lieux[Math.floor(Math.random() * lieux.length)];

    let randomverbes = verbes[Math.floor(Math.random() * verbes.length)];
    affiche.innerHTML = randomNoms+" "+randomverbes+"<br>"+randomobjet+" "+randomlieux+"<br>"+randomtemps+" avec "+name1;

})

