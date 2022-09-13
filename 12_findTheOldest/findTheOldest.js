const findTheOldest = function(array) {
    return array.reduce((prePerson, currentPerson) =>{
        const preAge = getAge(prePerson.yearOfDeath, prePerson.yearOfBirth)
        const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth) // dont need to getAge() here but its more readable
        return currentAge > preAge ? currentPerson : prePerson
    })
};

function getAge(deathYear, birthYear){
    if(!deathYear){
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}
// Do not edit below this line
module.exports = findTheOldest;
