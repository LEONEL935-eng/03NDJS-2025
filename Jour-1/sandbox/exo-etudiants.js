// sandbox/exo-etudiants.js

const etudiants = [
    { prenom: "Leonel", age: 23 },
    { prenom: "Sarah", age: 21 },
    { prenom: "Ibrahim", age: 25 }
  ];
  
  // 1. Afficher tous les prénoms
  function afficherPrenoms(liste) {
    console.log("Liste des étudiants :");
    liste.forEach(e => console.log("- " + e.prenom));
  }
  
  // 2. Trouver un étudiant par prénom
  function trouverEtudiant(prenom) {
    const resultat = etudiants.find(e => e.prenom.toLowerCase() === prenom.toLowerCase());
    console.log(resultat ? `Trouvé : ${resultat.prenom}, ${resultat.age} ans` : "Aucun étudiant trouvé.");
  }
  
  // 3. Ajouter un nouvel étudiant
  function ajouterEtudiant(prenom, age) {
    etudiants.push({ prenom, age });
    console.log(`${prenom} ajouté avec succès.`);
  }
  
  // ------------------
  // TESTS
  afficherPrenoms(etudiants);
  trouverEtudiant("Sarah");
  ajouterEtudiant("Moussa", 22);
  afficherPrenoms(etudiants);
  