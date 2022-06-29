// Script for ticket.js

var id = urlParams.get("ticket")
var priceTable = document.getElementById("ticket-prices");

var pricesHtml = ""

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

//Set the info panels
document.title = ticket.name + " - JapanRailFan"
document.getElementById("ticket-name").innerHTML = ticket.name
document.getElementById("ticket-desc").innerHTML = ticket.description
document.getElementById("ticket-consecutive").innerHTML = ticket.vaildConsecutive ? "Consecutive Days" : "Any Day"