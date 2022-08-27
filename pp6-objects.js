// Practice Problem: Access Object values

// Console the value of age

const student = {
    name: 'farhan',
    age: 30,
}

console.log(student.age);

//Console the value of city
let data = {
    location: [
        {
            latitude: '34.5,37.8',
            longitude: '98.77,58.77',
            city: 'Dhaka',
            country: 'Bangladesh',
        }
    ]
};
console.log(data.location[0].city);