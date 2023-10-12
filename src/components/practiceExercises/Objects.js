// 1. Разработать функцию, которая у обьекта меняет местами ключи и значение.

const originalObj = {
    apple: 'fruit',
    banana: 'fruit',
    carrot: 'vegetable',
};

/*
result = {
    fruit: ['apple', 'banana'],
    vegetable: ['carrot']
}
key = apple
 */
//RegExp /^[+0-9\-\(\) ]+$/.test('+38(068)-O8-07-000')

function swapKeysAndValues(obj) {
    const result = {};
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        const value = obj[keys[i]]

        if (!result[value]) {
            result[value] = [];
        }
        result[value].push(keys[i]);
    }
    // for (const key in obj) {
    //     const value = obj[key]; //fruit
    //
    //
    //
    //     if (!result[value]) {
    //         result[value] = [];
    //     }
    //
    //     result[value].push(key);
    // }

    return result;
}

function swapKeysAndValues0(obj) {
    const result = {};

    for (const key in obj) {
        const value = obj[key]; //fruit

        if (!result[value]) {
            result[value] = [];
        }

        result[value].push(key);
    }
    return result;
}

function swapKeysAndValues2(obj) {
    const result = {};

    for (const [key, value] of Object.entries(obj)) {

        if (!result[value]) {
            result[value] = [];
        }

        result[value].push(key);
    }
    return result;
}

console.log(swapKeysAndValues(originalObj));

//2. Разработать функцию как Object.entries, разуметься не использовать его :)
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer',
};

function convertObjectToArray(obj) {
    const arr = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
           arr.push([key, obj[key]]);
        }
    }
    return arr;
}

const arrayRepresentation = convertObjectToArray(person);

console.log(arrayRepresentation);
// Ожидаемый результат: [['name', 'John'], ['age', 25], ['occupation', 'Developer']]


// 3. Разработать функцию, которая фильтрует значение  в объекте. На входе принимает объект и минимальное значение.
// filterObject(data, 5)
//
// Должно вернуть  { banana: 6, carrot: 8 }

const obj = {
    apple: 3,
    banana: 6,
    carrot: 8,
    grape: 4,
};

const filterObject = (obj, minValue) => {
    const result = {};

    for (const [key, value] of Object.entries(obj)) {
        if(value >= minValue) {
            result[key] = value;
        }
    }

    for (const key in obj) {
        if (obj[key] >= minValue) {
            result[key] = obj[key];
        }
    }

    return result;
}

const filteredResult = filterObject(obj, 5);

console.log(filteredResult);

