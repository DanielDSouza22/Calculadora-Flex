
var resp = "s";
for(i = 1;resp == "s";i++) {

    alert(" Bem-Vindo - Calculadora Combustivel Flex \n (Clique em 'OK' para Iniciar)");
  var Gasolina = Number(prompt("Digite o Valor da gasolina: "));
  var Alcool = Number(prompt("Digite o Valor da alcool: "));
  var n =  Alcool/Gasolina
if (Gasolina > 0.7){
    alert("vale apena gasolina");
}
else if(Alcool < 0.7){
    alert("vale apena alcool");
}
else{
    alert("Tanto faz abastecer com um ou outro");
}

resp = prompt("Gostaria de fazer uma nova consulta?\n(Responda 's' para SIM ou 'n' para NÃO)");
}