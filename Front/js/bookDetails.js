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
  // bookDetails.innerHTML = "";
  // const title = document.createElement("h2");
  // const searchInfo = document.createElement("p");
  // searchInfo.innerHTML = "Search info: " + datas.searchInfo.textSnippet;

  // title.innerHTML = datas.volumeInfo.title;
  // bookDetails.appendChild(title);
  // bookDetails.appendChild(searchInfo);
  // const img = document.createElement("img");
  // img.src = datas.volumeInfo.imageLinks.thumbnail;
  // bookDetails.appendChild(img);
  // const description = document.createElement("p");
  // description.innerHTML = datas.volumeInfo.description;
  // bookDetails.appendChild(description);
  // const authors = document.createElement("p");
  // authors.innerHTML = "Authors: " + datas.volumeInfo.authors;
  // bookDetails.appendChild(authors);
  // const categories = document.createElement("p");
  // categories.innerHTML = "Categories: " + datas.volumeInfo.categories;
  // bookDetails.appendChild(categories);
  // const pageCount = document.createElement("p");
  // pageCount.innerHTML = "Page count: " + datas.volumeInfo.pageCount;
  // bookDetails.appendChild(pageCount);
  // const language = document.createElement("p");
  // language.innerHTML = "Language: " + datas.volumeInfo.language;
  // bookDetails.appendChild(language);
  // const publishedDate = document.createElement("p");
}
