const people = [
  {
    name: "Rahul",
    city: "Pune",
    age: 30,
    occupation: "software engineer",
    hobbies: [{ playing: "playing chess", Gardening: "watering plants" }],
    education: "computer science",
    vehicles: ["car"],
    pets: [
      {
        type: "dog",
        name: "max",
        age: 4,
        vaccinated: true,
        isFullyVacinated: true,
        breed: "golden retriever",
        favouriteActivities: ["playing fetch in park"],
      },
    ],
  },
  {
    name: "Ananya",
    city: "Banglore",
    age: 30,
    occupation: false,
    hobbies: [{ cooking: "trying italian recipes" }],
    education: "computer science",
    vehicles: [],
    pets: [
      {
        type: "bird",
        name: "kiwi",
        age: false,
        vaccinated: true,
        isFullyVacinated: false,
        breed: false,
        favouriteActivities: [],
      },
    ],
  },
  {
    name: "Ramesh",
    city: "Jaipur",
    age: 45,
    occupation: "Business Owner",
    education: "BA",
    vehicles: [],
    hobbies: [
      { Gardening: "tending rose garden", Reading: "historical friction" },
    ],
    pets: [
      {
        type: "cat",
        name: "bella",
        age: 3,
        vaccinated: true,
        isFullyVacinated: true,
        breed: "Persian cats",
        favouriteActivities: ["love lounging in the sun"],
      },
      {
        type: "cat",
        name: "leo",
        age: 3,
        vaccinated: true,
        isFullyVacinated: true,
        breed: "Persian cats",
        favouriteActivities: ["love lounging in the sun"],
      },
    ],
  },
  {
    name: "Kavya",
    city: "Chennai",
    age: 28,
    occupation: false,
    education: "computer science",
    hobbies: [
      {
        Reading: "modern fantasy novels",
        watching: "Binge-Watching sci-fi shows",
      },
    ],
    vehicles: [],
    skills: ["Dancing"],
    pets: [
      {
        type: "Rabbit",
        name: "snowy",
        age: 2,
        vaccinated: true,
        isFullyVacinated: false,
        breed: false,
        favouriteActivities: [
          "enjoys hopping around her backyard ",
          "nibbling on carrots",
        ],
      },
    ],
  },
];

// ----------------------- ALL PETS OF PEOPLE -------------------------\\

const allPets = (people) => people.flatMap(({ pets }) => pets);

// 1. How many individuals are currently employed?

const employedPeople = (people) =>
  people.filter(({ occupation }) => occupation).length;

// 2. How many people own a car?

const peopleWhoOwnVehicle = (people, vehicle) =>
  people.filter(({ vehicles }) => vehicles.includes(vehicle)).length;

// 3. How many pets are fully vaccinated?

const fullyVaccinatedPets = (people) =>
  allPets(people).filter(({ isFullyVacinated }) => isFullyVacinated).length;

// 4. What are the names of all the pets, and what type of animal is each?

const nameAndTypeOfPets = (people) =>
  allPets(people).map(({ name, type }) => ({ name, type }));

// 5. Which cities do the individuals live in?

const cities = (people) => people.map(({ city }) => city);

// 6. How many hobbies are shared across the group? What are they?

const hobbiesOfPeople = (people) => {
  const hobbiesOfPeople = people.flatMap(({ name, hobbies }) => ({
    name,
    hobbies,
  }));

  return [hobbiesOfPeople.length, hobbiesOfPeople];
};

// 7. How many pets belong to people who are currently unemployed?

const petsOfUnEmployed = (people) =>
  people.filter(({ occupation }) => !occupation).length;

// 8. What is the average age of the individuals mentioned in the passage?

const averageOfGroup = (array) =>
  array.reduce((accumuator, number) => accumuator + number, 0) / array.length;

const averageOfAges = function (people) {
  return averageOfGroup(people.map(({ age }) => age));
};

// 9. How many individuals have studied computer science, and how many of them have pets?

const petsOfDegreeHolders = (people, degree) =>
  people
    .filter(({ education }) => education === degree)
    .flatMap(({ pets }) => pets).length;

// 10. How many individuals own more than one pet?

const peopleWithMoreThanOnePet = (people) =>
  people.filter(({ pets }) => pets.length > 1).length;

// 11. Which pets are associated with specific favorite activities?

const petNamesAndActivities = (people) =>
  allPets(people).map(({ name, favouriteActivities }) => ({
    name,
    favouriteActivities,
  }));

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai or vijayawada?

const petsOfPeopleFromCities = (people, cities) =>
  people
    .filter(({ city }) => cities.includes(city))
    .flatMap(({ pets }) => pets.flatMap(({ name }) => ({ name })));

// 13. How many vaccinated pets belong to people who do not own a car?

const vacinatedPetsOfPeopleWithoutVehicle = (people, vehicle) =>
  people
    .filter(({ vehicles }) => !vehicles.includes(vehicle))
    .flatMap(({ pets }) => pets)
    .filter(({ vaccinated }) => vaccinated).length;

// 14. What is the most common type of pet among the group?

const occurances = (occurance, element) => {
  occurance[element] = occurance[element] || 0;
  occurance[element] += 1;

  return occurance;
};

const maxOccurances = (maxOccuredPet, pet) =>
  maxOccuredPet[1] > pet[1] ? maxOccuredPet : pet;

const commonPet = (people) => {
  const totalOccurances = allPets(people)
    .map(({ type }) => type)
    .reduce(occurances, {});

  return Object.entries(totalOccurances).reduce(maxOccurances)[0];
};

// 15. How many individuals have more than two hobbies?

const peopleWithMoreThanTwoHobbies = (people) =>
  people.filter(({ hobbies }) => hobbies.length > 2).length;

// 17. Which pet is the youngest, and what is its name?

const youngestPet = function (people) {
  const youngPet = allPets(people).reduce((youngPet, pet) =>
    pet.age < youngPet.age ? pet : youngPet
  );

  return { petName: youngPet.name, petType: youngPet.type };
};

// 19. How many individuals live in cities starting with the letter "B"?

const peopleInCityNameStartingWithChar = (people, char) =>
  people.filter(({ city }) => city.startsWith(char)).length;

// 20. Which individuals do not own any pets?

const peopleWhoDoesntOwnPet = (people) =>
  people.filter(({ pets }) => !pets.length);
