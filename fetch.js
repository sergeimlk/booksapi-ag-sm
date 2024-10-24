const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const apiKey = 'AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90';

async function getBooks(searchUser) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchUser}&key=${apiKey}`
        );
        const data = await response.json();

        if (response.ok) {
            let books = data.items;
            let output = '<div class="book-grid">';
            books.forEach(book => {
                output += `
                <div class="book-card">
                    <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/100'}" alt="${book.volumeInfo.title}">
                    <h2>${book.volumeInfo.title}</h2>
                    <p>Auteur(s): ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p>
                    <p>Description: ${book.volumeInfo.description ? book.volumeInfo.description : 'Pas de description disponible'}</p>
                </div>
                `;
            });
            output += '</div>';
            document.getElementById("results").innerHTML = output;
        } else {
            console.error('Erreur de l\'API:', data.error.message);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
    }
}

searchBtn.addEventListener("click", function () {
    getBooks(searchInput.value);
    console.log(searchInput.value);
    searchInput.value = "";
});

searchInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        getBooks(searchInput.value);
        console.log(searchInput.value);
        searchInput.value = "";
    }
});