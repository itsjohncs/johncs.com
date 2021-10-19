function handleToggleColorSchemeClick(event) {
    const moon = event.currentTarget.getElementsByClassName("moon")[0];
    if (moon) {
        const style = window.getComputedStyle(moon);
        if (style.getPropertyValue("display") === "none") {
            document.body.classList.add("override-dark");
            document.body.classList.remove("override-light");
        } else {
            document.body.classList.remove("override-dark");
            document.body.classList.add("override-light");
        }
    }
}

(document.getElementById("color-scheme-toggle")
         .addEventListener("click", handleToggleColorSchemeClick))
