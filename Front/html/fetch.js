console.log("hello world");
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

const apiKey = "AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90";
//const search = "harry potter";
const mesLivres = document.querySelector(".mesLivres");

async function getBooks(searchUser) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchUser}&key=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    //
  } catch (error) {
    console.log("horreur", error);
  }
}

getBooks();

searchBtn.addEventListener("click", function () {
  getBooks(searchInput.value);
  console.log(searchInput.value);
  searchInput.value = "";
});
