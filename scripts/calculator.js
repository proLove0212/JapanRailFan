// Script for calculator.html

// Variables
var list = JSON.parse(localStorage.getItem(localStorage.getItem("currentCalculatorList")))
const calculatorList = document.getElementById("calculator-list")
const calculatorTotalPrice = document.getElementById("calculator-total-price")

// Init on first load
initCalculator()

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
            const duration = ticket.duration
            const quantity = ticket.quantity
            const itemHtml = '<div class="col-12"><div class="card mb-3"><div class="card-body"><div class="d-flex mb-3"><div class="flex-fill"><h5 id="ticket-name-' + index + '" class="card-title">' + name + '</h5><p id="ticket-qty-days-0" class="m-0">' + quantity + ' Persons - ' + duration + ' Days</p></div><div><h5 id="ticket-price-0">¥' + price + '</h5></div></div><div class="d-flex"><button id="add-item-btn-' + index + '" onclick="addItemButtonClicked(this)" class="custom-btn mr-3 d-flex justify-content-center"><span class="material-symbols-sharp">add</span></button><button id="minus-item-btn-' + index + '" onclick="minusItemButtonClicked(this)" id="item-add-btn-0" class="custom-btn mr-3 d-flex justify-content-center"><span class="material-symbols-sharp">remove</span></button><button id="delete-item-btn-' + index + '" onclick="deleteItemButtonClicked(this)" class="custom-btn mr-3 d-flex justify-content-center"><span class="material-symbols-sharp">delete</span></button></div></div></div></div>'
            calculatorList.innerHTML += itemHtml
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
function addItemButtonClicked(element) {
    alert(element.id)
}

// Minus button function for individual items
function minusItemButtonClicked(element) {

}

// Delete button function for individual items
function deleteItemButtonClicked(element) {

}

// Delete button function for entire list
function deleteListButtonClicked() {

}