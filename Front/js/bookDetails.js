console.log("hello from bookDetails.js");

const apiKey = "AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90";
const bookDetails = document.querySelector(".book-detail");
console.log("object bookDetails", bookDetails);

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
    displayBookDetails(datas);
  } catch (error) {
    console.log("erreur dans ton fetch", error);
  }
}

getBookDetails();

function displayBookDetails(datas) {
  console.log(datas);
  console.log(datas.volumeInfo.title);
  bookDetails.innerHTML = "";
  const img = document.createElement("img");
  const title = document.createElement("h1");
  const auteur = document.createElement("h2");
  const description = document.createElement("p");
  img.src = datas.volumeInfo.imageLinks?.thumbnail || "img/default-cover.jpg";

  title.innerHTML = datas.volumeInfo.title;
  auteur.innerHTML = datas.volumeInfo.authors || "d'un illustre inconnu";
  description.innerHTML = datas.volumeInfo.description || "";
  bookDetails.appendChild(img);
  bookDetails.appendChild(title);
  bookDetails.appendChild(auteur);
  bookDetails.appendChild(description);
}
