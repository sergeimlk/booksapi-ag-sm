// Définir les constantes et sélectionner les éléments DOM :
const apiKey = "AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90";// Définir la clé API.

 
const monLivre = document.querySelector("#monLivre");
const bookGrid = document.querySelector("#book-grid");
const bookCover = document.querySelector("#book-cover");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");


// document
// .getElementById("navbar-toggle")
// .addEventListener("click", function () {
//   const navbarMenu = document.getElementById("navbar-menu");
//   navbarMenu.classList.toggle("show");
// });

async function getBookDetails() {
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes/${theId}?key=${apiKey}`
        );
        const datas = await response.json();
        console.log(datas);
        displayBookDetails(datas);
    } catch (error) {
        console.log("erreur dans ton fetch", error);
    }
}

// Définir une fonction asynchrone pour récupérer les détails du livre :


// Sélectionner les éléments HTML où les informations du livre seront affichées (couverture, titre, auteur, etc.).



// if (datas.totalItems > 0 && datas.items.length > 0) {
//     datas.items.forEach((book) => {
//         const bookId = book.id;
//         const title = book.volumeInfo.title;
//         const cover =
//             book.volumeInfo.imageLinks?.thumbnail || "img/default-cover.jpg"; //parce qu'apparemment il y a des livres sans cover ! changer le lien
//         const author = book.volumeInfo.authors;
//         const bookLink = document.createElement("a");
//         bookLink.href = `BooksDetail.html?id=${bookId}`;
//         const bookCardDiv = document.createElement("div");
//         bookCardDiv.classList.add("book-card");
//         bookCardDiv.innerHTML =
//             `<img src="${cover}" alt="cover" />
//       <h2>${title}</h2>
//       <p>Auteur : ${author}</p>
//       <p>Description : ${desc}</p>
//      `;
//         bookLink.appendChild(bookCardDiv);
//         bookGrid.appendChild(bookLink);

//         requestIdleCallback.push(title);
//         console.log("results", results);
//         console.log("totalItems", datas.totalItems);
//         console.log("titre du book", title);
//         console.log("id book", bookId);
//     });

// } else {
//     const li = document.createElement("li");
//     li.textContent = "Aucun livre trouvé";
//     mesLivres.appendChild(li);
// };



// Envoyer une requête à l'API Google Books avec l'ID du livre.




// Ajouter un écouteur d'événement pour basculer l'affichage d'un EXTRAIT DU LIVRE (ouvre une nouvelle page).
const handleEvent = (event) => {
    if (event.type === 'click') {
        console.log('click');
        const searchUser = searchInput.value.trim();
        if (searchUser) {
            resultsDiv.innerHTML = '<p>Chargement...</p>'; // Loading state
            getBooks(searchUser);
        }
    }
};

searchBtn.addEventListener('click', handleEvent);
searchInput.addEventListener('keypress', handleEvent);




// Envoyer une requête à l'API Google Books avec l'ID du livre.
// Convertir la réponse en JSON.
// Appeler une fonction pour afficher les détails du livre.
// Définir une fonction pour afficher les détails du livre :

// Extraire les informations pertinentes du livre (titre, auteur, description, etc.).
// Mettre à jour les éléments HTML avec les informations du livre.
// Appeler la fonction pour récupérer les détails du livre :

// Appeler la fonction asynchrone pour récupérer et afficher les détails du livre.
// Étapes en Détail
// Définir les constantes et sélectionner les éléments DOM :

// Sélectionner les éléments HTML où les informations du livre seront affichées.
// Ajouter un écouteur d'événement pour le bouton de navigation :

// Ajouter un écouteur d'événement pour basculer l'affichage du menu de navigation.
// Définir une fonction asynchrone pour récupérer les détails du livre :

// Envoyer une requête à l'API Google Books avec l'ID du livre.
// Convertir la réponse en JSON.
// Appeler une fonction pour afficher les détails du livre.
// Définir une fonction pour afficher les détails du livre :

// Extraire les informations pertinentes du livre (titre, auteur, description, etc.).
// Mettre à jour les éléments HTML avec les informations du livre.
// Appeler la fonction pour récupérer les détails du livre :

// Appeler la fonction asynchrone pour récupérer et afficher les détails du livre.