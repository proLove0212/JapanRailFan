// Script for tickets.html

var content = document.getElementById("tickets")
var ticketsHtml = ""

for (const [ticketKey, value] of Object.entries(tickets)) {
    var ticketName = value.name
    var desc = value.description
    var days = value.valid
    var consecutive = value.vaildConsecutive

    var validText = ''
    days.forEach(function(item, index) {
        validText += item

        if (!(index == days.length - 1)) {
            validText += ", "
        }
    })

    if (consecutive) {
        validText += " consecutive days"
    } else {
        validText += " of any days"
    }

    ticketsHtml += '<div class="col-md-6 col-lg-4 mb-3"><a href="./ticket.html?ticket=' + ticketKey + '"><div class="card h-shadow"><div class="card-body"><div class="d-flex align-items-center"><h5 id="ticket-name" class="card-title flex-fill m-0">' + ticketName + '</h5><span class="material-symbols-sharp white">chevron_right</span></div><small id="ticket-valid" class="white">' + validText + '</small><p id="ticket-desc" class="m-0 mt-3">' + desc + '</p></div></div></a></div>'
}

content.innerHTML = ticketsHtml