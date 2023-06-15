function cName(a, b){
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    var comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

function cAge(a, b){
    return a.age - b.age;
}

function sortByProperty(user, key){
    if (key === "age")
        return (user.sort(cAge))
    if (key == "name")
        return (user.sort(cName))
}

const persons = [
    { name: "John", age: 25 },
    { name: "Alice", age: 32 },
    { name: "Bob", age: 18 },
  ];
  
//   const sortedPersons = sortByProperty(persons, "age");
//   console.log("Sorted persons:", sortedPersons);
