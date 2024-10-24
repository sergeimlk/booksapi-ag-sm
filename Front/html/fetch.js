console.log("hello world");
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");

const apiKey = "AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90";
//const search = "kafka";
const mesLivres = document.querySelector("#mesLivres");

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
    //
  } catch (error) {
    console.log("erreur dans ton fetch", error);
  }
}

getBooks();

searchBtn.addEventListener("click", function () {
  getBooks(searchInput.value);
  console.log(searchInput.value);
  searchInput.value = "";
});

function displayBooks(datas) {
  mesLivres.innerHTML = "";

  let result = [];

  if (datas.totalItems > 0 && datas.items) {
    datas.items.forEach((book) => {
      const title = book.volumeInfo.title;

      result.push(title);
      console.log("result", result);

      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = book.volumeInfo.previewLink;
      link.textContent = title;
      li.appendChild(link);
      mesLivres.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Aucun livre trouvé";
    mesLivres.appendChild(li);
  }
}
