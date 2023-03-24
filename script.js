function mudaTema() {
     document.body.classList.toggle("dark");
}

const botao = document.querySelector("#tema");

botao.addEventListener('click', function() {
     mudaTema();
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    mudaTema();
};