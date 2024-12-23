const people = [
  {
    name: "Rahul",
    city: "Pune",
    hobbies: ["playing chess", "Gardening"],
    age: 30,
    education: "computer science",
    job: "software engineer",
    currentlyEmployed: true,
    vehicle: ["car"],
    pets: [
      {
        type: "dog",
        name: "max",
        age: "4 years",
        vaccinated: true,
        isFullyVacinated: true,
        likes: "playing fetch in park",
      },
    ],
  },
  {
    name: "Ananya",
    city: "Banglore",
    hobbies: ["cooking", "trying italian recipes"],
    age: 30,
    education: "computer science",
    job: "unemployed",
    currentlyEmployed: true,
    vehicle: ["public transport"],
    pets: [
      {
        type: "bird",
        name: "kiwi",
        age: "unknown",
        vaccinated: true,
        isFullyVacinated: false,
        likes: "mimics Ananya's voice",
      },
    ],
  },
  {
    name: "Ramesh",
    city: "Jaipur",
    age: 45,
    currentlyEmployed: true,
    job: "Business Owner",
    education: "graduated in BA",
    vehicle: [],
    hobbies: [
      "Gardening",
      "tending rose garden",
      "reading historical friction",
    ],
    pets: [
      {
        type: "cat",
        name: "bella",
        age: 3,
        vaccinated: true,
        isFullyVacinated: true,
        likes: "love lounging in the sun",
      },
      {
        type: "cat",
        name: "leo",
        age: 3,
        vaccinated: true,
        isFullyVacinated: true,
        likes: "love lounging in the sun",
      },
    ],
  },
  {
    name: "Kavya",
    city: "Chennai",
    age: 28,
    currentlyEmployed: false,
    job: "unemployed",
    education: "diploma in CS",
    hobbies: ["reading modern fantasy novels", "Binge-Watching sci-fi shows"],
    vehicle: [],
    skills: ["Dancing", " "],
    pets: [
      {
        type: "Rabbit",
        name: "snowy",
        age: 2,
        vaccinated: true,
        isFullyVacinated: false,
        likes: "enjoys hopping around her backyard and nibbling on carrots",
      },
    ],
  },
];

// ----------------------- EMPLOYED INDIVIDUALS ------------------------\\
const employedPeople = (people) =>
  people.filter((person) => person.job !== "unemployed").length;

// ----------------------- PEOPLE OWNED CAR ----------------------------\\
const peopleWhoOwnedCar = (people) =>
  people.filter((person) => person.vehicle.includes("car")).length;

// --------------------------- FULLY VACINATED -------------------------\\
const isPetFullyVaccinated = function (count, person) {
  let counter = person.pets.filter((pet) => pet.isFullyVacinated);
  return count + counter.length;
};

const totalVaccinatedPets = (people) => people.reduce(isPetFullyVaccinated, 0);

// ------------------------ PET NAME AND TYPE --------------------------\\
const petNameAndType = function (person) {
  return person.pets.flatMap((pet) => [{ name: pet.name, type: pet.type }]);
};

const allPets = (people) => people.flatMap(petNameAndType);

// ------------------------ CITIES OF PEOPLE --------------------------\\
const cities = (person) => person.map((people) => people.city);

// ------------------------ AVERAGE OF AGES ---------------------------\\
const averageOfArray = (array) =>
  array.reduce((accumuator, number) => accumuator + number, 0) / array.length;

const averageOfAges = function (people) {
  const ages = people.map((person) => person.age);

  return averageOfArray(ages);
};

// ----------------------- HOBBIES SHARED ---------------------------- \\
const hobbies = (people) => {
  const hobbiesOfPeople = people.flatMap((person) => person.hobbies);

  return [hobbiesOfPeople.length, hobbiesOfPeople];
};

// ----------------------- PETS OF UNEMPLOYED --------------------------\\
const petsOfUnEmployed = (people) =>
  people.filter((person) => person.job === "unemployed").length;

// ----------------------- PETS OF UNEMPLOYED --------------------------\\
const peopleOfCompuerScience = (people) =>
  people.filter((person) => person.education === "computer science");

const petsOfComputerSciencePeople = function (people) {
  const CSPeople = peopleOfCompuerScience(people);

  return CSPeople.reduce((count, person) => count + person.pets.length, 0);
};

// ----------------------------- TEST CASES --------------------------\\
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
};

testCases();
