document.addEventListener("DOMContentLoaded", () => {
    const savedStyle = localStorage.getItem("stylesheet");
    const link = document.getElementById("style");

    if (savedStyle && link) {
        link.setAttribute("href", savedStyle);
    }
});

function changeStyle() {
    const link = document.getElementById("style");

    const href = link.getAttribute("href");
    let newHref;

    if (href.includes("style1.css")) {
        newHref = href.replace("style1.css", "style2.css");
    } else if (href.includes("style2.css")) {
        newHref = href.replace("style2.css", "style1.css");
    }

    if (newHref) {
        link.setAttribute("href", newHref);
        localStorage.setItem("stylesheet", newHref);
    }
}

function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('show');
}