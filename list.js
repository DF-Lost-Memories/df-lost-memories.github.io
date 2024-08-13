export function generateList() {
    fetch('/assets/articles/articles.json')
        .then(response => response.json())
        .then(articles => {
            articles.forEach(article => {
                if (!article.demo2only)
                    generateListArticle(article)
            })
        })
        .catch(error => console.error('Error fetching articles: ', error))
}

function generateListArticle(article) {
    const link = document.createElement("a")
    link.href = `article.html?id=${article.id}`
    link.innerHTML = article.title
    document.querySelector(`.${article.category}`).appendChild(link)
    document.querySelector(`.${article.category}`).appendChild(document.createElement("br"))
}