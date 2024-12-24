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
        favouriteActivities: ["playing fetch in park"],
      },
    ],
  },
  {
    name: "Ananya",
    city: "Banglore",
    age: 30,
    occupation: null,
    hobbies: [{ cooking: "trying italian recipes" }],
    education: "computer science",
    vehicles: [],
    pets: [
      {
        type: "bird",
        name: "kiwi",
        age: null,
        vaccinated: true,
        isFullyVacinated: false,
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
        favouriteActivities: ["love lounging in the sun"],
      },
      {
        type: "cat",
        name: "leo",
        age: 3,
        vaccinated: true,
        isFullyVacinated: true,
        favouriteActivities: ["love lounging in the sun"],
      },
    ],
  },
  {
    name: "Kavya",
    city: "Chennai",
    age: 28,
    occupation: null,
    education: "CSE",
    hobbies: [
      {
        Reading: "modern fantasy novels",
        watchingMovies: "Binge-Watching sci-fi shows",
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
        favouriteActivities: [
          "enjoys hopping around her backyard ",
          "nibbling on carrots",
        ],
      },
    ],
  },
];

// ----------------------- EMPLOYED INDIVIDUALS -----------------------\\

const employedPeople = (people) =>
  people.filter(({ occupation }) => occupation !== null).length;

// ----------------------- PEOPLE OWNED CAR ---------------------------\\

const peopleWhoOwnedCar = (people) =>
  people.filter(({ vehicles }) => vehicles.includes("car")).length;

// --------------------------- FULLY VACINATED ------------------------\\
const totalVaccinatedPets = (people) =>
  people
    .flatMap(({ pets }) => pets)
    .filter(({ isFullyVacinated }) => isFullyVacinated).length;

// ------------------------ PET NAME AND TYPE -------------------------\\
const allPets = (people) =>
  people.flatMap(({ pets }) =>
    pets.map(({ name, type }) => ({ name: name, type: type }))
  );

// ------------------------ CITIES OF PEOPLE --------------------------\\

const cities = (people) => people.map(({ city }) => city);

// ------------------------ AVERAGE OF AGES ---------------------------\\

const averageOfArray = (array) =>
  array.reduce((accumuator, number) => accumuator + number, 0) / array.length;

const averageOfAges = function (people) {
  return averageOfArray(people.map(({ age }) => age));
};

// ----------------------- HOBBIES SHARED ---------------------------- \\

const hobbies = (people) => {
  const hobbiesOfPeople = people.flatMap(({ name, hobbies }) => ({
    name: name,
    hobbies: hobbies,
  }));
  return [hobbiesOfPeople.length, hobbiesOfPeople];
};

// ----------------------- PETS OF UNEMPLOYED -------------------------\\

const petsOfUnEmployed = (people) =>
  people.filter(({ occupation }) => occupation === null).length;

// ----------------------- PETS OF UNEMPLOYED -------------------------\\
const petsOfComputerSciencePeople = (people) =>
  people
    .filter(({ education }) => education === "computer science")
    .flatMap(({ pets }) => pets).length;

// ------------------------- MORE THAN ONE PET ------------------------\\

const moreThanOnePet = (people) =>
  people.filter((person) => person.pets.length > 1).length;

// --------------------------- PET ACTIVITIES -------------------------\\
const petActivities = (people) =>
  people.flatMap(({ pets }) =>
    pets.flatMap(({ name, favouriteActivities }) => ({
      name: name,
      favouriteActivities: favouriteActivities,
    }))
  );

// ------------------ PET OF PEOPLE FROM BLR AND CHE ------------------\\

const animalsOfBLRAndCHE = (people) =>
  people
    .filter(({ city }) => city in { Banglore: true, Chennai: true })
    .flatMap(({ pets }) => pets.flatMap(({ name }) => ({ name: name })));

// ---------------- VACINATED PETS OF CAR LESS  -----------------------\\

const vacinatedPetsOfNoCarPeople = (people) =>
  people
    .filter(({ vehicles }) => !vehicles.includes("car"))
    .flatMap(({ pets }) => pets)
    .filter(({ vaccinated }) => vaccinated).length;

// -------------------- PEOPLE WITH MORETHAN TWO HOBBIES --------------\\

const peopleWithMoreThanTwoHobbies = (people) =>
  people.filter(({ hobbies }) => hobbies.length > 2).length;

// ----------------------------- YOUNGEST PET ---------------------------\\

const youngestPet = (people) =>
  people
    .flatMap(({ pets }) => pets)
    .reduce((youngPet, pet) =>
      pet.age < youngPet.age ? { name: pet.name, age: pet.age } : youngPet
    ).name;

// ------------------------ CITY NAME START WITH B -------------------\\

const noOfPeopleWithCityNameB = (people) =>
  people.filter(({ city }) => city.at(0) === "B").length;

// ---------------------------- DOES'NT OWN PETS -----------------------\\

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
    allPets
  );
  testing("5. Which cities do the individuals live in?", cities);
  testing(
    "6. How many hobbies are shared across the group? What are they?",
    hobbies
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
  testing("10. How many individuals own more than one pet?", moreThanOnePet);
  testing(
    "11. Which pets are associated with specific favorite activities?",
    petActivities
  );
  testing(
    "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?",
    animalsOfBLRAndCHE
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
    noOfPeopleWithCityNameB
  );
  testing("20. Which individuals do not own any pets?", peopleWhoDoesntOwnPet);
};

testCases();
