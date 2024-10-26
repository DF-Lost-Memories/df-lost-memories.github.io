import { generateTextboxes } from "/scripts/textbox.js";

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    let articleJSON
    await getArticleFromID(id).then(json => {
        articleJSON = json
    })
    document.title = `${articleJSON.title} | ${articleJSON.demo2only ? "Lost Timelines": "Lost Memories"}`
    const articleContainer = document.querySelector('.article-container')
    fetch(`/assets/articles/${id}/${id}.html`)
        .then(response => response.text())
        .then(article => {
            articleContainer.innerHTML = ""
            articleContainer.appendChild(generateFullHeader(articleJSON))
            articleContainer.innerHTML += article
            const media = document.querySelectorAll("img:not(.textbox), video, audio")
            media.forEach(element => {
                element.src = `/assets/articles/${id}/${getsrc(element.src)}`
            })
            generateTextboxes()
        })
})

function getsrc(url) {
    return url.split("/")[url.split("/").length - 1]
}

async function getArticleFromID(id) {
    return fetch('/assets/articles/articles.json')
        .then(response => response.json())
        .then(async articles => {
            let articleJSON = null;
            articles.forEach(article => {
                if (article.id == id) {
                    articleJSON = article;
                }
            });
            return articleJSON;
        })
}

function generateFullHeader(article) {
    const center = document.createElement("center")
    center.innerHTML = `<h1>${article.title}</h1><hr>`
    const text = document.createElement("p")
    text.appendChild(generateCategoryHeader(article.category))
    if ("firstVersion" in article) {
        text.innerHTML += " | "
        text.appendChild(generateVersionsHeader(article.firstVersion, article.lastVersion))
    }
    if ("access" in article) {  
        text.innerHTML += " | "
        text.appendChild(generateAccessHeader(article.access))
    }
    center.appendChild(text)
    center.innerHTML += "<hr>"
    return center
}

function generateAccessHeader(access) {
    const acc = document.createElement("span")
    acc.innerHTML = `Access method${access.length > 1 ? "s" : ""}: `
    access.forEach((method, i) => {
        const methodSpan = document.createElement("span")
        methodSpan.innerHTML = method
        let title = ""
        switch (methodSpan.innerHTML) {
            case "Noclip":
                title = "Noclipping in a certain room, using the editor feature in v2.6.0+ or using Cheat Engine."
                break
            case "Save Editing":
                title = "Editing an offline save file in %localappdata%, to go to an inaccessible room or otherwise modify stats."
                break
            case "Map Editor":
                title = "Editing a .dfmap file to include a specific asset ID."
                break
            case "Glitch":
                title = "Taking advantage of an bug or oversight in the game."
                break
            case "Modding":
                title = "Modifying or looking through the game's data file to find content that can't be accessed through other methods.\nThis is only acceptable for Demo 2, and mods are not to be distributed."
                break
        }
        methodSpan.title = title
        acc.appendChild(methodSpan)
        if (i != access.length - 1)
            acc.innerHTML += ", "
    });
    return acc
}

function generateVersionsHeader(first, last) {
    const ver = document.createElement("span")
    ver.innerHTML = `Earliest known version: ${first} | Latest known version: ${last}`
    return ver
}

function generateCategoryHeader(category) {
    const cat = document.createElement("span")
    cat.innerHTML = "Unused content from "
    let vers = ""
    let name = ""
    switch (category) {
        case "chapter1":
            vers = "v1.0.0 - v1.3.3"
            name = "Chapter 1" 
            break
        case "olddfc":
            vers = "v2.0.0 - v2.4.3b"
            name = "Old DF CONNECTED"
            break
        case "newdfc":
            vers = "v2.5.0 - v2.7.12"
            name = "New DF CONNECTED" 
            break
        case "demo2":
            vers = "v0.1.0 - v0.1.5"
            name = "Demo 2" 
            break
    }
    cat.innerHTML += `<span style="color: var(--${category})" title="${vers}">${name}</span>`
    return cat
}