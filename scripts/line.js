// Script for line.html

var id = urlParams.get("line")
var trainHtml = ""
var trainContent = document.getElementById("line-trains")
var carouselGalleryHtml = ""
var galleryImgsHtml = ""

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

// Get rolling stock information
for (const [trainKey, trainValue] of Object.entries(trains)) {
    if (trainValue.line.includes(id)) {
        trainHtml += '<div class="col-md-6 col-lg-4 mb-3" id="train-' + trainKey + '"><a href="./train.html?train=' + trainKey + '"><div class="card h-100 h-shadow"><img class="card-img-top" src="' + trainValue.images[0] + '"><div class="card-body d-flex align-items-center"><h5 class="flex-fill m-0">' + trainValue.name + '</h5><span class="material-symbols-sharp white">chevron_right</span></div></div></a></div>'
    }
}

// Set rolling stock information
trainContent.innerHTML = trainHtml

// Todo: Create a function in common.js to shorten code for carousel function
// Set Carousel for image gallery
line.images.forEach(setGallery)
function setGallery(path, index) {
    carouselGalleryHtml += index == 0 ? '<div class="carousel-item active"><img class="d-block w-100 carousel-gallery-img" src="' + path + '"></div>' : '<div class="carousel-item"><img class="d-block w-100 carousel-gallery-img" src="' + path + '"></div>'
    galleryImgsHtml += index == 0 ? '<div class="col-4 mb-3"><img id="line-gallery-img-' + index + '" class="gallery-img w-100 h-shadow active" src="' + path + '" onclick="changeGallerySlide(' + index + ')"></div>' : '<div class="col-4 mb-3"><img id="line-gallery-img-' + index + '" class="gallery-img w-100 h-shadow" src="' + path + '" onclick="changeGallerySlide(' + index + ')"></div>'
}

document.getElementById("carousel-line-gallery-imgs").innerHTML = carouselGalleryHtml
document.getElementById("line-gallery-imgs").innerHTML = galleryImgsHtml


// Carousel functionality
function changeGallerySlide(slide) {
    $('#carousel-line-gallery').carousel(slide)
}

$('#carousel-line-gallery').on('slid.bs.carousel', function (properties) {
    // change picture size based on the active slide
    var fromImgElement = document.getElementById("line-gallery-img-" + properties.from)
    var toImgElement = document.getElementById("line-gallery-img-" + properties.to)

    fromImgElement.classList.remove("active")
    toImgElement.classList.add("active")
})