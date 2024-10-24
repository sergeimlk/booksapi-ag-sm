console.log("hello from bookDetails.js");
const apiKey = "AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90";

const queryString_url_id = window.location.search;
console.log("queryString_url_id", queryString_url_id);
const urlParams = new URLSearchParams(queryString_url_id);
console.log("urlParams", urlParams);
const theId = urlParams.get("id");
console.log("theId", theId);

async function getBookDetails() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${theId}?key=${apiKey}`
    );
    const datas = await response.json();
    console.log(datas);
    // displayBookDetails(datas);
  } catch (error) {
    console.log("erreur dans ton fetch", error);
  }
}

getBookDetails();

function displayBookDetails(datas) {
  const book = datas.volumeInfo;
  console.log(book);
  const bookDetails = document.createElement("div");
  bookDetails.classList.add("bookDetails");
  bookDetails.innerHTML = `
    <h2>${book.title}</h2>
    <h3>${book.authors}</h3>
    <img src="${book.imageLinks.thumbnail}" alt="${book.title}">
    <p>${book.description}</p>
    <a href="${book.previewLink}" target="_blank">Preview</a>
    `;
  mesLivres.appendChild(bookDetails);
}
