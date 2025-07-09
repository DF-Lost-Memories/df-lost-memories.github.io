import { generateGrid } from "/scripts/grid.js"
import { generateList } from "/scripts/list.js"
import { generateTextboxes } from "/scripts/textbox.js"
import { generateUpcoming, generateChangelog } from "/scripts/upcoming.js"

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("theme") == "light") {
        theme(1)
    } else if (localStorage.getItem("theme") == "dark") {
        theme(0)
    }
    if (document.querySelector('.latest-ver') != null)
        document.querySelector('.latest-ver').innerHTML = "v2.7.15"
    document.querySelector('header').innerHTML = 
    `<center><h1>DF: Lost Memories</h1>
    <p>DONTFORGET's cutting room floor</p>
    <nav>
    <a href="index.html">Home</a> <a href="list.html">Unused Content List</a> <a href="resources.html">Resources</a> <a href="upcoming.html">Upcoming Articles</a> <a href="about.html" class="right">About</a> <a href="changelog.html">Changelog</a> <a href="https://discord.gg/BufyX2gqkq" target="_blank">Discord</a> <a href="javascript:toggleTheme()">Change Theme</a> <a href="/demo2/index.html" class="purple">Lost Timelines</a>
    </nav>
    </center>`

    document.querySelector('footer').innerHTML =
    `<hr>
    <p>Website by <span style="color: var(--hflyer)">hflyer</span> | Inspired by <a style="color: var(--moriyx)" href="https://dfc-moriyx.neocities.org/" target="_blank">DFC MORIYX</a> | Not affiliated with <span style="color: var(--rickyg)">RickyG</span> and the <span style="color: var(--chapter1)">DONTFORGET</span> team</p>`
    generateTextboxes()
    generateGrid()
    generateList()
    generateUpcoming()
    generateChangelog()
})