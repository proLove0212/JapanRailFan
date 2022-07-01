// Script for ticket.js

var id = urlParams.get("ticket")
var priceTable = document.getElementById("ticket-prices");

var pricesHtml = ""
var linesHtml = ""

if (id == null) {
    window.location.href = "./lines.html";
}

var ticket = tickets[id]

ticket.valid.forEach(function(item, index) {
    var days = item
    var price = ticket.cost[index]

    var row = priceTable.insertRow(-1)
    var durationCell = row.insertCell(0)
    var priceCell = row.insertCell(1)

    durationCell.innerHTML = days + " Days"
    priceCell.innerHTML = "¥" + price
});

for (const [lineKey, value] of Object.entries(lines)) {
    if (ticket.operators.includes(value.operator)) {
        var lineName = value.name
        var length = value.length
        var color = value.color

        linesHtml += '<div class="col-md-6 col-lg-4 mb-3"><a href="./line.html?line=' + lineKey + '"><div class="card h-shadow"><div class="w-100 d-flex justify-content-center align-items-center" style="background-color:#' + color + ';"><span class="material-symbols-sharp category-icon my-5">route</span></div><div class="card-body d-flex align-items-center"><div class="flex-fill"><h5 class="card-title m-0">' + lineName + '</h5><small class="white">' + length + ' km</small></div><span class="material-symbols-sharp white">chevron_right</span></div></div></a></div>'
    }
}

//Set the info panels
document.title = ticket.name + " - JapanRailFan"
document.getElementById("ticket-name").innerHTML = ticket.name
document.getElementById("ticket-desc").innerHTML = ticket.description
document.getElementById("ticket-consecutive").innerHTML = ticket.vaildConsecutive ? "Consecutive Days" : "Any Day"
document.getElementById("ticket-vaild-lines").innerHTML = linesHtml