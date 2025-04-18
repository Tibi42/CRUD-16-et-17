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

const bookCard = document.querySelector("#bookGrid");
const searchInput = document.querySelector("#searchInput");
const affichLivres = document.querySelector(".book-grid");

// fonction qui fait afficher mse cards
function afficherLivres(books) {
  bookCard.innerHTML = "";
  books.forEach((livre) => {
    bookCard.appendChild(creerCard(livre));
  });
}

afficherLivres(livres);

// crzation de cards
function creerCard(livre) {
  const cardElement = document.createElement("div");

  // statu des cards
  cardElement.classList.add("book-card");
  let statutClass = "";
  if (livre.statut === "lu") {
    statutClass = "status-read";
  } else if (livre.statut === "enCours") {
    statutClass = "status-reading";
  } else {
    statutClass = "status-unread";
  }

  cardElement.innerHTML = `
    <div class="book-cover" style="background-image: url('${
      livre.urlCouverture
    }');"></div>
      <div class="book-info">  
      <h3>${livre.titre}</h3>
      <p>${livre.auteur}</p>
      <p>${"⭐".repeat(livre.note)}</p>
      <p class="book-status ${statutClass}">${livre.statut}</p>
      </div>
      <div class="card-actions">
          <button class="card-btn btn-edit">Modifier</button>
          <button class="card-btn btn-delete">Supprimer</button>
      </div>
    `;

  // const deleteButton = cardElement.querySelector(".btn-delete");
  // deleteButton.addEventListener("click", () => {});

  // const modBoutton = cardElement.querySelector("btn-edit");
  // modBoutton.onclick = () => {};

  // boutton modifier card
  const editButton = cardElement.querySelector(".btn-edit");
  editButton.addEventListener("click", () => {
    const modalButtonAfficher = document.querySelector("#bookFormModal");
    modalButtonAfficher.style.display = "flex";

    // Pré-remplir le formulaire avec les données du livre
    document.querySelector("#title").value = livre.titre;
    document.querySelector("#author").value = livre.auteur;
    document.querySelector("#year").value = livre.annee;
    document.querySelector("#genre").value = livre.genre;
    document.querySelector("#rating").value = livre.note;
    document.querySelector("#status").value = livre.statut;
    document.querySelector("#description").value = livre.description;
    document.querySelector("#coverUrl").value = livre.urlCouverture;

    // Modifier le comportement du bouton de soumission
    const form = document.querySelector(".submit-btn");
    form.onclick = (e) => {
      e.preventDefault();

      livre.titre = document.querySelector("#title").value.trim();
      livre.auteur = document.querySelector("#author").value.trim();
      livre.annee = document.querySelector("#year").value.trim();
      livre.genre = document.querySelector("#genre").value.trim();
      livre.note = document.querySelector("#rating").value.trim();
      livre.statut = document
        .querySelector("#status")
        .value.trim()
        .toLowerCase();
      livre.description = document.querySelector("#description").value.trim();
      livre.urlCouverture = document.querySelector("#coverUrl").value.trim();

      afficherLivres(livres);
      modalButtonAfficher.style.display = "none";
    };
  });

  // boutton modifier
  // const editButton = cardElement.querySelector(".btn-edit");
  // editButton.addEventListener("click", () => {
  //   const newTitle = prompt("Modifier le titre du livre :", livre.titre);
  //   const newAuthor = prompt("Modifier l'auteur du livre :", livre.auteur);
  //   const newNote = prompt("Modifier la note du livre (1-5) :", livre.note);
  //   const newStatus = prompt(
  //     "Modifier le statut du livre (lu, enCours, nonLu) :",
  //     livre.statut
  //   );

  //   if (newTitle) livre.titre = newTitle;
  //   if (newAuthor) livre.auteur = newAuthor;
  //   if (newNote) livre.note = newNote;
  //   if (newStatus) livre.statut = newStatus;

  //   afficherLivres(livres);
  // });

  // boutton supprimer card
  const deleteButton = cardElement.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    const confirmDelete = confirm(
      `Êtes-vous sûr de vouloir supprimer "${livre.titre}" ?`
    );
    if (confirmDelete) {
      livres = livres.filter((b) => b.id !== livre.id);
      afficherLivres(livres);
    }
  });
  return cardElement;
}

//  filtre par genre
const genreFilter = document.querySelector("#genreFilter");
genreFilter.addEventListener("change", function () {
  const selectedGenre = genreFilter.value;

  const filteredBooks = selectedGenre
    ? livres.filter((book) => book.genre === selectedGenre)
    : livres;

  afficherLivres(filteredBooks);
});

// filtre par statut
const statusFilter = document.querySelector("#statusFilter");
statusFilter.addEventListener("change", function () {
  const selectedStatus = statusFilter.value;

  const filteredBooks = selectedStatus
    ? livres.filter((book) => book.statut === selectedStatus)
    : livres;

  afficherLivres(filteredBooks);
});

//  recherche par input
searchInput.addEventListener("input", function () {
  const inputValue = searchInput.value.toLowerCase();

  const resultats = livres.filter((book) => {
    return (
      book.titre.toLowerCase().includes(inputValue) ||
      book.auteur.toLowerCase().includes(inputValue)
    );
  });

  afficherLivres(resultats);
});

// fait apparaiter la modale ajouter livre
const ajouterLivre = document.querySelector(".add-btn");
const modalButtonAfficher = document.querySelector("#bookFormModal");
ajouterLivre.addEventListener("click", () => {
  modalButtonAfficher.style.display = "flex";
});

//  fait disparaitre la modale ajouter livre
const ajouterLivreDel = document.querySelector("#closeFormModal");
ajouterLivreDel.addEventListener("click", () => {
  modalButtonAfficher.style.display = "";
});

// ajout de livre par le form de ajouter livre
const form = document.querySelector(".submit-btn");
form.addEventListener("click", (e) => {
  e.preventDefault();

  const titre = document.querySelector("#title").value.trim();
  const auteur = document.querySelector("#author").value.trim();
  const annee = document.querySelector("#year").value.trim();
  const genre = document.querySelector("#genre").value.trim();
  const note = document.querySelector("#rating").value.trim();
  const statut = document.querySelector("#status").value.trim().toLowerCase();
  const description = document.querySelector("#description").value.trim();
  const urlCouverture = document.querySelector("#coverUrl").value.trim();

  const nouveauLivre = {
    id: livres.length + 1,
    titre: titre,
    auteur: auteur,
    annee: annee,
    genre: genre,
    note: note,
    statut: statut,
    description: description,
    urlCouverture: urlCouverture,
  };

  livres.push(nouveauLivre);

  afficherLivres(livres);
  document.querySelector("#bookForm").reset();
  modalButtonAfficher.style.display = "none";
});
