var swcharacter = "";
var Qcount = 0;

// Create random quiz questions

const quiz = [];
const starwars = [
  [1 , "C", "Who is this golden droid character?", "C", "R2D2", "BB-8" , "C-3PO", "IG-88"],
  [2, "P", "What is this planet called?", "B", "Naboo", "Coruscant" , "Alderaan", "Tatooine"],
  [3, "C", "Who is this Supreme Commander?", "D", "Darth Sidious", "Sumpreme Leader Snoke" , "Darth Yoda", "General Grievous"],
  [4, "E", "What is the name of this spaceship", "D", "Soulless One", "The Ninka" , "Republic Crusier", "Millennium Falcon"],
  [5, "C", "Who is this Rebel Leader?", "D", "Lando Calrissian", "Finn" , "Luke Skywalker", "Han Solo"],
  [6, "C", "Who is this famous droid character??", "B", "R2D2", "BB-8" , "C-3PO", "RX9"],
  [7, "C", "Who is this Jedi character?", "C", "Qui-Gon Jinn", "Mace Windu" , "Yoda", "Jabba"],
  [8, "C", "Who is this dark Sith lord?", "A", "Darth Maul", "Darth Vader" , "Count Dooku", "Darth Paladuis"],
  [9, "C", "Who is this bounty hunter character?", "B", "Zam Wesell", "Boba Fett" , "Dengar", "Asajj Ventress"],
  [10, "E", "What is this round spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"],
  [11, "E", "What is this black spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"],
  [12, "E", "What is this black spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"]
];

for (i = 10; i > 0; i --)
{
random = Math.floor(Math.random() * (starwars.length));
quiz.push(starwars[random]);
starwars.splice(random , 1);
}
console.log(quiz);
// update file

function show() {
    alert("Auto Play of the sound is turned off by default!\n To turn on the sound\n Click play on the white control\n TOP LEFT of the screen\n to get the full effect Star Wars effect.....\n May the force be with you!");
 }

 function rebel() {
   document.getElementById('force').innerHTML = "Rebel";
    document.getElementById('characterI').innerHTML = "";
    document.getElementById('characterR').innerHTML = '<p>Choose a character.....</p><img src="https://40457712.github.io/assessment/images/c3po290X590.jpg" onclick="change(&#34;C3PO&#34;)" alt="c3po" width="100" height="100"><img src="https://40457712.github.io/assessment/images/chewbacca290X290.png" onclick="change(&#34;chewbacca&#34;)" alt="chewbacca" width="100" height="100">';
}

 function imperial() {
   document.getElementById('force').innerHTML = "Imperial";
    document.getElementById('characterR').innerHTML = "";
    document.getElementById('characterI').innerHTML = '<p>Choose a character.....</p><img src="https://40457712.github.io/assessment/images/bobafett290X290.png" onclick="change(&#34;bobafett&#34;)" alt="bobafett" width="100" height="100"><img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" onclick="change(&#34;darthmarl&#34;)" alt="darthmarl" width="100" height="100">';
}

function start() {
   var setup1 = document.getElementById("settings");
   // alert("Visiblity of settings is " + setup1.style.visibility);
   setup1.style.visibility = "hidden";
   var setup2 = document.getElementById("main");
   // alert("Visiblity of settings is " + setup2.style.visibility);
   setup2.style.visibility = "visible";
   next();
}

