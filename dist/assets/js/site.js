const toggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");

if (toggle && navigation) {
    toggle.addEventListener("click", () => {
        const open = navigation.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
    });

    navigation.addEventListener("click", event => {
        if (!(event.target instanceof HTMLAnchorElement)) return;
        navigation.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    });
}

document.querySelectorAll(".code-wrap").forEach(wrapper => {
    const pre = wrapper.querySelector("pre");
    if (!pre) return;

    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code");
    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(pre.innerText);
            button.textContent = "Copied";
            window.setTimeout(() => button.textContent = "Copy", 1500);
        } catch {
            button.textContent = "Select text";
        }
    });
    wrapper.append(button);
});

document.querySelectorAll("[data-year]").forEach(node => {
    node.textContent = String(new Date().getFullYear());
});
