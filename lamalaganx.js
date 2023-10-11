
"use script";

let choixUtilisateur=confirm("Quel valeur choisissez-vous  ? Pierre, feuille ou ciseaux");


choixUtilisateur =choixUtilisateur.toLowerCase()

let ordi;
let choixOrdi;

ordi = (Math.floor(Math.random() * 3) + 1);
//Math.floor(); renvoie le plus grand entier qui est inférieur ou égal à un nombre exemple math.floor de 5.99 sera egal a 5
//Math.random();renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu)


switch(Ordi){
    case 1:
        choixOrdi= "pierre";
        break;
    case 2:
        choixOrdi= "feuille";
        
    case "trois":
        choixOrdi = "ciseaux";
        break;
}


if(choixUtilisateur = choixOrdi){
    document.write("Vous êtes à égalité !")
}
else{
    
    switch(choixUtilisateur){
        case "pierre":
            if(choixordi == "feuille"){
                
                document.write("L'ordinateur a choisi feuille donc ordi à gagné !")
            }
            else{
                document.write("L'ordinateur a choisi ciseaux donc ordi à perdu !" )
            }
            
        case "ciseaux":
            if(choixOrdi == "pierre"){
                document.write("L'ordinateur a choisi pierre donc l'ordinateur à gagné !")
            }
            else{
                document.write("L'ordinateur a choisi papier donc l'utilisateur à gagné !")
            }
        case "papier":
            if(choixOrdi == "ciseaux"){
                document.write("L'ordinateur a choisi ciseaux donc l'ordinateur à gagné !")
            }
            else{
                document.write("L'ordinateur a choisi pierre donc l'utilisateur à gagné !")
            }
        break;
        }
}