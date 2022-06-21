// Script for train.html

var id = urlParams.get("train")
var linesHtml = ""
var carouselGalleryHtml = ""
var galleryImgsHtml = ""


if (id == null) {
    window.location.href = "./trains.html";
}

var train = trains[id]
var operator = operators[train.operator]

// Set the info panels
var operatorLink = '<td id="line-operator"><a href="./company.html?operator=' + train.operator + '">' + operator.name + '</a></td>'
document.title = train.name + " - JapanRailFan"
document.getElementById("train-name").innerHTML = train.name
document.getElementById("train-desc").innerHTML = train.description
document.getElementById("train-built").innerHTML = train.built
document.getElementById("train-cars").innerHTML = train.cars
document.getElementById("train-capacity").innerHTML = train.capacity
document.getElementById("train-image").src = train.images[0]
document.getElementById("train-operator").innerHTML = operatorLink

// Set lines
train.line.forEach(setLines)
function setLines(id, index) {
    var line = lines[id]
    linesHtml += '<div class="col-md-6 mb-3"><a href="./line.html?line=' + id + '"><div class="card h-shadow"><div class="line-card-color" style="background-color: #' + line.color + ';"></div><div class="card-body"><div class="d-flex align-items-center"><h5 class="flex-fill m-0">' + line.name + '</h5><span class="material-symbols-sharp white">chevron_right</span></div></div></div></a></div>'
}

// Set Carousel
train.images.forEach(setGallery)
function setGallery(path, index) {
    carouselGalleryHtml += index == 0 ? '<div class="carousel-item active"><img class="d-block w-100 carousel-gallery-img" src="' + path + '"></div>' : '<div class="carousel-item"><img class="d-block w-100 carousel-gallery-img" src="' + path + '"></div>'
    galleryImgsHtml += index == 0 ? '<div class="col-4 mb-3"><img id="train-gallery-img-' + index + '" class="gallery-img w-100 h-shadow active" src="' + path + '" onclick="changeGallerySlide(' + index + ')"></div>' : '<div class="col-4 mb-3"><img id="train-gallery-img-' + index + '" class="gallery-img w-100 h-shadow" src="' + path + '" onclick="changeGallerySlide(' + index + ')"></div>'
}

document.getElementById("train-lines").innerHTML = linesHtml
document.getElementById("carousel-train-gallery-imgs").innerHTML = carouselGalleryHtml
document.getElementById("train-gallery-imgs").innerHTML = galleryImgsHtml


// Carousel functionality
function changeGallerySlide(slide) {
    $('#carousel-train-gallery').carousel(slide)
}

$('#carousel-train-gallery').on('slid.bs.carousel', function (properties) {
    // change picture size based on the active slide
    var fromImgElement = document.getElementById("train-gallery-img-" + properties.from)
    var toImgElement = document.getElementById("train-gallery-img-" + properties.to)

    fromImgElement.classList.remove("active")
    toImgElement.classList.add("active")
})