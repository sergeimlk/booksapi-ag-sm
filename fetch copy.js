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
            let output = "";
            books.forEach(book => {
                output += `
                <div class="book-item">
                    <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/100'}" alt="${book.volumeInfo.title}">
                    <h2>${book.volumeInfo.title}</h2>
                    <p>Auteur(s): ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p>
                    <p>Description: ${book.volumeInfo.description ? book.volumeInfo.description : 'Pas de description disponible'}</p>
                </div>
                `;
            });
            document.getElementById("results").innerHTML = output;
        } else {
            console.error('Erreur de l\'API:', data.error.message);
        }
        console.log(data);
        afficherResultats(data);
    } catch (error) {
        console.error(error);
    }
}

function afficherResultats(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    data.items.forEach(item => {
        const book = item.volumeInfo;
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-item');
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>Auteur(s): ${book.authors ? book.authors.join(', ') : 'N/A'}</p>
            <p>Description: ${book.description ? book.description : 'Pas de description disponible'}</p>
        `;
        resultsDiv.appendChild(bookDiv);
    });
}

function handleSearch() {
    getBooks(searchInput.value);
    console.log(searchInput.value);
    searchInput.value = "";
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});