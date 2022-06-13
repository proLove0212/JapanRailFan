// Script for trains.html

var content = document.getElementById("main")
var othersHtml = ""

// Not the most effient way but it gets the job done
for (const [lineKey, value] of Object.entries(lines)) {
    var trainHtml = ""

    for (const [trainKey, trainValue] of Object.entries(trains)) {
        if (trainValue.line.includes(lineKey)) {
            trainHtml += '<div class="col-md-4 mb-3" id="train-' + trainKey + '"><a href="./train.html?train=' + trainKey + '"><div class="card h-100 h-shadow"><img class="card-img-top" src="' + trainValue.images[0] + '"><div class="card-body d-flex align-items-center"><h5 class="flex-fill m-0">' + trainValue.name + '</h5><span class="material-symbols-sharp white">chevron_right</span></div></div></a></div>'
        }
    }

    var baseHtml = '<div class="mb-3" id="line-' + lineKey + '"><div class="card subcategory-header align-items-center mb-3" id="line-1-header"><div style="background-color: #' + value.color + ';" class="subcategory-line-color mr-3"><span class="material-symbols-sharp subcategory-icon">route</span></div><h2 class="mb-0">' + value.name + '</h2></div><div><div class="row" id="line-' + lineKey + '-content">' + trainHtml + '</div></div></div>';
    content.innerHTML += baseHtml
}

for (const [trainKey, trainValue] of Object.entries(trains)) {
    if (trainValue.line.length == 0) {
        othersHtml += '<div class="col-md-4" id="train-' + trainKey + '"><a href="./train.html?train=' + trainKey + '"><div class="card h-100 h-shadow"><img class="card-img-top" src="' + trainValue.images[0] + '"><div class="card-body d-flex align-items-center"><h5 class="flex-fill m-0">' + trainValue.name + '</h5><span class="material-symbols-sharp white">chevron_right</span></div></div></a></div>'
    }
}