const slideTete = ["../Image/teteNicoachLunette.png", "../Image/teteNicoachNormal.png"];
let numeroTete = 0;

function ChangeSlideTete(sens) {
    numeroTete = numeroTete + sens;
    if (numeroTete < 0)
        numeroTete = slideTete.length - 1;
    if (numeroTete > slideTete.length - 1)
        numeroTete = 0;
    document.getElementById("tete").src = slideTete[numeroTete];
}

const slideCorp = ["../Image/tShirt.png", "../Image/vesteAddidas.png","../Image/vesteCuisine.png","../Image/vesteLeopard.png","../Image/chemisePhoto.png"];
let numeroCorp = 0;

function ChangeSlideCorp(sens) {
    numeroCorp = numeroCorp + sens;
    if (numeroCorp < 0)
        numeroCorp = slideCorp.length - 1;
    if (numeroCorp > slideCorp.length - 1)
        numeroCorp = 0;
    document.getElementById("corp").src = slideCorp[numeroCorp];
}

const slideJambe = ["../Image/jeans.png","../Image/pantalonClassique.png","../Image/pantalonIppie.png","../Image/shortCourtNoir.png","../Image/shortBlancClaquette.png"];
let numeroJambe = 0;

function ChangeSlideJambe(sens) {
    numeroJambe = numeroJambe + sens;
    if (numeroJambe < 0)
        numeroJambe = slideJambe.length - 1;
    if (numeroJambe > slideJambe.length - 1)
        numeroJambe = 0;
    document.getElementById("jambe").src = slideJambe[numeroJambe];
}