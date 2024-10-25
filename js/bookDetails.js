// CONSTANTES
const apiKey = "AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90";

const monLivre = document.querySelector("#monLivre");

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
      bookCardDiv.innerHTML = 
      `<img src="${cover}" alt="cover" />
      <h2>${title}</h2>
      <p>Auteur : ${author}</p>
      <p>Description : ${desc}</p>
     `;
      bookLink.appendChild(bookCardDiv);
      bookGrid.appendChild(bookLink);

      requestIdleCallback.push(title);
      console.log("results", results);
      console.log("totalItems", datas.totalItems);
      console.log("titre du book", title);
      console.log("id book", bookId);});

  } else {
    const li = document.createElement("li");
    li.textContent = "Aucun livre trouvé";
    mesLivres.appendChild(li);
  };
