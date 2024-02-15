const findTheOldest = function(people) {
    let person = people[0];

    people.forEach(p => {
        let oldestAge = 0;
        let personAge = 0;

        if ("yearOfDeath" in person) {
            oldestAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            oldestAge = (new Date().getFullYear()) - person.yearOfBirth;
        }

        if ("yearOfDeath" in p) {
            personAge = p.yearOfDeath - p.yearOfBirth;
        } else {
            personAge = (new Date().getFullYear()) - p.yearOfBirth;
        }

        if (personAge > oldestAge) {
            person = p;
        }
    });

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
