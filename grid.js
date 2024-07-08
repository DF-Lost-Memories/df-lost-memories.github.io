document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid-container')
    fetch('assets/articles/articles.json')
        .then(response => response.json())
        .then(articles => {
            articles.slice().reverse().forEach(article => {
                const gridArticle = document.createElement("a")
                gridArticle.className = "grid-article"
                gridArticle.href = `article.html?id=${article.id}`
                gridArticle.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(`--${article.category}`);
                gridArticle.innerHTML = 
                `
                <img src="assets/articles/${article.id}/thumbnail.png">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                `
                grid.appendChild(gridArticle)
            })
        })
        .catch(error => console.error('Error fetching articles: ', error))
})