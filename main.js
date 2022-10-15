//alert("Olá usuário! Esse é o nosso sistema de notas, insira suas notas e mostraremos sua média e se você passou ou reprovou.")
const formu = document.getElementById('formu').onsubmit()
    
formu.addEventListener('submit', (e) =>{
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    let nome_do_aluno = document.querySelector('input#nome').value 
    let turma = document.querySelector('input#turma').value 
    let nota1 = document.querySelector('input#nota1').value 
    let nota2 = document.querySelector('input#nota2').value 
    let nota3 = document.querySelector('input#nota3').value 
    let nota4 = document.querySelector('input#nota4').value 

    if(nome_do_aluno.length == '2'){
        alert("Preencha os dados completos")
    }
}

