var swcharacter = "";
var Qcount = 0;

// Create random quiz questions

const quiz = [];
const starwars = [
  [1 , "C", "Who is this evil character?", "B", "Darth Maul", "Darth Vader" , "Darth Mother", "Darth Laser"],
  [2, "E", "What is this large spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"],
  [3, "P", "What is this red planet called?", "A", "Mars", "Darth Vader" , "Darth Mother", "Darth Laser"],
  [4, "C", "Who is this nice character?", "D", "Darth Maul", "Darth Vader" , "Darth Mother", "Hans Solo"],
  [5, "E", "What is this evil spaceship?", "A", "Death Star", "Darth Vader" , "Darth Mother", "Darth Laser"],
  [6, "P", "What is this planet called?", "B", "Darth Maul", "Endor" , "Darth Mother", "Darth Laser"],
  [7, "E", "What is this big spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"],
  [8, "E", "What is this massive spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"],
  [9, "E", "What is this small spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"],
  [10, "E", "What is this round spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"],
  [11, "E", "What is this black spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"],
  [12, "E", "What is this black spaceship called?", "C", "Darth Maul", "Darth Vader" , "Imperial Destroyer", "Darth Laser"]
];

for (i = 10; i > 0; i --)
{
random = Math.floor(Math.random() * (i + 1));
quiz.push(starwars[random]);
starwars.splice(random , 1);
}

// update file

function show() {
    alert("Auto Play of the sound is turned off by default!\n To turn on the sound\n Click play on the white control\n TOP LEFT of the screen\n to get the full effect Star Wars effect.....\n May the force be with you!");
 }

 function rebel() {
    document.getElementById('characterI').innerHTML = "";
    document.getElementById('characterR').innerHTML = '<img src="https://40457712.github.io/assessment/images/c3po290X590.jpg" onclick="change(&#34;C3PO&#34;)" alt="c3po" width="100" height="100"><img src="https://40457712.github.io/assessment/images/chewbacca290X290.png" onclick="change(&#34;chewbacca&#34;)" alt="chewbacca" width="100" height="100">';
}

 function imperial() {
    document.getElementById('characterR').innerHTML = "";
    document.getElementById('characterI').innerHTML = '<img src="https://40457712.github.io/assessment/images/bobafett290X290.png" onclick="change(&#34;bobafett&#34;)" alt="bobafett" width="100" height="100"><img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" onclick="change(&#34;darthmarl&#34;)" alt="darthmarl" width="100" height="100">';
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
   if( Qcount == 10 ) {
      Qcount = 0;
      document.getElementById("buttonnext").innerHTML = '<button  id="buttonstart" onclick="results()">RESULTS</button>';
   } else {
      var ansr = document.getElementsByName('answer');   
            for(i = 0; i < ansr.length; i++) {
                if(ansr[i].checked)
                  alert("You Answered: " + ansr[i].value + " - Correct Answer: " + quiz[Qcount][3] + "Q" + Qcount);
                  // if(ansr[i].value == quiz[Qcount][3])
                  // alert("You got the correct answer!");
      }
      document.getElementById("question").innerHTML = "Question " + Qcount + ": " + quiz[Qcount][2];
      document.getElementById("answerA").innerHTML = '<input type="radio" name="answer" value="A">' + "A: " + quiz[Qcount][4];
      document.getElementById("answerB").innerHTML = '<input type="radio" name="answer" value="B">' + "B: " + quiz[Qcount][5];
      document.getElementById("answerC").innerHTML = '<input type="radio" name="answer" value="C">' + "C: " + quiz[Qcount][6];
      document.getElementById("answerD").innerHTML = '<input type="radio" name="answer" value="D">' + "D: " + quiz[Qcount][7];
      //document.getElementById('labelQA').innerHTML = "Question " + Qcount;
      //alert("Hang on a minute i have not programmed that yet!!!! Question " + Qcount);
      Qcount += 1 ;
   }
}

function results() {
   alert("Not done the results yet!");
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