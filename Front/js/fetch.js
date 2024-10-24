console.log("hello world");

//SEARCH
const apiKey = "AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90";
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
let results = [];

//DISPLAY
const mesLivres = document.querySelector("#mesLivres"); //Div créée pour test
const bookGrid = document.querySelector("#book-grid");
const bookCover = document.querySelector("#book-cover");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookLink = document.querySelector("#book-link");
const bookCard = document.querySelector("#book-card");

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
  results = []; //vider le tableau ?
  getBooks(searchInput.value);
  console.log(searchInput.value);
  searchInput.value = "";
});

function displayBooks(datas) {
  mesLivres.innerHTML = "";
  bookGrid.innerHTML = "";

  // totalItems meme niveau que items et kind dans datas
  // - condition possibles ?
  //pas de .length sur totalItems car c'est un nombre et items est un tableau
  if (datas.totalItems > 0 && datas.items.length > 0) {
    datas.items.forEach((book) => {
      const bookId = book.id;
      const title = book.volumeInfo.title;
      const cover =
        book.volumeInfo.imageLinks?.thumbnail || "img/default-cover.jpg"; //parce qu'apparemment il y a des livres sans cover ! changer le lien
      const author = book.volumeInfo.authors;
      const bookLink = document.createElement("a");
      bookLink.href = `BooksDetail.html?id=${bookId}`;
      const bookCardDiv = document.createElement("div");
      bookCardDiv.classList.add("book-card");
      bookCardDiv.innerHTML = `<h2>${title}</h2>
      <p>Auteur : ${author}</p>
      <img src="${cover}" alt="cover" />
     `;
      //<a href="${link}" target="_blank">Lien vers le livre</a>
      bookLink.appendChild(bookCardDiv);
      bookGrid.appendChild(bookLink);

      results.push(title);
      // console.log("results", results);
      console.log("totalItems", datas.totalItems);
      console.log("title du book", title);
      console.log("id du book", bookId);

      ///////// création de li pour le test
      // const li = document.createElement("li");
      // li.textContent = title;
      // const link = document.createElement("a");
      // link.href = book.volumeInfo.previewLink;
      // link.textContent = title;
      // li.appendChild(link);
      // mesLivres.appendChild(li);
      ///////// fin du test
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Aucun livre trouvé";
    mesLivres.appendChild(li);
  }
}
