//Algoritimo imprime degraus de uma escada de acordo com numero passado como parametro na função

let lista = [];
function exibeNumero(degraus) {
    for (let cont = 0; cont < degraus; cont++) {
  lista.push(" ".repeat(degraus - cont - 1) + "*".repeat(cont + 1))
       
    }
    for (const degraus of lista) {
     console.log(degraus);  
      
    }
   
}
//passar numero de degraus na função
exibeNumero(15);