// name,email,age,gender,country,birthday
//
// const infoOfUsers = 'Anna,anna@example.com,25,female,Ukraine,1998-03-15,' +
//     'John,john@example.com,32,male,USA,1991-08-22,' +
//     'Maria,maria@example.com,28,female,Ukraine,1995-11-10,' +
//     'Alexei,alexei@example.com,22,male,Ukraine,2000-06-18,' +
//     'Elena,elena@example.com,40,female,France,1983-12-05';
//
//
// const stringToArray = (string) => {
//     const arr = [];
//         for (const item of string) {
//             arr.push(string[item])
//         }
//         return arr;
// }

const csvData = `
Имя,Электронная почта,Возраст,Пол,Страна,Дата рождения
Анна,anna@example.com,25,Женский,Украина,1998-03-15
Джон,john@example.com,32,Мужской,США,1991-08-22
Мария,maria@example.com,28,Женский,Украина,1995-11-10
Алексей,alexei@example.com,22,Мужской,Украина,2000-06-18
Елена,elena@example.com,40,Женский,Франция,1983-12-05  
`;

function parse(str, separator = ',') {
    str = str.trim();
    const lines = str.split('\n');
    const headers = lines.shift().split(separator);

    const res = [];
    for (const line of lines) {
        const col = line.split(separator);
        const item = {};

        for (let i = 0; i < col.length; i++) {
            if (headers[i] === 'Дата рождения') {
                //if(i === 5)
                const date = col[i].split('-');
                date[1]--;
                item[headers[i]] = new Date(...date)
            } else {
                item[headers[i]] = col[i]
            }
        }
        res.push(item);
    }

    return res;

}

console.log(parse(csvData));


const data =
    [
        {
            "Имя": "Анна",
            "Электронная почта": "anna@example.com",
            "Возраст": "25",
            "Пол": "Женский",
            "Страна": "Украина",
            "Дата рождения": "1998-03-15"
        },
        {
            "Имя": "Джон",
            "Электронная почта": "john@example.com",
            "Возраст": "32",
            "Пол": "Мужской",
            "Страна": "США",
            "Дата рождения": "1991-08-22"
        },
        {
            "Имя": "Мария",
            "Электронная почта": "maria@example.com",
            "Возраст": "28",
            "Пол": "Женский",
            "Страна": "Украина",
            "Дата рождения": "1995-11-10"
        },
        {
            "Имя": "Алексей",
            "Электронная почта": "alexei@example.com",
            "Возраст": "22",
            "Пол": "Мужской",
            "Страна": "Украина",
            "Дата рождения": "2000-06-18"
        },
        {
            "Имя": "Елена",
            "Электронная почта": "elena@example.com",
            "Возраст": "40",
            "Пол": "Женский",
            "Страна": "Франция",
            "Дата рождения": "1983-12-05"
        }
    ];


function arrayToCSV(data, separator = ',') {
    let result = '';

    const headers = Object.keys(data[0]);
    result += headers.join(separator) + '\n';

    data.map((obj) => {
        const values = Object.values(obj);
        result += values.join(separator) + '\n';
    });

    return result;
}

const csvData = arrayToCSV(data);
console.log(csvData);


// 2. Разработать функцию, которая меняет элементы местами. Назовём для простоты swap(arr, 1. 5).
// Пример:
//
//     const arr = [1,2,3,4,5];
// swap(arr, 0, 3) // [4,2,3,1,5]
// swap(arr, 3, 6) // Error Range


const arr = [1, 2, 3, 4, 5];

function swap(arr, i, j) {
    if (i < 0 || i >= arr.length || j < 0 || j >= arr.length) {
        throw new RangeError('Error');
    }
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}


// А вот тебе задачки для разогрева:
// 1. Напиши функцию, которая будет принимать два массива чисел и
// возвращать новый массив, содержащий только те числа, которые есть в обоих исходных массивах.


const arr1 = [1, 4, 24, 333, 14, 9];
const arr2 = [5, 17, 333, 3, 43, 9];

function arrays(arr1, arr2) {
    const arr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr.push(arr1[i])
        }
    }
    console.log(arr);
    return arr;
}

// 2. Найди в массиве два самых маленьких числа

const arrOfNumbers = [333, 15, 24, 1, 4, 9];

function findSmallNumbersInArray(arrOfNumbers) {
    if (arr.length < 2) {
        throw new RangeError('Array need more number of elements!')
    }
    const sortedArray = arr.slice().sort((a, b) => a - b);
    return sortedArray.slice(0, 2)
}



