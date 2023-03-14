function mudaTema() {
     document.body.classList.toggle("dark");
}

const botao = document.querySelector("#tema");

botao.addEventListener('click', function() {
     mudaTema();
})