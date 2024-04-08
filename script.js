let soma =0 



const valor1 = document.querySelector("#valor1")
valor1.addEventListener("input", valorconta)

function valorconta(evento){
    conta = (evento.target.value )
    calcular()

}

const valor2=document.querySelector("#valor1")
valor1.addEventListener("input",valorconta)


function calcular()                      {
    if(valor1 !== -1 && valor2 !== -1) {
        const valor1 =document.querySelector(".valor1    > . valor2" )
        p.innerHTML = valor1 + valor2 .tofixed(2)

    }
}
