import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target//this is a property of clickEvent. It will give us the HTML of the item we clicked. In this case, it will be an <li>
        console.log(itemClicked)

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
            if (itemClicked.id.startsWith("pet")) {//if the id starts with 'walker", then do the following: (if it does not, nothing happens)

                /*
                    Extract the primary key from the id attribute of the list
                    item that you clicked on. Refer back to the code you
                    wrote for each list item. Note the format of the id
                    attribute ("walker--2" if you clicked on the second one).
    
                    This code splits that string apart into an array, and
                    captures the "2" and assigns it to be the value of the
                    `walkerId` variable.
    
                    Splitting a string in JavaScript:
                        https://www.youtube.com/watch?v=u2ZocmM93yU
    
                    Destructuring in JavaScript:
                        https://www.youtube.com/watch?v=UgEaJBz3bjY
                */
                const [, petPrimaryKey] = itemClicked.id.split("--")//On the right side, We are first splitting the id into two strings using the -- as a separator. The first string will be "walker" the second will be a number, which is the walker's id number. The seperator disappears. On the left side, we use array destructuring to retrieve the second element of the array into which the string was split and store it in a new variable called "walkerID". The firse element of the array ("walker") is not important, so it is not included, however the comma indicates that the first element is not required

                /*   practice code from Replit
                    let str = "walker--7"
                    let splitStringArray = str.split("--")
                    console.log(splitStringArray)
                    //to retrieve the second element of splitStringArray ('7') and store it as a new variable called walkersIdentification:
                    let walkersIdentification = splitStringArray[1]
                    //same thing as above, but using destructuring:
                    let [dontCare, walkerId] =splitStringArray
                    console.log(dontCare)
                    console.log(walkerId)
                */
    
                /*
                    Now that you have the primary key of a walker object,
                    find the whole object by iterating the walkers array.
                */
                for (const pet of pets) {
    
                    /*
                        Compare the primary key of each walker to the one
                        you have. As soon as you find the right one, display
                        the window alert message.
                    */
                    if (pet.id === parseInt(petPrimaryKey)) {
                        window.alert(`${pet.name} barks at you`)
                    }
                }
            }
    }
)