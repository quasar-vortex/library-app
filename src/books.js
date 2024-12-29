import data from "./books.json";

export function mapBooks(array) {
  return array
    .map(
      (item) => `
  <div class="book">
    <div class="book-img">
      <img src="${item.imgUrl}"/>
    </div>
    <div class="book-info">
      <h3>${item.title}</h3>
      <p>${item.author}</p>
    </div>
  </div>
  `
    )
    .join("");
}

function insertBooks(arr) {
  document.querySelector("#booksGrid").innerHTML = mapBooks(arr);
}
export function loadBooks(container) {
  container.innerHTML = `<section class="books-section">
  <div class="books-search">
    <input id="bookSearch" type="text"/>
  </div>
  <div id="booksGrid" class="books-grid">
  
  </div>
</section>`;
  insertBooks(data);
  document.querySelector("#bookSearch").addEventListener("input", (e) => {
    e.preventDefault();
    insertBooks(
      data.filter(
        (item) =>
          item.title
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase()) ||
          item.author
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
      )
    );
  });
}
