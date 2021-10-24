/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = { // main data base to the module
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 }, // perm. state
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}, // empty array to hold all of the orders information
} //^^ also denoted as transient state 


    

// using the 
export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getStyles = () => {
    return database.styles.map(styles => ({...styles}))
}

export const getSizes = () => {
    return database.sizes.map(sizes => ({...sizes}))
}

export const getOrders = () => { 
   
    return database.customOrders.map(customOrders => ({...customOrders}))
}

// set functions here are traacking the metals user picked and setting an ID to it
export const setMetal = (id) => {
     ///add clayId to the potBuilder obj returns the 
    database.orderBuilder.metalId = id
} // will be imported to provide info to that peice of the web page

export const setSize = (id) => { // the id parameter bing passed in  because it is relying on the change event
    database.orderBuilder.sizeId = id // this is creating Id to  put into custom ordrs
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1 // this is to initiallize the length to match the order
    newOrder.id = database.customOrders[lastIndex].id + 1 // adding one to the orders

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {} // sets transient to per/solid state

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}