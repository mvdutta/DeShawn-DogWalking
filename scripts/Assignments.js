import { getCities, getPets, getWalkerCities, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = `<ul>`
    for (let currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentPetWalterCity = walkerCities.find(el=>el.walkerId===currentPetWalker.id)
        const currentPetWalkerCityName = cities.find(el => el.id===currentPetWalterCity.cityId).name
     let  assignmentString = `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalkerCityName}
            </li>
        `
        assignmentHTML += assignmentString
    }
    assignmentHTML += "</ul>"
    return assignmentHTML
}

