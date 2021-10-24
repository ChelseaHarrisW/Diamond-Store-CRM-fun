import { getOrders, getMetals, getStyles, getSizes } from "./database.js"

const styles = getStyles()
const metals = getMetals() // we do this to keep the page from rerendering the html. Google rendering, and rerendering this prevents 404 errors
const sizes = getSizes()
const buildOrderListItem = (order) => { //this function
    //needed here to access though the fx
    // we dont need to write out a ull function here because the scope is the same here. metals represents an array
    // when putting things into the mod withour wrapping you will load so many thing imediately hence 404 errors.
    // use existing function to hold the items
    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find( //setting found metal = to the return of the fx below

        (metal) => {
            // . find replaces the loop so the following code id not needed atm: const (metal of metals)

            return metal.id === order.metalId // reffering to the set functions in the custom orrders array
        }
    )

    const foundStyle = styles.find( //setting found metal = to the return of the fx below

        (style) => {
            // . find replaces the loop so the following code id not needed atm: const (metal of metals)

            return style.id === order.styleId // reffering to the set functions in the custom orrders array
        } //remimber this returns an obj where line 26 is true
    )
    const foundSize = sizes.find( //setting found metal = to the return of the fx below

        (size) => {
            // . find replaces the loop so the following code id not needed atm: const (metal of metals)

            return size.id === order.sizeId // reffering to the set functions in the custom orrders array
        } //remimber this returns an obj where line 26 is true
    )
    const totalCost = foundMetal.price + foundStyle.price + foundSize.price // use debugger on next line because we want to inspect this line.
    // accessing price valur to get total cost

    // to get the tru total price then we need to add all the componennts together
    const costString = totalCost.toLocaleString("en-US", { // takes the total cost and formats it with dollar sighn to rep USD
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}





    /* return `<li>
         Order #${order.id} was placed on ${order.timestamp}
     </li>` */ //this was for testing purposes

export const Orders = () => { // this function rerenders the html to populate the info below the button.
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem) //using data from orders Aaray to create a new aaray under the condition to buildOrderListItem 
    //
    html += listItems.join("")
    html += "</ul>"

    return html
}

// look into click event handlers


// this info connect to the last fx in database. this will allow the orders to print the statements for the order
