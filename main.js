let data = [
    {name: 'John'},
    {name: 'Mary'},
    {name: 'Joe'},
    {name: 'Ben'},
]

console.log(data.length)

// JS
function getNamesJS() {
    return data.map((item) => {
        return item.name
    });
}

console.log(getNamesJS())

// Lodash
function getNames() {
    return _.map(data, (item) =>{
        return item.name
    })
}

console.log(getNames())

// JS
function getJohnJS() {
    let result = data.filter((obj) =>{
        return (obj['name'] === 'John')
    }).length
    return result
}

console.log(getJohnJS())


// Lodash

function getJohn() {
    let result = _.filter(data, (obj)=>{
        return (obj['name'] == 'John')
    }).length
    return result

}

console.log(getJohn())




let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false },
    { 'user': 'wilma',   'age': 22, 'active': false }
];

// lodash
// let notActive = _.filter(users, (obj)=>{
//     if(!obj.active){
//         console.log(obj.user)
//     }
//     return !obj.active
// })

// console.log(notActive)


// JS
let notActive = users.filter((user)=> {
    if(!user.active){
        console.log("Not ", user.user);
    }
    return !user.active;
});

console.log("notActive:", notActive);


let peopleData = [{name: 'John Smith', age: 54},
    {name: 'Mary Smith', age: 42},
    {name: 'Peter Pan', age: 15},
    {name: 'Kelly Fan', age: 35},
    {name: 'Adam Potts', age: 42},
    {name: 'Joe Johnson', age: 46},
    {name: 'Ben Smith', age: 35}];


function getAgeGroups() {
    let result = _.groupBy(peopleData, (obj)=>{
        return Math.floor(obj.age / 10);
    });
    return result;

}

console.log(getAgeGroups())


let gradeArray = [56, 88, 98, 78, 100];

console.log('Any perfect scores', _.includes(gradeArray, 100))

let studentGrades = [{"name": "Alice", "grade": 56},
    {"name": "Tom:", "grade": 88},
    {"name": "Jerry", "grade": 98},
    {"name": "Tweety", "grade": 78},
    {"name": "Mickey", "grade": 100}];

let checkScore = _.forEach(studentGrades, (item, key) =>{
    console.log(item.grade)
    if (_.includes(item, 100)){
        console.log(studentGrades[key].name)
    }
})

console.log(checkScore)


let person = studentGrades.find((student)=> student.grade === 100)
console.log(person)

let pizzaToppingPrices = [{name: 'Onions', price: .54},
    {name: 'Green Peppers', price: .42},
    {name: 'Pepperoni', price: 1.50},
    {name: 'Bacon', price: 1.35},
    {name: 'Mushrooms', price: .85},
    {name: 'Meatball', price: 1.46},
    {name: 'Steak', price: 2.05},
    {name: 'Shrimp', price: 2.25}];


let chunckArray = _.chunk(pizzaToppingPrices, 3);
console.log(chunckArray)


chunckArray.forEach((item)=>{
    console.log("**************")
    item.forEach((topping) =>{
        console.log(topping.name)
    })
})


function getPriceGroups() {
    let result = _.groupBy(pizzaToppingPrices, (item) =>{
        return Math.floor(item.price / 1.0)
    })
    return result
}
console.log(getPriceGroups())






