export async function generateGrid(demo2 = false) {
    const grid = document.querySelector('.grid-container')
    let _articles = await fetch('/assets/articles/articles.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching articles: ', error))
    _articles.reverse().forEach(article => {
        if (article.demo2only == undefined)
            article.demo2only = false
        if (demo2 == article.demo2only)
            generateGridArticle(article, grid)
    })
}
function generateGridArticle(article, grid) {
    const gridArticle = document.createElement("a")
    gridArticle.className = "grid-article"
    gridArticle.href = `article.html?id=${article.id}`
    gridArticle.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(`--${article.category}`);
    gridArticle.innerHTML = `<img src="/assets/articles/${article.id}/thumbnail.png">`
    gridArticle.innerHTML += 
    `
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `
    grid.appendChild(gridArticle)
}