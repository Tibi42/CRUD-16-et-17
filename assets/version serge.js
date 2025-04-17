let livres = [
  {
    id: 1,
    titre: "Le Seigneur des Anneaux",
    auteur: "J.R.R. Tolkien",
    annee: 1954,
    genre: "fantastique",
    note: 5,
    statut: "lu",
    description:
      "L'histoire de Frodon Sacquet qui doit détruire l'Anneau Unique pour sauver la Terre du Milieu.",
    urlCouverture:
      "https://cdn.pixabay.com/photo/2021/12/14/20/21/book-6871220_1280.jpg",
  },
  {
    id: 2,
    titre: "1984",
    auteur: "George Orwell",
    annee: 1949,
    genre: "scienceFiction",
    note: 4,
    statut: "lu",
    description:
      "Dans une société totalitaire, Winston Smith tente de résister au contrôle omniprésent de Big Brother.",
    urlCouverture:
      "https://cdn.pixabay.com/photo/2015/11/19/21/11/atlas-1052011_1280.jpg",
  },
  {
    id: 3,
    titre: "Dune",
    auteur: "Frank Herbert",
    annee: 1965,
    genre: "scienceFiction",
    note: 5,
    statut: "enCours",
    description:
      "L'histoire de Paul Atréides sur la planète désertique Arrakis, source de l'épice la plus précieuse de l'univers.",
    urlCouverture:
      "https://cdn.pixabay.com/photo/2017/08/10/08/16/book-2619909_1280.jpg",
  },
];

// Afficher les objets dans les cards
// Ajouter les fonctionnalité de suppression, d'ajout , et de modification en JS (Sans modal)
// Barre derecherche

const affichLivres = document.querySelector(".book-grid");

// Afficher tous les livres au chargement
livres.forEach((e, i) => afficherLivres(i));
couvL.className = "book-cover";
cardLivre.appendChild(couvL);

let source = document.createAttribute("src");
source.value = livres[i].urlCouverture;
couvL.setAttributeNode(source);

function afficherLivres(i) {
  const cardLivre = document.createElement("div");
  cardLivre.className = "book-card";
  affichLivres.appendChild(cardLivre);

  let couvL = document.createElement("img");
  couvL.className = "book-cover";
  cardLivre.appendChild(couvL);

  let source = document.createAttribute("src");
  source.value = livres[i].urlCouverture;
  couvL.setAttributeNode(source);

  const titreL = document.createElement("h3");
  titreL.className = "book-title";
  titreL.textContent = livres[i].titre;
  cardLivre.appendChild(titreL);

  const auteurL = document.createElement("p");
  auteurL.className = "book-author";
  auteurL.textContent = `Auteur: ${livres[i].auteur}`;
  cardLivre.appendChild(auteurL);

  // const anneeL = document.createElement("p");
  // anneeL.className = "book-year";
  // anneeL.textContent = `Année: ${livres[i].annee}`;
  // cardLivre.appendChild(anneeL);

  // const genreL = document.createElement("p");
  // genreL.className = "book-genre";
  // genreL.textContent = `Genre: ${livres[i].genre}`;
  // cardLivre.appendChild(genreL);

  const noteL = document.createElement("p");
  noteL.className = "book-rating";
  noteL.textContent = `Note: ${"⭐".repeat(livres[i].note)}`;
  cardLivre.appendChild(noteL);

  const statutL = document.createElement("p");
  statutL.className = "book-status";
  statutL.textContent = `Statut: ${livres[i].statut}`;
  cardLivre.appendChild(statutL);
  
  const supprimerBtn = document.createElement("button");
  supprimerBtn.className = "delete-button";
  supprimerBtn.textContent = "Supprimer";
  supprimerBtn.addEventListener("click", () => {
    cardLivre.remove();
  });
  cardLivre.appendChild(supprimerBtn);

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";
  actionsDiv.appendChild(supprimerBtn);
  cardLivre.appendChild(actionsDiv);
}


