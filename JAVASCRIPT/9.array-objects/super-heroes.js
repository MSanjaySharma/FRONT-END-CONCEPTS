const heroes = (superHeroes = [
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
  },
]);

function superHero(heroes, name) {
  const hero = heroes.find((ele) => ele.name === name);
  if (hero) {
    return hero.powers.join(",");
  } else {
    return `${name} is not in the super heroes list`;
  }
}

console.log(superHero(heroes, "Molecule Man"));
console.log(superHero(heroes, "Iron Man"));
console.log(typeof null); //object //this is erranous behaviour this is language problem;
