
let personnage = {
  prenom: "John",
  santeMentale: 10,
};

const musiques = ["Anissa - Wejdene", "c'est carre le s", "Jules César", "FLASHBACK","Gritano" ];

function choisirMusique() {
let indice = Math.floor(Math.random() * musiques.length);
  return musiques[indice];
}

function trajetEnTaxi() {
  let trajet = {
    radio: choisirMusique(),
    feux_rouges_restants: 30,
    changementsDeTaxi: 0,
  };

  while (trajet.feux_rouges_restants > 0) {
    console.log(
      `Musique : ${trajet.radio}, Feux Rouges Restants : ${trajet.feuxRougesRestants}`
    );

    if (trajet.radio === "Anissa - Wejdene") {
      personnage.santeMentale -= 1;
      trajet.changementsDeTaxi += 1;
      console.log("Changement de taxi!");
    }

    trajet.feux_rouges_restants -= 1;
    trajet.radio = choisirMusique();
  }

  if (personnage.santeMentale <= 0) {
    console.log("Explosion!");
  } else {
    console.log(`mehmoud est bien arrivé chez lui en ${trajet.changementsDeTaxi} changements de taxi.`);
  }
}

trajetEnTaxi();
