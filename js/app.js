let somatorioAlugados = 0;

function imprimeQtdJogosAlug(){
        console.log(`Total de jogos alugados: ${somatorioAlugados}`);
}

//Passo 1: recuperar jogo, img e botão.

function alterarStatusBotao(id){
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector('.dashboard__item__img') // para manipular imagem referente ao "div" do arquivo HTML
    let botao = game.querySelector('.dashboard__item__button');
    let nomeDoJogo = game.querySelector('.dashboard__item__name');
    
   // alert(nomeDoJogo.textContent); para verificar o click e responder em forma de texto
   
//Passo 2: Recuperar a dinâmica entre os parâmetros de quando o jogo está disponível ou alugado e os botões.

    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo.textContent}?`)){ // "confirm" é usado para fazer uma confirmação de autorização com uma caixa de msg com "SIM" e "NÃO".
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            alert(`O jogo ${nomeDoJogo.textContent} foi devolvido`);
            botao.textContent = 'Alugar';   
            somatorioAlugados--;
        }
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        somatorioAlugados++;
    }
    imprimeQtdJogosAlug();
}

document.addEventListener('DOMContentLoaded', function() {
    somatorioAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    imprimeQtdJogosAlug();
});

//DOMContentLoaded que é acionado quando a página é carregada. Nesse momento, ele conta a quantidade inicial de jogos alugados.