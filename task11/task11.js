function sortByProperty(){

}

const persons = [
    { name: "John", age: 25 },
    { name: "Alice", age: 32 },
    { name: "Bob", age: 18 },
  ];
  
  const sortedPersons = sortByProperty(persons, "age");
  console.log("Sorted persons:", sortedPersons);
