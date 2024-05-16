const questions = [
    {
        Question: "What is the capital of France?",
        Choix: ["Paris","Berlin","london","Rome"],
        Réponse: "Paris"
    },
    {
        Question: "Which planet is known as the Red Planet?",
        Choix: ["Earth", "Mars", "Venus", "Jupiter"],
        Réponse: "Mars"
    },
    {
        Question: "What is the powerhouse of the cell?",
        Choix: ["Nucleus", "Ribosome", "Mitochondrion", "Endoplasmic reticulum"],
        Réponse: "Mitochondrion"
    }
];
const  Question = document.getElementById("questions");
const  leschoix = document.getElementById(" Choix");
const  lesreponse = document.getElementById("Réponse");
const  final = document.getElementById("finale");



  
  let index = 0; 
 var  score = 0;


function passe(){
 
if(index===questions.length){
  cleanfunction()
  final.classList.toggle("finale")
return ''

}

  

  var   solution  = document.getElementsByClassName('solution')
    for ( let j=0; j< solution.length;j++){
      const element = solution[j]
      
      
      if(element.checked && questions[index-1].Réponse===element.value){

        score++
        console.log(score)
      }
 
    }
 

 
    cleanfunction()
 
Question.innerHTML= questions[index].Question

 for (let  i = 0; i < questions[index].Choix.length; i++) {
  
    var input = document.createElement('input');
  input.type="radio"
  input.name="nom"
  input.className="solution"
  input.value=questions[index].Choix[i]
  leschoix.appendChild(input)
    
   var label = document.createElement('label');
    label.innerHTML=input.value
    leschoix.appendChild(label)
    var br = document.createElement('br');
     leschoix.appendChild(br)
 }  

 index++
 Question.innerHTML ='votre score : ' +score+'/'+questions.length

}

  function cleanfunction(){

    while ( leschoix.firstChild){

      leschoix.removeChild( leschoix.firstChild)

  }   
 
 
  } 



function fin(){
  final.classList.toggle("finale")
index =0;
passe()
 
}



