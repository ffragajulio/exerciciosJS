const nome = document.getElementById("nome");
const button = document.querySelector(".button");


button.addEventListener('click', function() {
    alert("O Nome completo é " + nome.value)
    const size = nome.length;
    console.log("e tem " + size.value + " caracteres")
});
console.log(nome)