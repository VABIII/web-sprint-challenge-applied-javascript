import axios from "axios";

const Card = (article) => {

    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const img_container = document.createElement("div");
    const author_photo = document.createElement("img");
    const author_name = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    headline.textContent = article.headline;
    author.classList.add("author");
    img_container.classList.add("img-container");
    author_photo.src = article.authorPhoto;
    author_name.textContent = `By ${article.authorName}`;

    card.append(headline, author);
    author.append(img_container, author_name);
    img_container.appendChild(author_photo);

    card.addEventListener("click", () => console.log(article.headline));

    return card
}
const cardAppender = (selector) => {
    return (
        axios.get(`http://localhost:5000/api/articles`)
            .then(res => {
                const card_append = document.querySelector(selector);

                const art_boot = res.data.articles.bootstrap;
                art_boot.forEach(art => {
                    card_append.appendChild(Card(art))
                })
                const art_java = res.data.articles.javascript;
                art_java.forEach(art => {
                    card_append.appendChild(Card(art))
                })
                const art_node = res.data.articles.node;
                art_node.forEach(art => {
                    card_append.appendChild(Card(art))
                })
                const art_tech = res.data.articles.technology;
                art_tech.forEach(art => {
                    card_append.appendChild(Card(art))
                })
                const art_jq = res.data.articles.jquery;
                art_jq.forEach(art => {
                    card_append.appendChild(Card(art));
                })
            }).catch(err => console.error(err))
    )
}

export { Card, cardAppender }
// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//
// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//



