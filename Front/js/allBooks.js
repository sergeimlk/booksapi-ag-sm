console.log("hello from allBooks.js");

//SEARCH
const apiKey = "AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90";
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const searchBarSpace = document.querySelector(".searchBar");
const title = document.querySelector("h1");

console.log("title :", title);
let results = [];

//============
//pagination
// let itemsPerPage = 10;
// let currentPage = 1;

// const pages = [];
// const indexOfLastPage = currentPage * itemsPerPage;
// const indexOfFirstPage = indexOfLastPage - itemsPerPage;
// const currentItems = results.slice(indexOfFirstPage, indexOfLastPage);

// for (let i = 0; i < Math.ceil(results.length / itemsPerPage); i++) {
//   pages.push(i);
// }

//console.log(pages);
//============

async function getBooks(searchUser) {
  if (!searchUser) {
    // searchUser = ""; marche pas comme ca
    return;
  }
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchUser}&key=${apiKey}`
    );
    const datas = await response.json();
    console.log(datas);
    displayBooks(datas);
  } catch (error) {
    console.log("erreur dans ton fetch", error);
  }
}
getBooks();

searchBtn.addEventListener("click", function () {
  console.log("search input de l'addEventListener", searchInput.value);
  results = []; //vider le tableau ?
  if (searchInput.value.length > 2) {
    getBooks(searchInput.value);
    console.log(searchInput.value);
    searchInput.value = "";
    //searchBarSpace.innerHTML = "";
    title.innerHTML = "Résultats de la recherche :";
    searchBarSpace.innerHTML = "Effectuez une autre recherche : ";
    searchBarSpace.appendChild(searchInput);
    searchBarSpace.appendChild(searchBtn);
  } else {
    const searchAlert = document.createElement("p");
    searchAlert.innerHTML = "Veuillez entrer plus de 2 caractères";
    searchBarSpace.appendChild(searchAlert);
  }
});

function displayBooks(datas) {
  console.log("results", results);
  //Ciblage de la div concernée par l'injection des élèments
  const bookGrid = document.querySelector("#book-grid");
  bookGrid.innerHTML = "";

  // totalItems meme niveau que items et kind dans datas
  // - TODO : regarder les condition possibles ? (les + efficaces)
  //pas de .length sur totalItems car c'est un nombre et items est un tableau
  if (datas.totalItems > 0 && datas.items.length > 0) {
    datas.items.forEach((book) => {
      //affectation variable <=> element de datas
      const bookId = book.id;
      const title = book.volumeInfo.title;
      const author = book.volumeInfo.authors || "d'un illustre inconnu";
      const cover =
        book.volumeInfo.imageLinks?.medium ||
        book.volumeInfo.imageLinks?.thumbnail ||
        "img/default-cover.jpg"; //parce qu'apparemment il y a des livres sans cover ! et il y a que des thumbnails ou qoui
      //TODO : changer le lien de l'image par défaut & verifier si les autres elements existent aussi (author, etc)

      //création des éléments du DOM
      const bookLink = document.createElement("a");
      bookLink.href = `BooksDetail.html?id=${bookId}`;
      bookLink.target = "_blank";

      const bookCardDiv = document.createElement("div");
      bookCardDiv.classList.add("book-card");
      bookCardDiv.innerHTML = `<h2>${title}</h2>
      <p>Auteur : ${author}</p>
      <img src="${cover}" alt="cover" />
     `;
      bookLink.appendChild(bookCardDiv);
      bookGrid.appendChild(bookLink);

      results.push(title);
      // console.log("results", results);
      console.log("totalItems", datas.totalItems);
      console.log("title du book", title);
      console.log("id du book", bookId);
      console.log("image links", book.volumeInfo.imageLinks);
    });
  } else {
    bookGrid.innerHTML = "Aucun livre trouvé";
  }
}
