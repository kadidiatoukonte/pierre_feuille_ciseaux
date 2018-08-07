var scoreUser = 0;
var scoreOrdi = 0;

while(scoreOrdi<3 && scoreUser < 3){

  var choixUser = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?").toLowerCase();

  if (choixUser != "pierre" && choixUser != "feuille" && choixUser != "ciseaux"){
    console.log("Merci de choisir entre: une pierre, une feuille ou un ciseaux" );
  }
  else {
    var choixOrdi = Math.floor(Math.random() * 3);

    if (choixOrdi === 0) {
      choixOrdi = "pierre";
    } else if (choixOrdi === 1) {
      choixOrdi = "ciseaux";
    } else {
      choixOrdi = "feuille";
    }

    if(choixOrdi === choixUser){
      console.log("Égalité");
    }else if (choixUser === "pierre"){
      if (choixOrdi === "feuille") {
        console.log("L'ordi a gagné");
        scoreOrdi++;
      }else {
        console.log("Vous avez gagné");
        scoreUser++;
      }
    }else if (choixUser === "feuille"){
      if (choixOrdi === "ciseaux") {
        console.log("L'ordi a gagné");
        scoreOrdi++;
      }else {
        console.log("Vous avez gagné");
        scoreUser++;
      }
    }else {
      if (choixOrdi === "pierre") {
        console.log("L'ordi a gagné");
        scoreOrdi++;
      }else {
        console.log("Vous avez gagné");
        scoreUser++;
      }
    }


  }

}

if (scoreUser === 3) {
  console.log("Bravo vous emportez le match");
}
else {
  console.log("Dommage l'ordi est le vainceur");
}
