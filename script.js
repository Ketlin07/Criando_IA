const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Imagine que você encontrou um gato que tem uma coleção de gravatas elegantes. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Pergunta ao gato qual é a história por trás de cada uma das suas gravatas.",
                afirmacao: "Você descobre que cada gravata tem um significado especial e único na vida do gato."
            },
            {
                texto: "Faz uma sessão de fotos com o gato usando todas as suas gravatas, criando um álbum de moda felina.",
                afirmacao: "O álbum se torna um sucesso nas redes sociais, atraindo admiradores de moda de todo o mundo."
            }
        ]
    },
    {
        enunciado: "Você recebe a notícia de que um robô acaba de abrir um café ao lado da sua casa. Como você reage?",
        alternativas: [
            {
                texto: "Visita o café para experimentar o café feito por um robô e descobre que ele tem uma habilidade especial para criar arte na espuma do café.",
                afirmacao: "Você se torna um cliente regular, apreciando não apenas o café, mas também as habilidades artísticas do robô barista."
            },
            {
                texto: "Organiza uma festa de boas-vindas para o robô e convida seus amigos para conhecer o novo empreendimento tecnológico.",
                afirmacao: "A festa se transforma em um evento comunitário, promovendo a aceitação da integração entre humanos e robôs."
            }
        ]
    },
    {
        enunciado: "Durante uma festa de aniversário, você é apresentado a um holograma de Albert Einstein. Qual a sua primeira pergunta?",
        alternativas: [
            {
                texto: "Pergunta se ele já conseguiu resolver o enigma do universo e se ele tem algum conselho para os físicos modernos.",
                afirmacao: "Você fica intrigado com as respostas perspicazes do holograma, que desafia sua compreensão atual da física."
            },
            {
                texto: "Pede para ele compartilhar uma piada ou anedota que ele gostava de contar durante sua vida.",
                afirmacao: "Você se diverte com o humor inesperado do holograma, revelando um lado mais descontraído de Einstein."
            }
        ]
    },
    {
        enunciado: "Você encontra uma máquina do tempo acidentalmente no porão da sua casa. Para onde você decide ir primeiro?",
        alternativas: [
            {
                texto: "Viaja para um festival de música lendário do passado e experimenta a energia e a música de uma época diferente.",
                afirmacao: "Você se vê dançando ao som de bandas icônicas e experimentando a cultura vibrante de uma era passada."
            },
            {
                texto: "Explora o futuro para ver como as inovações tecnológicas transformaram o mundo e descobre novas formas de vida.",
                afirmacao: "Você fica fascinado com as novas tecnologias e sociedades futuristas, expandindo sua visão do que é possível."
            }
        ]
    },
    {
        enunciado: "Você descobre que seu vizinho é um inventor talentoso que cria gadgets extraordinários. Como você reage?",
        alternativas: [
            {
                texto: "Convida seu vizinho para uma colaboração e cria um dispositivo inovador que resolve um problema cotidiano de maneira criativa.",
                afirmacao: "O dispositivo se torna um sucesso local, melhorando a vida de muitas pessoas e fortalecendo sua amizade com o vizinho."
            },
            {
                texto: "Organiza uma feira para mostrar as invenções do seu vizinho à comunidade, promovendo reconhecimento e apoio ao seu talento.",
                afirmacao: "A feira se transforma em um evento popular, inspirando outros a explorar a criatividade e a inovação em suas próprias vidas."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " ASS: Ketlin & Thayla; Isso mostrou a você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
