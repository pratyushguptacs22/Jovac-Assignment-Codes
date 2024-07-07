const peopleWithSalary = people.map(person => ({
  ...person,
  salary: 50000
}));
console.log(peopleWithSalary);
