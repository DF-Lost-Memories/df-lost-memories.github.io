export function generateTextboxes() {
    const textboxes = document.querySelectorAll(".textbox")
    textboxes.forEach(textbox => {
        textbox.src = `https://demirramon.com/utgen.png?message=${encodeURIComponent(textbox.dataset.text)}&size=2`
        textbox.src = textbox.src.replace("%5Cn", "%0A")
        textbox.alt = textbox.dataset.text.replace("\n", " * ")
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').innerHTML = 
    `<h1>DF: Lost Memories</h1>
    <p>DF CONNECTED's cutting room floor</p>
    <hr>
    <a href="index.html">Home</a> | <a href="list.html">Unused Content List</a> | <a href="resources.html">Resources</a> | <a href="about.html">About</a>
    <hr>`

    document.querySelector('footer').innerHTML =
    `<hr>
    <p>Website by <span style="color: var(--hflyer)">hflyer</span> | Based on <a style="color: var(--moriyx)" href="https://dfc-moriyx.neocities.org/" target="_blank">DFC MORIYX</a> | Not affiliated with <span style="color: var(--rickyg)">RickyG</span> and the <span style="color: var(--chapter1)">DONTFORGET</span> team</p>`
    generateTextboxes()
})