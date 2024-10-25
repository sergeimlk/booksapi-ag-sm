const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const apiKey = 'AIzaSyDQrL0-MwiXKvSdzTr6E5KtVcanozHoG90';
// const search = 'harry potter';

async function getBooks(searchUser) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchUser}&key=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}

getBooks();

searchBtn.addEventListener("click", function () {
    getBooks(searchInput.value);
    console.log(searchInput.value);
    searchInput.value = "";
})

searchBtn.addEventListener("keypress", function () {
    getBooks(searchInput.value);
    console.log(searchInput.value);
    searchInput.value = "";

})