// Script file for ticket calculator related functions

// Function to add a ticket item into the current list
function insertCalculatorList(ticketId, duration, price, quantity) {
    // Create object with user choices for storage
    const itemObject = {
        ticketId: ticketId,
        duration: duration,
        price: price,
        quantity: quantity
    }
    // Get current localstorage list
    var localStorageObject = localStorage.getItem("currentCalculatorList")
    if (localStorageObject === null) {
        // Localstorage item does not exist, create new object.
        // Create the base object and insert itemObject
        var base = {
            listName: "Current List",
            items: [
                itemObject
            ]
        }

        // Save newly created object into localstorage
        localStorage.setItem("currentCalculatorList", JSON.stringify(base))
    } else {
        // Localstorage item exists, directly append to the list
        localStorageObject = JSON.parse(localStorageObject)
        localStorageObject.items.push(itemObject)

        // Save object back into localstorage
        localStorage.setItem("currentCalculatorList", JSON.stringify(localStorageObject))
    }
}

// Function to return the total cost in a LocalStorage list
function calculateCalculatorList() {
    // Get the current list from localstorage to calculate
    const list = JSON.parse(localStorage.getItem(localStorage.getItem("currentCalculatorList")))
    var sum = 0

    // Loop list to sum up total
    list.items.forEach(item => {
        sum += item.price * item.quantity
    });

    return sum
}