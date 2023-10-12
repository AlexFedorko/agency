export function isEmptyObject (obj) {
    return !Object.keys(obj).length;
}

export function createArray(length){
    return Array(length).fill(0);
}



// Вот тебе задачки. С опозданием, но все-же.
// 1. На строку:
//     1.1 Удали все буквы A, за которым следует фраза "REMOVE"
// 1.2 давай сделаем проще. Ты должен найти общие слова в разных предложениях и вывести самое доинное
// 2. На массив:
//     2.1. Удалить в массиве все числа, которые повторяются более двух раз.
// 2.2 Заполните массив случайным образом нулями и единицами так, чтобы количество единиц было больше количества нулей.
// 3. Разработать компонент прогресс бар на Реакте. На входи принимает value, className, max

// 1)
// function removeAAfterRemove(inputText) {
//     const key = 'REMOVE';
//     const parts = inputText.split(key);
//     return parts.map(part => part.replace(/a/ig, '')).join(key);
// }
//
// const text = "This is a sample text. AREMOVENDA. REMOVEAAA";
// const result = removeAAfterRemove(text);
//
// console.log(result);
//
//
// // 2)
// let str1 = 'dfdsfdsf evb';
// let str2 = 'fefwefwer fergf';
//
// for (const word of str) {
//
// }

