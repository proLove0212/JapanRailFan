// Script for line.html

var id = urlParams.get("line")
var trainHtml = ""

if (id == null) {
    window.location.href = "./lines.html";
}

var line = lines[id]

// Set the info panels
document.title = line.name + " - JapanRailFan"
document.getElementById("line-name").innerHTML = line.name
document.getElementById("line-name-jp").innerHTML = line.japaneseName
document.getElementById("line-shortname").innerHTML = line.shortName
document.getElementById("line-icon").style.border = "5px solid #" + line.color
document.getElementById("line-open").innerHTML = line.open
document.getElementById("line-length").innerHTML = line.length + " km"
document.getElementById("line-track").innerHTML = line.track + " mm"
document.getElementById("line-speed").innerHTML = line.speed + " km/h"
document.getElementById("line-desc").innerHTML = line.description