var swcharacter = "";

function show() {
    alert("Auto Play of the sound is turned off by default!\n To turn on the sound\n Click play on the white control\n TOP LEFT of the screen\n to get the full effect Star Wars effect.....\n May the force be with you!");
 }

 function rebel() {
    document.getElementById('characterI').innerHTML = ""
    document.getElementById('characterR').innerHTML += '<img src="https://40457712.github.io/assessment/images/c3po290X590.jpg" onclick="change(&#34;C3PO&#34;)" alt="c3po" width="60" height="60">';
    document.getElementById('characterR').innerHTML += '<img src="https://40457712.github.io/assessment/images/chewbacca290X290.jpg" onclick="change(&#34;chewbacca&#34;)" alt="chewbacca" width="60" height="60">';
}

 function imperial() {
    document.getElementById('characterR').innerHTML = ""
    document.getElementById('characterI').innerHTML += '<img src="https://40457712.github.io/assessment/images/bobafett400x397.jpg" onclick="change(&#34;bobafett&#34;)" alt="bobafett" width="60" height="60">';
    document.getElementById('characterI').innerHTML += '<img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" onclick="change(&#34;darthmarl&#34;)" alt="darthmarl" width="60" height="60">';
}

function start() {
    var el = document.getElementById('main');
    el.style.padding = "20px";
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("settings").style.visibility = "hidden";
    alert("Starting soon");
}

function change(swcharacter) {
    if( swcharacter === "C3PO" ) {
        alert("You have choosen " + swcharacter + " character!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/c3po290X590.jpg" alt="c3po" width="80%" height="80%">';
     }
     if( swcharacter === "chewbacca" ) {
        alert("You have choosen " + swcharacter + " character!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/chewbacca290X290.jpg" alt="chewbacca" width="80%" height="80%">';
     }
     if( swcharacter === "bobafett" ) {
        alert("You have choosen " + swcharacter + " character!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/bobafett400x397.jpg" alt="bobafett" width="80%" height="80%">';
     }
     if( swcharacter === "darthmarl" ) {
        alert("You have choosen " + swcharacter + " character!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" alt="darthmaul" width="80%" height="80%">';
     }
}