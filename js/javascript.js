var swcharacter = "";
var Qcount = 1;

// update file

function show() {
    alert("Auto Play of the sound is turned off by default!\n To turn on the sound\n Click play on the white control\n TOP LEFT of the screen\n to get the full effect Star Wars effect.....\n May the force be with you!");
 }

 function rebel() {
    document.getElementById('characterI').innerHTML = ""
    document.getElementById('characterR').innerHTML = '<img src="https://40457712.github.io/assessment/images/c3po290X590.jpg" onclick="change(&#34;C3PO&#34;)" alt="c3po" width="100" height="100"><img src="https://40457712.github.io/assessment/images/chewbacca290X290.png" onclick="change(&#34;chewbacca&#34;)" alt="chewbacca" width="100" height="100">';
}

 function imperial() {
    document.getElementById('characterR').innerHTML = ""
    document.getElementById('characterI').innerHTML = '<img src="https://40457712.github.io/assessment/images/bobafett290X290.png" onclick="change(&#34;bobafett&#34;)" alt="bobafett" width="100" height="100"><img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" onclick="change(&#34;darthmarl&#34;)" alt="darthmarl" width="100" height="100">';
}

function start() {
   var setup1 = document.getElementById("settings");
   // alert("Visiblity of settings is " + setup1.style.visibility);
   setup1.style.visibility = "hidden";
   var setup2 = document.getElementById("main");
   // alert("Visiblity of settings is " + setup2.style.visibility);
   setup2.style.visibility = "visible";
}

function next() {
   Qcount += 1 ;
   if( Qcount === 13 ) {
      Qcount = 1;
      alert("Too many questions brain box")
   } else {
      document.getElementById('labelQA').innerHTML = "Question " + Qcount;
      alert("Hang on a minute i have not programmed that yet!!!! Question " + Qcount);
   }
}

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