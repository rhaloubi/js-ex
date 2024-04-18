// 1. Création des objets natifs Etudiant et Professeur

// Objet Etudiant
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
}

// Objet Professeur
function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
}

// 2. Ajout des méthodes étudier() et enseigner()

// Méthode étudier pour Etudiant
Etudiant.prototype.etudier = function() {
    console.log(this.nom + " " + this.prenom + " étudie.");
};

// Méthode enseigner pour Professeur
Professeur.prototype.enseigner = function() {
    console.log(this.nom + " enseigne.");
};

// 3. Création des étudiants et tri selon l’ordre alphabétique

// Création des étudiants
var etudiant1 = new Etudiant("dokkali", "Adam", 20, "k12345");
var etudiant2 = new Etudiant("Haloubi", "Reda", 21, "bh12345");
var etudiant3 = new Etudiant("ZOUHIR", "Youssef", 22, "x78900");

// Création de la liste d'étudiants
var etudiants = [etudiant1, etudiant2, etudiant3];

// Tri des étudiants selon l’ordre alphabétique du nom puis du prénom
etudiants.sort(function(a, b) {
    if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
    } else {
        return a.nom.localeCompare(b.nom);
    }
});

// Affichage des étudiants triés
etudiants.forEach(function(etudiant) {
    console.log(etudiant.nom + " " + etudiant.prenom);
});
