import { getCities, getWalkerCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const  cities = getCities()
const walkerCities = getWalkerCities()

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

//define a function that will get all objects in the walkerCities array that are for the walker that was clicked on. It should return an array of all matching objects. This function will need the walker information(parameter)
export const filterWalkerCitiesByWalker = (walker) => {
    //define an empty array to store all of the assignment objects:
    const assignmentsArray = [];
    //loop through walkerCities:
    for (let assignment of walkerCities) {
        //check if the primary key (walker.id) of the walker equals the foreign key (walkerId in walkerCities) on the assignment:
        if (assignment.walkerId === walker.id) {
            //if it does, add the current object to the array of assignments:
            assignmentsArray.push(assignment)
        }
    }
    //after the loop is done, return the assignmentsArray
    return assignmentsArray
}
export const assignedCityNames = (assignmentsArray) => {
    //define an empty string that will hold the matching cities:
    let cityNames = ""
    //loop through all objects in assignmentsArray and get the cityId and then using the cityId, find the cities and then return the cities as a string. For example, assignmentsArray might be:
    // [{ id: 1, walkerId: 10, cityId: 1 }, { id: 14, walkerId: 10, cityId: 2 }]
    for (let assignment of assignmentsArray) {
       //for each assignment, loop throught the cities to find the matching city
       for (let city of cities) {
        if (assignment.cityId === city.id) {
            cityNames += `${city.name}, `
        }
       }
    }
    cityNames = cityNames.slice(0, -2)//removes extra comma at the end of the string
    return cityNames
}