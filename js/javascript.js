var swcharacter = "";

function show() {
    alert("Auto Play of the sound is turned off by default!\n To turn on the sound\n Click play on the white control\n TOP LEFT of the screen\n to get the full effect Star Wars effect.....\n May the force be with you!");
 }

 function rebel() {
     alert("You have choosen Rebel Alliance");
 }

 function imperial() {
    document.getElementById('character').innerHTML = '<img src="https://40457712.github.io/assessment/images/bobafett400x397.jpg" onclick="change('bobafett')" alt="User characters" width="50" height="50"><img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" onclick="change('darthmarl') alt="User characters" width="50" height="50">';
 }

function start() {
    var el = document.getElementById('main');
    el.style.padding = "20px";
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("settings").style.visibility = "hidden";
    alert("Starting soon");
}

function change(swcharacter) {
    alert("You have choosen Imperial Darkside " + swcharacter);
}