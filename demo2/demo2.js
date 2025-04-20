import { generateTextboxes } from "/scripts/textbox.js"
import { generateGrid } from "/scripts/grid.js"
import { generateChangelog } from "/scripts/upcoming.js"

document.addEventListener('DOMContentLoaded', () => {
    const sillymessages = ["demo 2 deserves a whole website of its own", "at this point my website should be called lost timelines the way more than half of it is about demo 2", "remember when i said demo 2 deserved its own website for unused content"]
    const sillymessage = sillymessages[Math.floor(Math.random() * sillymessages.length)];
    document.querySelector('header').innerHTML = 
    `<center><h1>DF: Lost Timelines</h1>
    <p style="color: var(--hflyer)">"${sillymessage}" -hflyer</p>
    <nav>
    <a href="index.html" class="purple">Home</a> <a href="about.html" class="right purple">About</a> <a href="changelog.html" class="purple">Changelog</a> <a href="https://discord.gg/BufyX2gqkq" target="_blank" class="purple">Discord</a> <a href="javascript:toggleTheme()" class="purple">Change Theme</a> <a href="/index.html">Lost Memories</a></span>
    </nav>
    </center>`

    document.querySelector('footer').innerHTML =
    `<hr>
    <p>Website by <span style="color: var(--hflyer)">hflyer</span> | Based on <a style="color: var(--moriyx)" href="https://dfc-moriyx.neocities.org/" target="_blank">DFC MORIYX</a> | Not affiliated with <span style="color: var(--rickyg)">RickyG</span> and the <span style="color: var(--chapter1)">DONTFORGET</span> team</p>`
    generateTextboxes()
    generateGrid(true)
    generateChangelog()
})