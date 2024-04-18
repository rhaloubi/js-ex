//qes 1:
function Voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
}

//qes 2:  
let listVoitures = [];

//qes 3:
function Hyundai(serie, hybride, model, marque, annee, type, carburant) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.serie = serie;
    this.hybride = hybride;
}

Hyundai.prototype.alarmer = function() {
    console.log("Alarme Hyundai");
};

function Ford(option, model, marque, annee, type, carburant) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.option = option;
}

Ford.prototype.alarmer = function() {
    console.log("Alarme Ford");
};

//qes 4:
listVoitures.sort((a, b) => {
    return a.annee - b.annee;
});

// Affichage des voitures
listVoitures.forEach(voiture => {
    console.log(voiture.toString());
});
