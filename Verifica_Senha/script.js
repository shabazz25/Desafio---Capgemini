function requisitoSenha() 
{
  //Declaração de varíaveis	
	let alfaMin = /([a-z])/;
	let alfaMaisc = /([A-Z])/;
	let charEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
  let numeros = /([0-9])/;

	if($('#password').val().length<6) 
	{
		$('#password-status').html("<span style='color:red'><br>Fraco, insira no mínimo 6 caracteres</br></span>");

    //else numerico
	}  if($('#password').val().match(numeros) === null)
    {
    		$('#password-statusNum').html("<span style='color:red'>Um Número.</span>");
    } else if ($('#password').val().match(numeros) !== null){
      $('#password-statusNum').html("<span style='color:green'> &#10003; Um Número.</span>");
       } 
      //else Letras Maiúsculas
     if($('#password').val().match(alfaMaisc) === null)
    {
    		$('#password-statusUpper').html("<span style='color:red'>Uma Letra Maiúscula.</span>");
    } else if ($('#password').val().match(alfaMaisc) !== null){
      $('#password-statusUpper').html("<span style='color:green'> &#10003; Uma Letra Maiúscula.</span>");
       }  
    //if Caracteres Especiais
     if($('#password').val().match(charEspeciais) === null)
    {
    		$('#password-statusCaracter').html("<span style='color:red'>Um Caracter Especial.</span>");
    } else if ($('#password').val().match(charEspeciais) !== null){
      $('#password-statusCaracter').html("<span style='color:green'> &#10003; Um Caracter Especial.</span>");
       }  
if( $('#password').val().length>=6)
		{   //checagem de tamanho minimo         
			$('#password-status').html("<span style='color:green'><p>&#10003; Tamanho minimo alcançado</b></span>");
		}

    //verifica se todos os requisitos foram alcancados
if($('#password').val().match(numeros) && $('#password').val().match(alfaMin) && $('#password').val().match(alfaMaisc) && $('#password').val().match(charEspeciais) && $('#password').val().length>=6)
		{            
			$('#password-status').html("<span style='color:green'><h3><b><p>😁Parabéns, você digitou uma senha forte!!!</h3></b></span>");
		}

if($('#password').val().match(alfaMin) === null)
    {
    		$('#password-letraMin').html("<span style='color:red'>Letra Minuscula.</span>");
    } else if ($('#password').val().match(alfaMin) !== null){
      $('#password-letraMin').html("<span style='color:green'>&#10003; Letra Minuscula.</span>");
       }  

}