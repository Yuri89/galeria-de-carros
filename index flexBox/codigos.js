var nomeMudar = document.querySelector(".nomeEscolhido");
var colunaFotos = document.querySelector(".colunaFotos")
var linkBotao = document.querySelector(".linkBotao")
 
function ligado(){
    if(linkBotao.style.display === "none"){
        linkBotao.style.display = "flex";
        console.log("ok");
    }else{
        linkBotao.style.display = "none";
        
    }

}


    px=window.screenX;
    
    if(px <= "576px"){
        linkBotao.style.display = "none";
    }
    console.log(px)


