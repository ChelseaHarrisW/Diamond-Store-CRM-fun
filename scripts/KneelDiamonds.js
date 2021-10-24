
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import {addCustomOrder} from "./database.js"
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)
// wrap in div for easy rows
export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <div> <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section> </div>
            <div> <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section> </div>
            <div><section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section> </div>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
        
    ` //prices can be added here!! once function works
}



// this whole page is rendering the doument into Html

