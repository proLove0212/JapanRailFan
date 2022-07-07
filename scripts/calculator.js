// Script for calculator.html

//  Init Variables
var list = ""
var saves = ""
var deleteSaveId = ""
const calculatorList = document.getElementById("calculator-list")
const calculatorSaveList = document.getElementById("calculator-save-list")
// const calculatorLoadList = document.getElementById("calculator-load-list")
const calculatorTotalPrice = document.getElementById("calculator-total-price")

// Init function
function initCalculator() {
    calculatorList.innerHTML = ""
    try {
        list = JSON.parse(localStorage.getItem("currentCalculatorList"))
        if (list != null) {
            if (list.items.length != 0) {
                // load list into html
                list.items.forEach((item, index) => {
                    const ticket = tickets[item.ticketId]
                    const name = ticket.name
                    const price = item.price * item.quantity
                    const duration = ticket.valid[item.duration]
                    const quantity = item.quantity
                    const itemHtml = '<div class="col-12" id="item-' + index + '"><div class="card mb-3"><div class="card-body"><div class="d-flex mb-3"><div class="flex-fill"><h5 id="ticket-name-' + index + '" class="card-title">' + name + '</h5><p id="ticket-qty-days-' + index + '" class="m-0">' + quantity + ' Persons - ' + duration + ' Days</p></div><div><h5 id="ticket-price-' + index + '">¥' + price + '</h5></div></div><div class="d-flex"><button id="add-item-btn-' + index + '" onclick="addItemButtonClicked(this)" class="custom-btn mr-3 d-flex justify-content-center" data-toggle="tooltip" data-placement="bottom" title="Increase Quantity"><span class="material-symbols-sharp">add</span></button><button id="minus-item-btn-' + index + '" onclick="minusItemButtonClicked(this)" class="custom-btn mr-3 d-flex justify-content-center" data-toggle="tooltip" data-placement="bottom" title="Decrease Quantity"><span class="material-symbols-sharp">remove</span></button><button id="delete-item-btn-' + index + '" onclick="deleteItemButtonClicked(this)" class="custom-btn mr-3 d-flex justify-content-center" data-toggle="tooltip" data-placement="bottom" title="Delete Item"><span class="material-symbols-sharp">delete</span></button></div></div></div></div>'
                    calculatorList.innerHTML += itemHtml
                    calculatorTotalPrice.innerHTML = "¥" + calculateCalculatorList(list)
                });
            } else {
                displayNoItems()
            }
        } else {
            displayNoItems()
        }
    } catch (error) {
        displayLoadingError(error)
    }
}

function initSaveModal() {
    calculatorSaveList.innerHTML = ""
    try {
        saves = JSON.parse(localStorage.getItem("calculatorSaves"))
        if (saves != null) {
            if (Object.keys(saves).length != 0) {
                // Get Save data and display
                for (const [saveKey, save] of Object.entries(saves)) {
                    const saveName = save.listName
                    const saveId = saveName.replace(/ /g, "-")
                    const saveItemCount = save.items.length
                    const saveTotalCost = calculateCalculatorList(save)
                    const saveHtml = '<div class="col-12 mb-1"><div class="card gray"><div class="card-body"><div class="mb-1"><strong class="white">' + saveName + '</strong><br><small class="m-0 white">' + saveItemCount + ' Items - ¥' + saveTotalCost + '</small></div><div class="d-flex"><button type="button" id="save-saveas-btn-' + saveId + '" onclick="saveAsButtonClicked(this)"class="mr-1 p-1 custom-btn transparent-btn d-flex justify-content-center"><span class="material-symbols-sharp">save_as</span></button><button type="button" id="save-delete-btn-' + saveId + '" onclick="saveDeleteButtonClicked(this)"class="mr-1 p-1 custom-btn transparent-btn d-flex justify-content-center" data-toggle="modal" data-target="#deleteSaveModal" data-dismiss="modal"><span class="material-symbols-sharp">delete</span></button></div></div></div></div>'
                    calculatorSaveList.innerHTML += saveHtml

                }
            } else {
                displayNoSaves()
            }
        } else {
            saves = {}
            displayNoSaves()
        }
    } catch (error) {
        // Reset the save value
        createAlert("alert-area","alert-danger","Failed to load saves. Existing saves has been erased")
        localStorage.setItem("calculatorSaves", JSON.stringify({}))
        displayNoSaves()
    }
}

