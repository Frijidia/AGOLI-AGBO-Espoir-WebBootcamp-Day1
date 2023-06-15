function displayProperty(user, key){
    if ((user.hasOwnProperty(key)))
        console.log(`${key}: ${user[key]}`);
    else console.log(`Property '${key}' does not exist in the object.`)
}

// const person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Engineer"
// };  
// displayProperty(person, "name");
// displayProperty(person, "age");
// displayProperty(person, "occupation");
// displayProperty(person, "address");
