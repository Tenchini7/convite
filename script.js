const botaoNao = document.getElementById("nao");


/* Botão NÃO fugindo */

botaoNao.addEventListener("mouseover", () => {

    const card = document.querySelector(".card");

    const largura = card.clientWidth - botaoNao.offsetWidth;
    const altura = card.clientHeight - botaoNao.offsetHeight;


    const novaPosicaoX = Math.random() * largura;
    const novaPosicaoY = Math.random() * altura;


    botaoNao.style.left = novaPosicaoX + "px";
    botaoNao.style.top = novaPosicaoY + "px";

});



/* Para celular */

botaoNao.addEventListener("touchstart", () => {

    const card = document.querySelector(".card");

    const largura = card.clientWidth - botaoNao.offsetWidth;
    const altura = card.clientHeight - botaoNao.offsetHeight;


    botaoNao.style.left = Math.random() * largura + "px";
    botaoNao.style.top = Math.random() * altura + "px";

});





function aceitar(){


    document.getElementById("inicio")
    .classList.add("escondido");


    document.getElementById("convite")
    .classList.remove("escondido");


}




function abrirCarta(){


    document.querySelector(".envelope")
    .style.display="none";


    document.getElementById("carta")
    .classList.remove("escondido");



    const mensagem = 
    "Eu queria muito viver esse momento com você ❤️. " +
    "Obrigado por aceitar esse convite. " +
    "Espero que seja um dia muito especial para nós dois 🥰";


    let i = 0;


    const texto = document.getElementById("textoCarta");


    texto.innerHTML="";


    function escrever(){

        if(i < mensagem.length){

            texto.innerHTML += mensagem.charAt(i);

            i++;

            setTimeout(escrever,50);

        }

    }


    escrever();


}





function confirmar(){


    const data = document.getElementById("data").value;

    const hora = document.getElementById("hora").value;



    if(data === "" || hora === ""){

        alert("Escolha uma data e um horário ❤️");

        return;

    }



    document.getElementById("convite")
    .classList.add("escondido");



    document.getElementById("confirmacao")
    .classList.remove("escondido");



    document.getElementById("resultado").innerHTML =

    `Nosso encontro ficou marcado para:
    <br><br>
    📅 ${data}
    <br>
    🕒 ${hora}
    <br><br>
    Estou ansioso ❤️`;

}