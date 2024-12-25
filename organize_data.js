const people = [
  {
    name: "Rahul",
    city: "Pune",
    age: 30,
    occupation: "software engineer",
    hobbies: [{ playing: "chess", Gardening: "watering plants" }],
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
  people.filter(({ occupation }) => occupation !== false).length;

// 2. How many people own a car?

const peopleWhoOwnedCar = (people) =>
  people.filter(({ vehicles }) => vehicles.includes("car")).length;

// 3. How many pets are fully vaccinated?

const totalVaccinatedPets = (people) =>
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
  people.filter(({ occupation }) => occupation === false).length;

// 8. What is the average age of the individuals mentioned in the passage?

const averageOfArray = (array) =>
  array.reduce((accumuator, number) => accumuator + number, 0) / array.length;

const averageOfAges = function (people) {
  return averageOfArray(people.map(({ age }) => age));
};

// 9. How many individuals have studied computer science, and how many of them have pets?

const petsOfComputerSciencePeople = (people) =>
  people
    .filter(({ education }) => education === "computer science")
    .flatMap(({ pets }) => pets).length;

// 10. How many individuals own more than one pet?

const peopleWithMoreThanOnePet = (people) =>
  people.filter((person) => person.pets.length > 1).length;

// 11. Which pets are associated with specific favorite activities?

const petNameAndActivities = (people) =>
  allPets(people).map(({ name, favouriteActivities }) => ({
    name,
    favouriteActivities,
  }));

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const petsOfPeopleFromBangloreAndChennai = (people) =>
  people
    .filter(({ city }) => city in { Banglore: true, Chennai: true })
    .flatMap(({ pets }) => pets.flatMap(({ name }) => ({ name })));

// 13. How many vaccinated pets belong to people who do not own a car?

const vacinatedPetsOfNoCarPeople = (people) =>
  people
    .filter(({ vehicles }) => !vehicles.includes("car"))
    .flatMap(({ pets }) => pets)
    .filter(({ vaccinated }) => vaccinated).length;

// 14. What is the most common type of pet among the group?

const occurances = (occurances, element) => {
  element in occurances
    ? (occurances[element] += 1)
    : (occurances[element] = 1);

  return occurances;
};

const maxOccurances = (maxOccuredPet, pet) =>
  maxOccuredPet[1] > pet[1] ? maxOccuredPet : pet;

const commonPet = (people) => {
  const totalOccurances = allPets(people)
    .map(({ type }) => type)
    .reduce(occurances, {});

  return Object.entries(totalOccurances).reduce(maxOccurances)[0];
};

console.log(commonPet(people));
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

const peopleInCityNameStartingWithB = (people) =>
  people.filter(({ city }) => city.startsWith("B")).length;

// 20. Which individuals do not own any pets?

const peopleWhoDoesntOwnPet = (people) =>
  people.filter(({ pets }) => pets.length === 0);

// ----------------------------- TEST CASES ---------------------------\\
const testing = function (Question, func) {
  console.log("Qns ", Question);
  console.log("Ans ", func(people));
};

const testCases = () => {
  testing("1. How many individuals are currently employed?", employedPeople);
  testing("2. How many people own a car?", peopleWhoOwnedCar);
  testing("3. How many pets are fully vaccinated?", totalVaccinatedPets);
  testing(
    "4. What are the names of all the pets, and what type of animal is each?",
    nameAndTypeOfPets
  );
  testing("5. Which cities do the individuals live in?", cities);
  testing(
    "6. How many hobbies are shared across the group? What are they?",
    hobbiesOfPeople
  );
  testing(
    "7. How many pets belong to people who are currently unemployed?",
    petsOfUnEmployed
  );
  testing(
    "8. What is the average age of the individuals mentioned in the passage?",
    averageOfAges
  );
  testing(
    "9. How many individuals have studied computer science, and how many of them have pets?",
    petsOfComputerSciencePeople
  );
  testing(
    "10. How many individuals own more than one pet?",
    peopleWithMoreThanOnePet
  );
  testing(
    "11. Which pets are associated with specific favorite activities?",
    petNameAndActivities
  );
  testing(
    "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?",
    petsOfPeopleFromBangloreAndChennai
  );
  testing(
    "13. How many vaccinated pets belong to people who do not own a car?",
    vacinatedPetsOfNoCarPeople
  );
  testing(
    "15. How many individuals have more than two hobbies?",
    peopleWithMoreThanTwoHobbies
  );
  testing("17. Which pet is the youngest, and what is its name?", youngestPet);
  testing(
    "19. How many individuals live in cities starting with the letter 'B'?",
    peopleInCityNameStartingWithB
  );
  testing("20. Which individuals do not own any pets?", peopleWhoDoesntOwnPet);
};

// testCases();
