// Script for calculator.html

// Variables
var list = JSON.parse(localStorage.getItem("currentCalculatorList"))
const calculatorList = document.getElementById("calculator-list")
const calculatorTotalPrice = document.getElementById("calculator-total-price")

// Init function
function initCalculator() {
    calculatorList.innerHTML = ""
    console.log(list != null)
    if (list != null) {
        // load list into html
        list.items.forEach((item, index) => {
            const ticket = tickets[item.ticketId]
            const name = ticket.name
            const price = item.price * item.quantity
            const duration = ticket.valid[item.duration]
            const quantity = item.quantity
            const itemHtml = '<div class="col-12"><div class="card mb-3"><div class="card-body"><div class="d-flex mb-3"><div class="flex-fill"><h5 id="ticket-name-' + index + '" class="card-title">' + name + '</h5><p id="ticket-qty-days-' + index + '" class="m-0">' + quantity + ' Persons - ' + duration + ' Days</p></div><div><h5 id="ticket-price-' + index + '">¥' + price + '</h5></div></div><div class="d-flex"><button id="add-item-btn-' + index + '" onclick="addItemButtonClicked(this)" class="custom-btn mr-3 d-flex justify-content-center"><span class="material-symbols-sharp">add</span></button><button id="minus-item-btn-' + index + '" onclick="minusItemButtonClicked(this)" id="item-add-btn-' + index + '" class="custom-btn mr-3 d-flex justify-content-center"><span class="material-symbols-sharp">remove</span></button><button id="delete-item-btn-' + index + '" onclick="deleteItemButtonClicked(this)" class="custom-btn mr-3 d-flex justify-content-center"><span class="material-symbols-sharp">delete</span></button></div></div></div></div>'
            calculatorList.innerHTML += itemHtml
            calculatorTotalPrice.innerHTML = "¥" + calculateCalculatorList()
        });
    
    } else {
        // Show no items in the list
        createAlert("alert-area","alert-warning","There are no items in the list to calculate")
        calculatorList.innerHTML = '<div class="col-12"><div class="card mb-3"><div class="card-body d-flex justify-content-center align-items-center"><h6 class="m-0">No Items in list</h6></div></div></div>'
        calculatorTotalPrice.innerHTML = "¥0"
    }
}

// Functions to handle button clicks
// Add button function for individual items
// TODO: Merge add and subtract functions to reduce duplication
function addItemButtonClicked(element) {
    // alert(element.id)
    const itemId = element.id.replace("add-item-btn-", "")
    const item = list.items[itemId]
    const ticket = tickets[item.ticketId]

    const itemQty = parseInt(item.quantity) + 1
    const itemPrice = itemQty * item.price
    const duration = ticket.valid[item.duration]

    list.items[itemId].quantity = itemQty
    localStorage.setItem("currentCalculatorList", JSON.stringify(list))
    document.getElementById("ticket-qty-days-" + itemId).innerHTML = itemQty + " Persons - " + duration + " Days"
    document.getElementById("ticket-price-" + itemId).innerHTML = "¥" + itemPrice
    calculatorTotalPrice.innerHTML = "¥" + calculateCalculatorList()
}

// Minus button function for individual items
function minusItemButtonClicked(element) {
    const itemId = element.id.replace("minus-item-btn-", "")
    const item = list.items[itemId]
    const ticket = tickets[item.ticketId]

    if (parseInt(parseInt(item.quantity)) == 1) {
        alert("Minimum of 1 ticket (WIP)")
        return
    }

    const itemQty = parseInt(item.quantity) - 1
    const itemPrice = itemQty * item.price
    const duration = ticket.valid[item.duration]

    list.items[itemId].quantity = itemQty
    localStorage.setItem("currentCalculatorList", JSON.stringify(list))
    document.getElementById("ticket-qty-days-" + itemId).innerHTML = itemQty + " Persons - " + duration + " Days"
    document.getElementById("ticket-price-" + itemId).innerHTML = "¥" + itemPrice
    calculatorTotalPrice.innerHTML = "¥" + calculateCalculatorList()
}

// Delete button function for individual items
function deleteItemButtonClicked(element) {
    alert(element.id)
}

// Delete button function for entire list
function deleteListButtonClicked() {

}

// Init on first load
initCalculator()