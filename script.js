function mudaTema() {
  document.body.classList.toggle("dark");
};

const botao = document.querySelector("#tema");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    mudaTema();
};

botao.addEventListener("click", function () {
  mudaTema();
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    const isDarkMode = e.matches;
    if (isDarkMode) {
        mudaTema();
    } else {
        mudaTema();
    }
});
