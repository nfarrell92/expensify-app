//object destructuring

// const person = {
//     name: 'Nadine',
//     age: 27,
//     location: {
//         city: 'Melbourne',
//         temperature: 16
//     }
// };

// const { name : firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temperature : temp} = person.location;
// if (temp && city) {
//     console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name : publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//array destructuring 

// const address = ['1299 South Juniper Street', 'Melbourne', 'Victoria', '3185'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee(iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);

