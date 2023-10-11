"use strict";


let nbr1 = 5;//number
let nbr2 = 8;
let nbr3 = "5";//string

if(nbr1 == nbr3){
    alert("Idem");
}

if (nbr1 === nbr3){
    alert("idem bis");
}else{
    alert("Je suis dans le else ")};


if(nbr1 == nbr3){
    alert("Idem");
}

if (nbr1 === nbr3){
    alert("idem bis");
}else{
    alert("Je suis dans le else ");
}

if(nbr1 < nbr2){
    alert("nbr1 est le plus grand");
}else if(nbr1>nbr2){
    alert("nbr1 est le plus petit");
}else{
    alert("Je ne sais pas");
}

switch(7){
    case 1:
        console.log("je suis le chiffre 1");
        break;//Attention a ne pas m'oublier
    case 2:
        console.log("je suis le chiffre 2");
        break;
    case 3:
        console.log("je suis le chiffre 3");
        break;
    case 4:
        console.log("je suis le chiffre 4");
        break;
    case 5:
        console.log("je suis le chiffre 5");
        break;
    default:
        console.log("je suis un autre chiffre");
}
