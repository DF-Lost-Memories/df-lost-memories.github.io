document.addEventListener('DOMContentLoaded', () => {
    if (location.href.split("/").slice(-1)[0].split("?")[0] != "article.html")
        generateGrid(undefined, document.querySelector("#toggle-subarticles").checked)
})

export async function generateGrid(main, subarticles = false) {
    const grid = document.querySelector('.grid-container')
    let _articles
    if (main == undefined) {
        _articles = await fetch('assets/articles/articles.json')
            .then(response => response.json())
            .catch(error => console.error('Error fetching articles: ', error))
    } else {
        _articles = main.subarticles
    }
    let articlesOrdered = _articles.slice()
    if (main != undefined)
        articlesOrdered = articlesOrdered.reverse()
    articlesOrdered.reverse().forEach(article => {
        if ("subarticles" in article && subarticles) {
            article.subarticles.slice().reverse().forEach(subarticle => {
                generateGridArticle(subarticle, grid, article.title, article.id)
            })
        } else if (main != undefined) {
            generateGridArticle(article, grid, "", main.id)
        } else {
            generateGridArticle(article, grid)
        }
    })
}
function generateGridArticle(article, grid, mainName = "", mainID = "") {
    const gridArticle = document.createElement("a")
    gridArticle.className = "grid-article"
    gridArticle.href = `article.html?id=${article.id}`
    if (mainID != "")
        gridArticle.href+= `&main=${mainID}`
    gridArticle.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(`--${article.category}`);
    gridArticle.innerHTML = `<img src="assets/articles/${article.id}/thumbnail.png">`
    if (mainID != "")
        gridArticle.innerHTML = `<img src="assets/articles/${mainID}/${article.id}/thumbnail.png">`
    gridArticle.innerHTML += 
    `
    <h3>${article.title}${mainName == "" ? "" : "<br>(from \"" + mainName + "\")"}</h3>
    <p>${article.description}</p>
    `
    grid.appendChild(gridArticle)
}