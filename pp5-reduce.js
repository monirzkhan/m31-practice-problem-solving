// 1) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

///using loop;
const people = [
    {name: 'monir', age: 20},
    {name: 'abur', age: 15},
    {name: 'ajgor', age: 22},
]
let ageTotal = 0;
for (let i = 0; i < people.length; i++){
    const index = people[i];
    const age = index.age;
    ageTotal = ageTotal + age;
}
console.log(ageTotal);


// using .reduce
const totalAge = people.reduce((previousAge, newAge) => {
        return previousAge + newAge.age}
        ,0)
console.log(totalAge);