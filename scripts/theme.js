document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("theme") == "light") {
        theme(1)
    } else if (localStorage.getItem("theme") == "dark") {
        theme(0)
    }
})
function toggleTheme() {
    if (document.documentElement.getAttribute("data-theme") == "light") {
        theme(0)
    } else {
        theme(1)
    }
}
function theme(t) {
   if (t == 0) {
        localStorage.setItem("theme", "dark")
        document.documentElement.setAttribute("data-theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
        document.documentElement.setAttribute("data-theme", "light")
    }
}