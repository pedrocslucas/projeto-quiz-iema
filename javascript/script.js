const lista_perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7"];
const total = Number(lista_perguntas.length);
const container = document.getElementById('content');

let resp = document.getElementById('number-question');
let index_question = get_question();

resp.innerHTML = `<p>${index_question} / ${total}</p>`

function get_question(){
    let atual_question;
    let indice;
    const question_show = document.getElementById('question').textContent;
    for (let i = 0; i < lista_perguntas.length; i++) {
        atual_question = lista_perguntas[i];
        if(atual_question === question_show){
            indice = lista_perguntas.indexOf(atual_question) + 1;
            break;
        }
    }
    return indice;
}

function next(){
    container.style.border = 'none';
    let id_question = get_question();
    let show_question = document.getElementById('container-question');
    if(id_question != total) {
        resp.innerHTML = `<p>${id_question} / ${total}</p>`
        show_question.innerHTML = `${lista_perguntas[id_question]}`
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