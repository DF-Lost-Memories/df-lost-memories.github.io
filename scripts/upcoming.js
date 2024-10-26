export async function generateUpcoming() {
    const grid = document.querySelector('.grid-container')
    let _articles = await fetch('/assets/articles/articles-upcoming.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching articles: ', error))
    _articles.reverse().forEach(article => {
        if (article.demo2only == undefined)
            article.demo2only = false
        if (article.demo2only)
            generateUpcomingItem(article, document.querySelector(".upcoming-demo2"))
        else
            generateUpcomingItem(article, document.querySelector(".upcoming"))
    })
}
function generateUpcomingItem(article, list) {
    list.innerHTML += 
    `
    <li><span style="color: var(--${article.category})">${article.title}</span> - ${article.description}</li>
    `
}