// const person = {
//     name: "vishesh",
//     age: 24,
//     location: {
//         city: 'New York',
//         temp: 76
//     }
// }

// const { name: firstname = "Anonymous", age } = person;
// console.log(`${firstname} is ${age}`);

// const { city, temp:temparature } = person.location;
// if(city && temparature) {
//     console.log(`It is ${temparature} in ${city}`);
// }

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publishername = "self-published"} = book.publisher;
if(publishername) {
    console.log(`Name of the publisher is ${publishername}`)
}

