function fetchBooks() {
fetch('https://anapioficeandfire.com/api/books')
.then(response => response.json())
.then(json => console.log(json))
// To pass the tests, don't forget to return your fetch!
  
}

