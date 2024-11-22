import { generateTextboxes } from "/scripts/textbox.js"
import { generateGrid } from "/scripts/grid.js"
import { generateChangelog } from "/scripts/upcoming.js"

document.addEventListener('DOMContentLoaded', () => {
    const sillymessages = ["demo 2 deserves a whole website of its own", "at this point my website should be called lost timelines the way more than half of it is about demo 2", "remember when i said demo 2 deserved its own website for unused content"]
    const sillymessage = sillymessages[Math.floor(Math.random() * sillymessages.length)];
    document.querySelector('header').innerHTML = 
    `<h1>DF: Lost Timelines</h1>
    <p style="color: var(--hflyer)">"${sillymessage}" -hflyer</p>
    <hr>
    <a href="index.html">Home</a><span style="float:right"><a href="about.html">About</a> | <a href="changelog.html">Changelog</a> | <a href="https://discord.gg/gCJgc83N" target="_blank">Discord</a> | <a href="/index.html" style="color:skyblue;">Switch to Lost Memories</a></span>
    <hr>`

    document.querySelector('footer').innerHTML =
    `<hr>
    <p>Website by <span style="color: var(--hflyer)">hflyer</span> | Based on <a style="color: var(--moriyx)" href="https://dfc-moriyx.neocities.org/" target="_blank">DFC MORIYX</a> | Not affiliated with <span style="color: var(--rickyg)">RickyG</span> and the <span style="color: var(--chapter1)">DONTFORGET</span> team</p>`
    generateTextboxes()
    generateGrid(true)
    generateChangelog()
})