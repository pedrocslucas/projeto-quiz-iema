const lista_perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7"];
const total = lista_perguntas.length;

function show_number_question(){
    let atual_question = question();
    let resp = document.getElementById('number-question');
    resp.innerHTML = `<p>${atual_question} / ${total}</p>`
}

function question(){
    let atual_question = lista_perguntas[0];
    return lista_perguntas.indexOf(atual_question) + 1;
}

function success(){

}

function wrong(){

}