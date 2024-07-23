document.addEventListener('DOMContentLoaded', () => {
    if (location.href.split("/").slice(-1)[0].split("?")[0] != "article.html")
        generateGrid(undefined, document.querySelector("#toggle-subarticles").checked)
})

export async function generateGrid(list, subarticles = false) {
    const grid = document.querySelector('.grid-container')
    let _articles
    if (list == undefined) {
        _articles = await fetch('assets/articles/articles.json')
            .then(response => response.json())
            .catch(error => console.error('Error fetching articles: ', error))
    } else {
        _articles = list
    }
    _articles.slice().reverse().forEach(article => {
        if ("subarticles" in article && subarticles) {
            article.subarticles.slice().reverse().forEach(subarticle => {
                generateGridArticle(subarticle, grid, article.title)
            })
        } else {
            generateGridArticle(article, grid)
        }
    })
}
function generateGridArticle(article, grid, mainName = "") {
    const gridArticle = document.createElement("a")
    gridArticle.className = "grid-article"
    gridArticle.href = `article.html?id=${article.id}`
    gridArticle.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(`--${article.category}`);
    gridArticle.innerHTML = 
    `
    <img src="assets/articles/${article.id}/thumbnail.png">
    <h3>${article.title}${mainName == "" ? "" : "<br>(from \"" + mainName + "\")"}</h3>
    <p>${article.description}</p>
    `
    grid.appendChild(gridArticle)
}