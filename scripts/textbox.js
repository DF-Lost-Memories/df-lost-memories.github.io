export function generateTextboxes() {
    const textboxes = document.querySelectorAll(".textbox")
    textboxes.forEach(textbox => {
        textbox.src = `https://demirramon.com/utgen.png?message=${encodeURIComponent(textbox.dataset.text)}&size=2`
        textbox.src = textbox.src.replace("%5Cn", "%0A")
        textbox.alt = textbox.dataset.text.replace("\n", " * ")
    })
}