function next() {
   var unchecked = 0;
   //alert("Qcount " + Qcount);
   if(Qcount => 1) {
   var ansr = document.getElementsByName('answer');   
      for(i = 0; i < ansr.length; i++) {
         if(ansr[i].checked){
            // alert(quiz[(Qcount - 1)][2] + "You Answered: " + ansr[i].value + " - Correct Answer: " + quiz[(Qcount - 1)][3] + "Q" + (Qcount - 1));
            if(ansr[i].value == quiz[Qcount - 1][3]){
               z = document.getElementById('force').innerHTML;
               // alert("You got the correct answer! " + z);
               if (z == "Rebel"){
                  myFunctionAdd(5);
               }else{
                  myFunctionMinus(5);
               }
            }else{
               //alert("You got the wrong answer! " + z);
               if (z == "Rebel"){
                  myFunctionMinus(5);
               }else{
                  myFunctionAdd(5);
               }
            }
         }else{
            unchecked += 1;
         }
      }
      
      if (unchecked == 4){
         alert("You need to click an answer");
         Qcount -= 1;
      }
      // if(ansr.checked = false){
      //   alert("You need to click an answer");
      //   Qcount -= 1;
      //}
   }

   if(Qcount == 10) {
      document.getElementById("question").innerHTML = "Click the result button to see how you did in the battle";
      document.getElementById("picture").innerHTML = "As your battle has end brave warrior!!!";
      document.getElementById("answerA").innerHTML = "";
      document.getElementById("answerB").innerHTML = "";
      document.getElementById("answerC").innerHTML = "";
      document.getElementById("answerD").innerHTML = "";  
      document.getElementById("buttonnext").innerHTML = '<button  id="buttonstart" onclick="results()">RESULTS</button><button  id="buttonstart" onclick="replay()">REPLAY</button>';
   }else{
      document.getElementById("question").innerHTML = "Question " + (Qcount + 1) + ": " + quiz[(Qcount)][2];
      document.getElementById("picture").innerHTML = '<img src="https://40457712.github.io/assessment/images/' + quiz[(Qcount)][0] + '.jpg" alt="' + quiz[(Qcount)][2] + '" width = "98%">';
      document.getElementById("answerA").innerHTML = '<input type="radio" name="answer" value="A">' + "A: " + quiz[(Qcount)][4];
      document.getElementById("answerB").innerHTML = '<input type="radio" name="answer" value="B">' + "B: " + quiz[(Qcount)][5];
      document.getElementById("answerC").innerHTML = '<input type="radio" name="answer" value="C">' + "C: " + quiz[(Qcount)][6];
      document.getElementById("answerD").innerHTML = '<input type="radio" name="answer" value="D">' + "D: " + quiz[(Qcount)][7];
   //document.getElementById('labelQA').innerHTML = "Question " + Qcount;
   //alert("Hang on a minute i have not programmed that yet!!!! Question " + Qcount);
   Qcount += 1; 
   //alert("Qcount " + Qcount);
   }
}

function results() {
   alert("Not done the results yet!");
}

function replay() {
   document.location.reload(true);
}
// Look at changing this to switch statement

function change(swcharacter) {
    if( swcharacter === "C3PO" ) {
        // alert("Welcome " + swcharacter + " to the battle!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/c3po290X590.jpg" alt="c3po" width="290px" height="290px">';
     }
     if( swcharacter === "chewbacca" ) {
        // alert("Welcome " + swcharacter + " to the battle!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/chewbacca290X290.png" alt="chewbacca" width="290px" height="290px">';
     }
     if( swcharacter === "bobafett" ) {
        // alert("Welcome " + swcharacter + " to the battle!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/bobafett290X290.png" alt="bobafett" width="290px" height="290px">';
     }
     if( swcharacter === "darthmarl" ) {
        // alert("Welcome " + swcharacter + " to the battle!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" alt="darthmaul" width="290px" height="290px">';
     }
}

// Change progress bar

function myFunctionAdd(t) {
   var x = document.getElementById("myProgress").value;
   x = x + t;
   document.getElementById("myProgress").value = x;
   //if (x >= 90) {
   //alert("You are winning the battle");
   //}
 }
 
 function myFunctionMinus(t) {
   var x = document.getElementById("myProgress").value;
   x = x - t;
   document.getElementById("myProgress").value = x;
   //if (x <= 10) {
   //alert("You are losing the battle");
   //}
 }