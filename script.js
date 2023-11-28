var formulario = document.getElementById('forma'),
    numeroEntrada = formulario.base,
    error = document.getElementById('error'),
    resultado = document.getElementById('resultado');

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
//Imprime toda la serie
function printFib(){
    //Evalua si estamos enviando un numero en el campo o no
    if(numeroEntrada.value != ''){
      error.innerHTML ='';
      let number = parseInt(numeroEntrada.value);
      let valorInicial = 0;
      resultado.value = String(valorInicial) + '\n';
      for(i = 1 ; i <= number ; i++){
        resultado.value =resultado.value + String(fib(i)) + '\n' ;
      }
    }else{
      error.innerHTML = '<p> No has escrito ningún numero, llena el campo para funcionar</p>';
    }
    
}
//Limpia el textarea
function limpiarCaja(){
    resultado.value = '';
}


formulario.addEventListener('submit',printFib);
formulario.addEventListener('reset',limpiarCaja);