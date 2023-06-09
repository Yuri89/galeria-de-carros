var foto = document.querySelector(".imgNav")
var limite = new Array[3]
limite [0] = "/fotos/carros/carrosel/GTR.jpg"
limite [1] = "/fotos/carros/carrosel/Ferrari.jpg"
limite [2] = "/fotos/carros/carrosel/SuperCar.jpg"
 
function rotacaoFotos(){
    limite = 0
    if(limite == 3){
        limite = 0
    }
    setInterval(function() {
        for(lista in limite){
            foto.src = lista
        }


    }, 100);


}