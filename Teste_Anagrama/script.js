    //inicio da função anagrama
    function anagrama() {
         let resultado ="";
         //variaveis recebem dados do formulário
         const palavra1 = document.getElementById('palavra1').value;
         const palavra2 = document.getElementById('palavra2').value;
        // Se não tiver o mesmo tamanho, não é anagrama
         
           if (palavra1.length !== palavra2.length) {
           resultado = "As duas palavras não tem o mesmo tamanho"
           //caso as strings tenham tamanhos diferente, exibe mensagem e para a execução
        } else {
  
        // rearranjo das strings
       const str1 = palavra1.split('').sort().join(''); 
       const str2 = palavra2.split('').sort().join('');
  
        const result = (str1 === str2);
        if(result === true){
          resultado = `As palavras ${palavra1.toUpperCase()} e ${palavra2.toUpperCase()}, são Anagramas entre si`

            }else{
           resultado = `As palavras ${palavra1.toUpperCase()} e ${palavra2.toUpperCase()}, não são Anagramas entre si`
             }
           }
           document.querySelector( ".resultado").innerHTML = resultado;
            
        }
     
  
