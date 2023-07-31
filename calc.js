const numberOne = document.getElementById("number1")

const numberTwo = document.getElementById("number2")

const resultado = document.getElementById("resultado")



function calculo(operacao) {

    try {
     const finalResult = eval("Number(numberOne.value)" + operacao + "Number(numberTwo.value)")/* verificar se é um js */

     resultado.textContent = finalResult

     if (finalResult < 0 ){
        resultado.style.color="red"
        
    }else if (finalResult > 50) {
            resultado.style.color="blue"
            
    
    }else if (finalResult < 100) {
            resultado.style.color="green"
            
        }

        else(isNaN(finalResult) || !isFinite(finalResult)); {
        alert("algo deu errado")
        return

    } 
    /* menor q 0 ==> cor vermeçha 
    maior que 50 ==> azul
    maior que 100 ==> cor verde 
     resultado.style.color="blue"*/
        
    } catch (error) {
        alert(error)
    }
        /* quando não é uma operação valida  */
}




/*        if (operacao === "somar") {



       resultado.textContent = Number(numberOne.value) + Number(numberTwo.value)



   } else if (operacao === "subtrair") {



       resultado.textContent = Number(numberOne.value) - Number(numberTwo.value)





   } else if (operacao === "multiplicar") {



       resultado.textContent = Number(numberOne.value) * Number(numberTwo.value)





   } else if (operacao === "dividir") {



       resultado.textContent = Number(numberOne.value) / Number(numberTwo.value)



   } else {
       alert("Não tem")



   }




*/