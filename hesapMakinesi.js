let number1=Number(prompt("1. sayıyı gir"));
 let number2=Number(prompt("2. sayıyı girin"));
 let process=prompt("Toplam için : 1 / Çıkarma için: 2 / Çarpma için: 3 / Bölme için: 4");
 let concluson=0
 if(process==="1"){
   concluson= number1+number2
  alert(concluson);
 }else if(process==="2"){
  concluson=number1-number2
  alert(concluson);
 }else if(process==="3"){
  concluson= number1*number2
  alert(concluson);
 }else if(process==="4"){
  concluson=number1/number2
  alert(concluson);
 }else {
  alert("Gecersiz değer girdiniz");
 }

