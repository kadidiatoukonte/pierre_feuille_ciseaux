var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
var choixOrdi = Math.floor(Math.random() * 3);

while(choixUtilisateur != choixOrdi){
if (choixOrdi === 0) {
console.log("pierre");
}

else if (choixOrdi <= 0.33) {
console.log("pierre");
}

else if (choixOrdi === 0.34) {
console.log("feuille");
}

else if (choixOrdi <= 0.66) {
console.log("feuille");
}

else if (choixOrdi === 0.67) {
console.log("ciseaux");
}

else {
console.log("ciseaux");
}
  console.log("Réessayé");
  var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
}
console.log("Égalité");
