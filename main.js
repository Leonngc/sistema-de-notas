//alert("Olá usuário! Esse é o nosso sistema de notas, insira suas notas e mostraremos sua média e se você passou ou reprovou.")

const formu = document.getElementById('formu')

let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let nota3 = document.getElementById('nota3')
let nota4 = document.getElementById('nota4')


formu.addEventListener("submit", (e) => {
    e.preventDefault()

    validationNotes()
})
function validationNotes() {
    let nota1Value = Number(nota1.value)
    let nota2Value = Number(nota2.value)
    let nota3Value = Number(nota3.value)
    let nota4Value = Number(nota4.value)

    let radMatters = document.getElementsByName('materia')

    const name = document.getElementById('nome').value
    const classroom = document.getElementById('turma').value
    const mattersRad = document.getElementsByName('materia')

    let somaDasNotas = nota1Value + nota2Value + nota3Value + nota4Value
    let mediaDasNotas = somaDasNotas / 4

    let res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'img')


    //PORTUGUÊS
    if (mattersRad[0].checked) {
        if (mediaDasNotas < 7 && mediaDasNotas > 0) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é menor que 7. <br> Você está reprovado em português.`

            img.setAttribute('src', 'img/reprovado_pequeno.png')

        } else if (mediaDasNotas == 0) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é menor que 7. <br> Você foi reprovado em português com 0% de aproveitamento. <br> Favor, se esforçar mais no próximo ano`

            img.setAttribute('src', 'img/reprovado_pequeno.png')

        } else if (mediaDasNotas >= 7 && mediaDasNotas < 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você foi aprovado em português.`

            img.setAttribute('src', 'img/aprovado_pequeno.png')

        } else if (mediaDasNotas == 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você foi aprovado em Português com 100% de aproveitamento. <br> Meus sinceros parabéns.`

            img.setAttribute('src', 'img/aprovado_pequeno.png')
        }
        else if (mediaDasNotas == 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você foi aprovado em português com 100% de aproveitamento. <br> Meus sinceros parabéns.`

            img.setAttribute('src', 'img/aprovado_pequeno.png')
        }
    }


    //MATEMÁTICA
    if (mattersRad[1].checked) {
        if (mediaDasNotas < 7 && mediaDasNotas > 0) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é menor que 7. <br> Você foi reprovado em Matemática.`

            img.setAttribute('src', 'img/reprovado_pequeno.png')
        } else if (mediaDasNotas == 0) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é menor que 7. <br> Você foi reprovado em Matemática com 0% de aproveitamento. <br> Favor, se esforçar mais no próximo ano`

            img.setAttribute('src', 'img/reprovado_pequeno.png')

        } else if (mediaDasNotas > 7 && mediaDasNotas < 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você foi aprovado em Matemática. <br> Parabéns`

            img.setAttribute('src', 'img/aprovado_pequeno.png')

        } else if (mediaDasNotas == 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você foi aprovado em Matemática com 100% de aproveitamento. <br> Meus sinceros parabéns.`

            img.setAttribute('src', 'img/aprovado_pequeno.png')

        }
    }


    //HISTÓRIA
    if (mattersRad[2].checked) {
        if (mediaDasNotas < 7 && mediaDasNotas > 0) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é menor que 7. <br> Você está reprovado em História.`

            img.setAttribute('src', 'img/reprovado_pequeno.png')

        } else if (mediaDasNotas == 0) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é menor que 7. <br> Você foi reprovado em História com 0% de aproveitamento. <br> Favor, se esforçar mais no próximo ano.`

            img.setAttribute('src', 'img/reprovado_pequeno.png')

        } else if (mediaDasNotas > 7 && mediaDasNotas < 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você está aprovado em História. <br> Parabéns.`

            img.setAttribute('src', 'img/aprovado_pequeno.png')

        } else if (mediaDasNotas == 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você foi aprovado em História com 100% de aproveitamento. <br> Meus sinceros parabéns.`

            img.setAttribute('src', 'img/aprovado_pequeno.png')

        }


        //GEOGRAFIA
    } if (radMatters[3].checked) {
        if (mediaDasNotas < 7 && mediaDasNotas > 0) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é menor que 7. <br> Você está reprovado em Geografia.`

            img.setAttribute('src', 'img/reprovado_pequeno.png')

        } else if (mediaDasNotas == 0) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é menor que 7. <br> Você foi reprovado com 0% de aproveitamento em Geografia. <br> Favor, se esforçar mais no próximo ano.`

            img.setAttribute('src', 'img/reprovado_pequeno.png')

        } else if (mediaDasNotas > 7 && mediaDasNotas < 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você está aprovado em Geografia. <br> Parabéns`

            img.setAttribute('src', 'img/aprovado_pequeno.png')

        } else if (mediaDasNotas == 10) {
            res.innerHTML = `Olá ${name}! Sua média ${mediaDasNotas} é maior que 7. <br> Você foi aprovado em Geografia com 100% de aproveitamento. <br> Meus sinceros parabéns`

            img.setAttribute('src', 'img/aprovado_pequeno.png')


        }

    }


    res.appendChild(img)
}
