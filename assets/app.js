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
  
  function creerCard(livre) {
    const cardElement = document.createElement("div");
    
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

  const editButton = cardElement.querySelector(".btn-edit");
  editButton.addEventListener("click", () => {
    const newTitle = prompt("Modifier le titre du livre :", livre.titre);
    const newAuthor = prompt("Modifier l'auteur du livre :", livre.auteur);
    const newNote = parseInt(prompt("Modifier la note du livre (1-5) :", livre.note));
    const newStatus = prompt("Modifier le statut du livre (lu, enCours, nonLu) :", livre.statut);

    if (newTitle) livre.titre = newTitle;
    if (newAuthor) livre.auteur = newAuthor;
    if (newNote) livre.note = newNote;
    if (newStatus) livre.statut = newStatus;

    afficherLivres(livres);
  });

  const deleteButton = cardElement.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    
  });
  
    return cardElement;
  }
  
  function afficherLivres(books) {
    bookCard.innerHTML = "";
    books.forEach((livre) => {
      bookCard.appendChild(creerCard(livre));
    });
  }
  
  afficherLivres(livres);
  
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
  

