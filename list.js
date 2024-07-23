document.addEventListener('DOMContentLoaded', () => {
    generateList(document.querySelector("#toggle-subarticles").checked)
})

export function generateList(subarticles = false) {
    const table = document.querySelector('.list-columns')
    fetch('assets/articles/articles.json')
        .then(response => response.json())
        .then(articles => {
            articles.forEach(article => {
                if ("subarticles" in article && subarticles) {
                    article.subarticles.forEach(subarticle => {
                        generateListArticle(subarticle, article.title)
                    })
                } else {
                    generateListArticle(article)
                }
            })
        })
        .catch(error => console.error('Error fetching articles: ', error))
}

function generateListArticle(article, mainName = "") {
    const link = document.createElement("a")
    link.href = `article.html?id=${article.id}`
    link.innerHTML = article.title
    if (mainName != "")
        link.title = `From "${mainName}"`
    document.querySelector(`.${article.category}`).appendChild(link)
    document.querySelector(`.${article.category}`).appendChild(document.createElement("br"))
}