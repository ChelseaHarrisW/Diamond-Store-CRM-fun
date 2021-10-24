/*import { getMetals, } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
) thos is to chow a change event with a window anouncement which we no longer want*/

import { getMetals, setMetal } from "./database.js"
/// set metal imported here 
const metals = getMetals()

document.addEventListener( // function that 
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)
    



export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}





