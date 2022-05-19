var id = urlParams.get("train")
var linesHtml = ""


if (id == null) {
    window.location.href = "./trains.html";
}
console.log(id)
var train = trains[id]

// Set the info panels
document.getElementById("train-name").innerHTML = train.name
document.getElementById("train-desc").innerHTML = train.description
document.getElementById("train-built").innerHTML = train.built
document.getElementById("train-cars").innerHTML = train.cars
document.getElementById("train-capacity").innerHTML = train.capacity
document.getElementById("train-image").src = train.images[0]

// Set lines
train.line.forEach(setLines);
function setLines(id, index) {
    var line = lines[id]
    linesHtml += '<div class="col-md-6 mb-3"><a href="./line.html?line=' + id + '"><div class="card h-shadow"><div class="line-card-color" style="background-color: #' + line.color + ';"></div><div class="card-body"><div class="d-flex align-items-center"><h5 class="flex-fill m-0">' + line.name + '</h5><span class="material-symbols-sharp white">chevron_right</span></div></div></div></a></div>'
}

document.getElementById("train-lines").innerHTML = linesHtml