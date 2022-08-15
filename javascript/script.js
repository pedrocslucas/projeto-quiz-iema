const lista_perguntas = ["Quantas vezes devo amamentar?", "Como o bebê deve pegar na mama? (formato da boca)", "Qual a importância da amamentação?", "Quando o leite materno deve ser introduzido?", "Quais os benefícios do leite materno para o desenvolvimento da criança?", "O aleitamento materno exclusivo trás vantagens para as mães!. Cite algumas dessas vantagens.", "Que hormônio é produzido durante a amamentação?", "Qual o tempo mínimo para amamentar?", "Até quando a mãe deve amamentar a criança?", "Devo dar água ao recém nascido,  durante os primeiros 6 meses de amamentação?", "Que tipos de cânceres são previnidos por mulheres que amamentam? Cite 3", "A amamentação exclusiva pode ajudar a espaçar as gestações? Por quê?", "Existe diferença entre o leite inicial  e final da mamada? Se sim explique.", "Como fazer o bebê ganhar peso?"];
const total = Number(lista_perguntas.length);
const container = document.getElementById('content');

let next_question = false;

let img_content = document.getElementById('img-logo');
let img_logo = document.createElement('img');
img_logo.setAttribute('id', 'icon');

let resp = document.getElementById('number-question');
let index_question = get_question();

resp.innerHTML = `<p>${index_question} / ${total}</p>`;

const content_start = document.getElementById('start');
const content_quiz = document.getElementById('quiz')

function comecar(){
    content_start.style.display = 'none';
    content_quiz.style.display = 'inline';
}

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
    img_logo.style.display = 'none';
    if(next_question){
        container.style.border = '3px solid rgb(40, 80, 200)';
        let new_id = get_question();
        let content_question = document.getElementById('container-question');
        if(new_id === total){
            const errado = document.getElementById('error');
            const certo = document.getElementById('success');
            const proxima = document.getElementById('next');
            content_question.innerHTML = '<p id="congratulation">Fim da Apresentação<br>!!!Obrigado!!!</p>'
            errado.style.display = 'none';
            certo.style.display = 'none';
            proxima.style.display = 'none';
        }else{
            resp.innerHTML = `<p>${new_id+1} / ${total}</p>`
            content_question.innerHTML = `<p id="question">${lista_perguntas[new_id]}</p>`
        }
        next_question = false;
    }
}

function correct(){
    img_logo.style.display = 'inline';
    img_logo.setAttribute('src', '../images/right.png');
    img_content.appendChild(img_logo);
    container.style.border = '3px solid rgb(60, 160, 60)';
    next_question = true;
}

function wrong(){
    img_logo.style.display = 'inline';
    img_logo.setAttribute('src', '../images/wrong.png');
    img_content.appendChild(img_logo);
    container.style.border = 'inset';
    container.style.border = '3px solid rgb(230, 60, 60)';
    next_question = true;
}