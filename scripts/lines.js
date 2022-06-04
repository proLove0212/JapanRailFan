// Script for lines.html

var content = document.getElementById("lines")
var linesHtml = ""

for (const [lineKey, value] of Object.entries(lines)) {
    var lineName = value.name
    var length = value.length
    var color = value.color

    linesHtml += '<div class="col-md-6 col-lg-4 mb-3"><a href="./line.html?line=' + lineKey + '"><div class="card h-shadow"><div class="w-100 d-flex justify-content-center align-items-center" style="background-color:#' + color + ';"><span class="material-symbols-sharp category-icon mt-5 mb-5">route</span></div><div class="card-body d-flex align-items-center"><div class="flex-fill"><h5 class="card-title m-0">' + lineName + '</h5><small class="white">' + length + ' km</small></div><span class="material-symbols-sharp white">chevron_right</span></div></div></a></div>'
}

content.innerHTML = linesHtml