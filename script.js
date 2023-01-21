var numUm = "";
var numDois = "";
var operador = "";
var numAtual = 0;
var resultado = false;
var travaNumUm = false;
function resetarNumeros() {
      numUm = "";
numDois = "";
operador = "";
 numAtual = 0;
 travaNumUm = false;
 resultado = false;
document.getElementById("numeroUm").innerHTML = "0";
document.getElementById("numeroDois").innerHTML = numDois;
document.getElementById("resultado").innerHTML = "";
document.getElementById("operador").innerHTML = "";


}
 
 
function utilizaResultado(operadorNovo) {
        numUm = resultado.toString();
        travaNumUm = true;
 numDois = "";
 operador = operadorNovo;
 numAtual = 0;
 resultado = false;
document.getElementById("numeroUm").innerHTML = numUm;
document.getElementById("numeroDois").innerHTML = numDois;
document.getElementById("resultado").innerHTML = "";
document.getElementById("operador").innerHTML = operadorNovo;
}

function adicionaNumero(numrero) {
    
   
   if(operador.length>0 && numUm.length>0 || travaNumUm == true) {
   numAtual = 1;
        
   }
   
   if(numAtual == 0) {
       numUm += numrero;  document.getElementById("numeroUm").innerHTML = numUm;
   }
   
   if(numAtual == 1) {
  numDois += numrero;                  document.getElementById("numeroDois").innerHTML = numDois;
        
   }
    
    console.log("numero um  " + numUm);
    console.log("numero dois  " + numDois);
    console.log("operador  " + operador);
    
} 

function adionaOperador(operadorn) {
     console.log(resultado)
     if(resultado!== false){
     utilizaResultado(operadorn);
     
     }
     else{
          operador = operadorn;
          document.getElementById("operador").innerHTML = operador;
     }
     
     
     console.log(operador);
}

function realizaOperacao() {
     
   if(numUm.length > 0 && numDois.length > 0 && operador.length > 0) {
        
  
     if(operador == "+") {
          resultado = parseFloat(numUm) + parseFloat(numDois);
          
     }
     if(operador == "-") {
          resultado = parseFloat(numUm) - parseFloat(numDois);
          
     }
     if(operador == "/") {
          resultado = parseFloat(numUm) / parseFloat(numDois);
          
     }
     if(operador == "*") {
          resultado = parseFloat(numUm) * parseFloat(numDois);
          
     }
    console.log(resultado);
                
       document.getElementById("resultado").innerHTML = resultado.toFixed(2);
      } 
}
     
