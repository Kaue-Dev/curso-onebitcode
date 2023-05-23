export function themeSwitch() {
    const main = document.querySelector("main")
    const root = document.querySelector(":root")
    //Se a tag main possuir o data-theme="dark" irá alterar a cor dos elementos através do :root e também ira definir o data-theme="light"
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#FFF")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#121212")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--bg-color", "#121212")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#FFF")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
    }
}