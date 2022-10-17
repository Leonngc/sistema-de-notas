//alert("Olá usuário! Esse é o nosso sistema de notas, insira suas notas e mostraremos sua média e se você passou ou reprovou.")

const formu = document.getElementById('formu')
const name = document.getElementById('nome').value
const classroom = document.getElementById('turma').value
const matters = document.getElementsByName('materia').value
 let nota1 = document.getElementById('nota1')
  let nota2 = document.getElementById('nota2')
let nota3 = document.getElementById('nota3')
let nota4 = document.getElementById('nota4')


formu.addEventListener("submit", (e) => {
    e.preventDefault()

    validationNotes()
})
function validationNotes(){
    let nota1Value = Number(nota1.value)
    let nota2Value = Number(nota2.value)
    let nota3Value = Number(nota3.value)
    let nota4Value = Number(nota4.value)
    //FAZER APARECER A MÉDIA E DIZER SE FOI APROVADO OU REPROVADO
}

