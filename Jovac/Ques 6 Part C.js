const peopleAbove30 = people
  .filter(person => person.age > 30)
  .map(person => ({
    name: person.name,
    age: person.age
  }));
console.log(peopleAbove30);