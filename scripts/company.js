// Script for company.html

var id = urlParams.get("operator")
var linesHtml = ""
trainsHtml = ""

if (id == null) {
    window.location.href = "./companies.html";
}

var operator = operators[id]

// Get related train line information
for (const [lineKey, value] of Object.entries(lines)) {
    if (value.operator == id) {
        var lineName = value.name
        var length = value.length
        var color = value.color

        linesHtml += '<div class="col-md-6 col-lg-4 mb-3"><a href="./line.html?line=' + lineKey + '"><div class="card h-shadow"><div class="w-100 d-flex justify-content-center align-items-center" style="background-color:#' + color + ';"><span class="material-symbols-sharp category-icon my-5">route</span></div><div class="card-body d-flex align-items-center"><div class="flex-fill"><h5 class="card-title m-0">' + lineName + '</h5><small class="white">' + length + ' km</small></div><span class="material-symbols-sharp white">chevron_right</span></div></div></a></div>'
    }
}

// Get related rolling stock information
for (const [trainKey, trainValue] of Object.entries(trains)) {
    if (trainValue.line.includes(id)) {
        trainsHtml += '<div class="col-md-6 col-lg-4 mb-3" id="train-' + trainKey + '"><a href="./train.html?train=' + trainKey + '"><div class="card h-100 h-shadow"><img class="card-img-top" src="' + trainValue.images[0] + '"><div class="card-body d-flex align-items-center"><h5 class="flex-fill m-0">' + trainValue.name + '</h5><span class="material-symbols-sharp white">chevron_right</span></div></div></a></div>'
    }
}

document.title = operator.name + " - JapanRailFan"
document.getElementById("operator-name").innerHTML = operator.name
document.getElementById("operator-name-jp").innerHTML = operator.japaneseName
document.getElementById("operator-desc").innerHTML = operator.description
document.getElementById("operator-logo").src = operator.logo
document.getElementById("operator-lines").innerHTML = linesHtml
document.getElementById("operator-trains").innerHTML = trainsHtml
