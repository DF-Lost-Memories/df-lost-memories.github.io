import { generateGrid } from "/scripts/grid.js"
import { generateList } from "/scripts/list.js"
import { generateTextboxes } from "/scripts/textbox.js"
import { generateUpcoming, generateChangelog } from "/scripts/upcoming.js"

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').innerHTML = 
    `<h1>DF: Lost Memories</h1>
    <p>DONTFORGET's cutting room floor</p>
    <hr>
    <a href="index.html">Home</a> | <a href="list.html">Unused Content List</a> | <a href="resources.html">Resources</a> | <a href="upcoming.html">Upcoming Articles</a><span style="float:right"><a href="about.html">About</a> | <a href="changelog.html">Changelog</a> | <a href="https://discord.gg/gCJgc83N" target="_blank">Discord</a> | <a href="/demo2/index.html" style="color:var(--demo2);">Switch to Lost Timelines</a></span>
    <hr>`

    document.querySelector('footer').innerHTML =
    `<hr>
    <p>Website by <span style="color: var(--hflyer)">hflyer</span> | Inspired by <a style="color: var(--moriyx)" href="https://dfc-moriyx.neocities.org/" target="_blank">DFC MORIYX</a> | Not affiliated with <span style="color: var(--rickyg)">RickyG</span> and the <span style="color: var(--chapter1)">DONTFORGET</span> team</p>`
    generateTextboxes()
    generateGrid()
    generateList()
    generateUpcoming()
    generateChangelog()
})