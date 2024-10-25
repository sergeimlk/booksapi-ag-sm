const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const apiKey = 'AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90';
const resultsDiv = document.getElementById("results");

async function getBooks(searchUser) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchUser}&key=${apiKey}`
        );
        const data = await response.json();

        if (response.ok) {
            let books = data.items;
            if (books && books.length > 0) {
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
                resultsDiv.innerHTML = output;
            } else {
                resultsDiv.innerHTML = '<p>Aucun livre trouvé.</p>';
            }
        } else {
            console.error('Erreur de l\'API:', data.error.message);
            resultsDiv.innerHTML = '<p>Erreur lors de la récupération des données. Veuillez réessayer.</p>';
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
        resultsDiv.innerHTML = '<p>Erreur lors de la récupération des données. Veuillez réessayer.</p>';
    } finally {
        // Remove loading state if implemented
    }
}

searchBtn.addEventListener('click', handleSearch);
            searchInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    handleSearch();
                }
            });

// Optional: Debounce for input change event
let timeout = null;
searchInput.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const searchUser = searchInput.value.trim();
        if (searchUser) {
            resultsDiv.innerHTML = '<p>Chargement...</p>'; // Loading state
            getBooks(searchUser);
        }
    }, 500); // Adjust debounce delay as needed
});
