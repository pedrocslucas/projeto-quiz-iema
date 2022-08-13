const lista_perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7"];
const total = Number(lista_perguntas.length);
const container = document.getElementById('content');

let index_question = question();
let resp = document.getElementById('number-question');
resp.innerHTML = `<p>${index_question} / ${total}</p>`

function question(){
    let atual_question = lista_perguntas[0];
    return lista_perguntas.indexOf(atual_question) + 1;
}

function next(){
    container.style.border = 'none';
    let id_question = Number(index_question);
    let show_question = document.getElementById('question');
    if(id_question != total) {
        show_question.innerHTML = `<p>${lista_perguntas[id_question]}</p>`
    }else {
        show_question.innerHTML = '<p id="congratulations">Fim do Quiz, Obrigado!</p>';
    }
}

function correct(){
    container.style.border = '3px solid rgb(60, 160, 60)';
}

function wrong(){
    container.style.border = '3px solid rgb(230, 60, 60)';
}