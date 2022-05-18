var id = urlParams.get("train")


if (id == null) {
    window.location.href = "./trains.html";
}
console.log(id)
var train = trains[id]

// Set the info panels
document.getElementById("train-name").innerHTML = train.name
document.getElementById("train-desc").innerHTML = train.description
document.getElementById("train-image").src = train.images[0]
