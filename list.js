document.addEventListener('DOMContentLoaded', () => {
    // generateList(document.querySelector("#toggle-subarticles").checked)
    generateList(false)
})

export function generateList(subarticles = false) {
    fetch('assets/articles/articles.json')
        .then(response => response.json())
        .then(articles => {
            articles.forEach(article => {
                if ("subarticles" in article && subarticles) {
                    article.subarticles.forEach(subarticle => {
                        generateListArticle(subarticle, article.title, article.id)
                    })
                } else {
                    generateListArticle(article)
                }
            })
        })
        .catch(error => console.error('Error fetching articles: ', error))
}

function generateListArticle(article, mainName = "", mainID = "") {
    const link = document.createElement("a")
    link.href = `article.html?id=${article.id}`
    if (mainID != "")
        link.href+= `&main=${mainID}`
    link.innerHTML = article.title
    if (mainName != "")
        link.title = `From "${mainName}"`
    document.querySelector(`.${article.category}`).appendChild(link)
    document.querySelector(`.${article.category}`).appendChild(document.createElement("br"))
}