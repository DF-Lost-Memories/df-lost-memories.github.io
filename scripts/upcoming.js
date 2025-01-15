export async function generateChangelog() {
    let _changelog = await fetch('/assets/changelog.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching changelog: ', error))
    _changelog.reverse().forEach((update, i) => {
        // never EVER cook again
        if (i != 0)
            document.querySelector(".changelog").innerHTML += `<hr>`
        document.querySelector(".changelog").innerHTML += `<div class="date-${update.date}"><h2>${update.date} update</h2></div>`
        if ("additions" in update) {
            document.querySelector(`.changelog .date-${update.date}`).innerHTML += 
            `
            <strong>Additions:</strong>
            <ul class="additions">
            </ul>
            `
        }
        if ("changes" in update) {
            document.querySelector(`.changelog .date-${update.date}`).innerHTML += 
            `
            <strong>Changes:</strong>
            <ul class="changes">
            </ul>
            `
        }
        if ("removals" in update) {
            document.querySelector(`.changelog .date-${update.date}`).innerHTML += 
            `
            <strong>Removals:</strong>
            <ul class="removals">
            </ul>
            `
        }
        if ("additions" in update) {
            update.additions.forEach(addition => {
                document.querySelector(`.date-${update.date} .additions`).innerHTML +=
                `<li>${addition}</li>`
            })
        }
        if ("changes" in update) {
            update.changes.forEach(change => {
                document.querySelector(`.date-${update.date} .changes`).innerHTML +=
                `<li>${change}</li>`
            })
        }
        if ("removals" in update) {
            update.removals.forEach(removal => {
                document.querySelector(`.date-${update.date} .removals`).innerHTML +=
                `<li>${removal}</li>`
            })
        }
    })
}

export async function generateUpcoming() {
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
    if (document.querySelector(".upcoming").innerHTML == "")
        document.querySelector(".upcoming").innerHTML += "<li>Nothing yet!</li>"
    if (document.querySelector(".upcoming-demo2").innerHTML == "")
        document.querySelector(".upcoming-demo2").innerHTML += "<li>Nothing yet!</li>"
}
function generateUpcomingItem(article, list) {
    list.innerHTML += 
    `
    <li><span style="color: var(--${article.category})">${article.title}</span> - ${article.description}</li>
    `
}