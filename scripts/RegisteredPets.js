import { getPets, getWalkers } from "./database.js";

const pets = getPets();
const walkers = getWalkers();

export const RegisteredPets = () => {
  let petHTML = "<ul>";

  for (const pet of pets) {
    petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};

document.addEventListener(
  "click", // This is the type of event
  (clickEvent) => {
    /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
    const itemClicked = clickEvent.target; //this is a property of clickEvent. It will give us the HTML of the item we clicked. In this case, it will be an <li>
    console.log(itemClicked);

    if (itemClicked.id.startsWith("pet")) {
        
      const [, petPrimaryKey] = itemClicked.id.split("--"); 

      let petName = "";
      let walkerName = "";
      let walkerId = 0;
      
      for (const pet of pets) {
        if (pet.id === parseInt(petPrimaryKey)) {
          petName = pet.name;
          walkerId = pet.walkerId;
        }
      }
      for (const walker of walkers) {
        if (walker.id === walkerId) {
          walkerName = walker.name;
        }
      }
      window.alert(`${petName} is being walked by ${walkerName}`);
    }
  }
);
