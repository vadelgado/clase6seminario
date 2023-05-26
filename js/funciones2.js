function operacion(){
    let num1 , num2;
    num1 = parseInt(document.getElementById('numero1').value);
    num2 = parseInt(document.getElementById('numero2').value);
    if(num2==0){
        alert(
            "La suma es:"+(num1+num2)+"\n"+
            "La resta es:"+(num1-num2)+"\n"+
            "La multiplicacion es:"+(num1*num2)+"\n"+
            "No se puede dividir entre 0"
            );
    }else{
        pantalla(num1,num2);
    }
    
}
function pantalla(num1,num2){

    alert(
          "La suma es: "+(num1+num2)+"\n"+
          "La resta es: "+(num1-num2)+"\n"+
          "La multiplicacion es: "+(num1*num2)+"\n"+
          "La division es: "+(num1/num2)+"\n");
}