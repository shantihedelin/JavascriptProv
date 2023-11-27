// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

const postsElement = document.createElement("div");
document.body.appendChild(postsElement);

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const filteredData = data.filter((userID) => userID = 1);

filteredData.forEach((posts) => {
    const postEl = document.createElement("div");
    postElement.appendChild(postEl);

    fetchData();

}

/*const filteredData = data.filter((posts) => posts.userID == 1);
filteredData.forEach((posts) => {
    const postsContainer = document.createElement("div");
    postsContainer.classList.add("posts-container");
})
*/






// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments

    
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

}

async function fetchComment() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const commentData = await response.json();

}
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId
