const lista_perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7"];
const total = Number(lista_perguntas.length);
const container = document.getElementById('content');

let resp = document.getElementById('number-question');
let index_question = get_question();

resp.innerHTML = `<p>${index_question} / ${total}</p>`;

function get_text_question(){
    const question = String(document.getElementById('question').textContent);
    return question;
}

function get_question(){
    let id_pergunta;
    for (let i = 0; i < lista_perguntas.length; i++) {
        const pergunta = lista_perguntas[i];
        if(pergunta === get_text_question()){
            id_pergunta = Number(i + 1);
            break;
        }
    }
    return id_pergunta;
}

function next(){
    container.style.border = 'none';
    let new_id = get_question();
    let content_question = document.getElementById('container-question');
    if(new_id === total){
        content_question.innerHTML = '<p id="congratulation">Fim da Apresentação<br>!!!Obrigado!!!</p>'
    }else{
        resp.innerHTML = `<p>${new_id+1} / ${total}</p>`
        content_question.innerHTML = `<p id="question">${lista_perguntas[new_id]}</p>`
    }
}

function correct(){
    container.style.border = '3px solid rgb(60, 160, 60)';
}

function wrong(){
    container.style.border = '3px solid rgb(230, 60, 60)';
}