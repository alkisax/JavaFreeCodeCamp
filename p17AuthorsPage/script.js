const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

// There is a method called fetch that allows code to receive data from an API by sending a GET request.
// Here is how you can make a GET request with the fetch() method:
// fetch("url-goes-here")
// The fetch() method returns a Promise, which is a placeholder object that will either be fulfilled if your request is successful, or rejected if your request is unsuccessful.
// If the Promise is fulfilled, it resolves to a Response object, and you can use the .then() method to access the Response.
// Here's how you can chain .then() to the fetch() method:
// fetch("sample-url-goes-here")
//   .then((res) => res)
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  })
  .catch((err) => {
    // console.error(`There was an error: ${err}`);
    authorContainer.innerHTML = `<p class="error-msg">There was an error loading the authors</p>`
  })

  const fetchMoreAuthors = () => {
    startingIndex += 8;
    endingIndex += 8;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex)); 
    if (authorDataArr.length <= endingIndex) {
      loadMoreBtn.textContent = "No more data to load";
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.cursor = "not-allowed";
    }
  };

  const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio }, index) => {
      authorContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="author-name">${author}</h2>
        <img class="user-img" src="${image}" alt="${author} avatar"
        <div class="purple-divider"></div>
        <p class="bio">${bio.length > 50 ? bio.slice(0,50) + "..." : bio}</p>
        <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
      </div>
    `;
    });
  };

  loadMoreBtn.addEventListener("click", fetchMoreAuthors);