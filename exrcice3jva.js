
var output =  document.getElementById("output")
 var num1; 
 var num2;
  var op ;
  var result;
  function afficher(num){
   output.value+=num;
  console.log(num);

  } 
  function operation(opvalue){
       num1=Number(output.value);
       op=opvalue;
       output.value='';
     
  }
  function calculer(){
    num2=Number(output.value);
    
    switch (op) {
      case '+':
        result=num1+num2;
        break;
        case '-':
          result=num1-num2;
          break;
          case '*':
            result=num1*num2;
            break;
            case '/':
              result=num1/num2;
              break;
      default:
        break;
    }
  output.value=result;


  }




/*function afficher(num){
    output.value+=num;
}
function calculer(){
    output.value = eval(output.value);
 
}*/


















