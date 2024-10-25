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


async function getBooks(searchUser) {
  if (!searchUser) {
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
      <a href="${link}" target="_blank">Lien vers le livre</a>
      bookLink.appendChild(bookCardDiv);
      bookGrid.appendChild(bookLink);

      results.push(title);
      console.log("results", results);
      console.log("totalItems", datas.totalItems);
      console.log("title du book", title);
      console.log("id du book", bookId);

    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Aucun livre trouvé";
    mesLivres.appendChild(li);
  }
}