function displayNoItems() {
    // Show no items in the list
    createAlert("alert-area","alert-warning","There are no items in the list to calculate")
    calculatorList.innerHTML = '<div class="col-12"><div class="card mb-3"><div class="card-body d-flex justify-content-center align-items-center"><h6 class="m-0">No Items in list</h6></div></div></div>'
    calculatorTotalPrice.innerHTML = "¥0"
}

function displayNoSaves() {
    // Show no items in the list
    calculatorSaveList.innerHTML = '<div class="col-12"><div class="card gray mb-1"><div class="card-body d-flex justify-content-center align-items-center"><h6 class="m-0">No saved lists</h6></div></div></div>'
}

function displayLoadingError(error) {
    // Show fail to load list with error message
    createAlert("alert-area","alert-danger","Failed to load the list (" + error + ")")
    calculatorList.innerHTML = '<div class="col-12"><div class="card mb-3"><div class="card-body d-flex justify-content-center align-items-center"><h6 class="m-0">Failed to load the list</h6></div></div></div>'
    calculatorTotalPrice.innerHTML = "¥0"
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
    calculatorTotalPrice.innerHTML = "¥" + calculateCalculatorList(list)
}

// Minus button function for individual items
function minusItemButtonClicked(element) {
    const itemId = element.id.replace("minus-item-btn-", "")
    const item = list.items[itemId]
    const ticket = tickets[item.ticketId]

    if (parseInt(item.quantity) == 1) {
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
    calculatorTotalPrice.innerHTML = "¥" + calculateCalculatorList(list)
}

// Delete button function for individual items
function deleteItemButtonClicked(element) {
    const itemId = element.id.replace("delete-item-btn-", "")

    // Delete item and save
    list.items.splice(itemId, 1)
    localStorage.setItem("currentCalculatorList", JSON.stringify(list))
    // document.getElementById("item-" + itemId).remove()
    // init again (Not the most efficent way but its okay)
    initCalculator()
}

// Delete button function for entire list
function deleteListButtonClicked() {
    localStorage.removeItem("currentCalculatorList")
    initCalculator()
}

// Save to list button function
function saveAsButtonClicked(element) {
    saveAsId = element.id.replace("save-saveas-btn-", "").replace(/-/g, " ")
    document.getElementById("save-name").value = saveAsId
}

function saveDeleteButtonClicked(element) {
    // Get save ID to prepare for delete
    deleteSaveId = element.id.replace("save-delete-btn-", "")
}

function exportlistButtonClicked() {
    // Set textarea to list json
    document.getElementById("export-list-textarea").value = JSON.stringify(list)
}

// On save form submit
$("#calculator-save-form").submit(function (e) {
    e.preventDefault()
    var saveName = document.getElementById("save-name").value
    var saveId = saveName.replace(/ /g, "-")
    list.listName = saveName

    // Save into current LocalStroage and save object
    saves[saveId] = list
    localStorage.setItem("currentCalculatorList", JSON.stringify(list))
    localStorage.setItem("calculatorSaves", JSON.stringify(saves))
    initSaveModal()
    createAlert("save-alert-area", "alert-success", "Successfully saved!")
})

function deleteSaveButtonClicked() {
    delete saves[deleteSaveId]
    localStorage.setItem("calculatorSaves", JSON.stringify(saves))
    initSaveModal()
    createAlert("save-alert-area", "alert-success", "Successfully deleted!")
}

// Listener for LocalStorage changes to update lists/saves
window.addEventListener('storage', (e) => {
    // Check whether saves or the current list is being updated and sync
    if (e.key == "currentCalculatorList") {
        list = JSON.parse(e.newValue)
        initCalculator()
    } else if (e.key == "calculatorSaves") {
        saves = JSON.parse(e.newValue)
        initSaveModal()
    }
});

// Init on first load
initCalculator()