// function findLongestWord(string) {
//     const arr = string.split(' ');
//     const LongWords = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         LongWords.push(arr[i].length);
//     }
//     const maxWordIndex = LongWords.indexOf(Math.max(...LongWords));
//     return `Very big numbers is '${arr[maxWordIndex]}'`;
// }

// console.log(findLongestWord('Long verylongering  asdasd longasdasdasdaering Longest'));

// function second_greatest_lowest(arr_num) {
//     const arr = [...arr_num];
//     const indexMaxNumber = arr_num.indexOf(Math.max(...arr_num));
//     const indexMinNumber = arr_num.indexOf(Math.min(...arr_num));
//     const newArr = arr.splice(indexMaxNumber, 1);
//     const newArr2 = arr.splice(indexMinNumber, 1);
//     const secondMaxNumb = Math.max(...arr);
//     const secondMinNumb = Math.min(...arr);

//     // Math.min(...arr_num);\
//     return `${secondMinNumb}  ${secondMaxNumb}`;
// }

// console.log(second_greatest_lowest([8, 10, 9, 12, 11])); // 9, 11

const array = [
    { a: 1, b: 4, c: 1 },
    { a: 2, b: 4, c: 1 },
    { a: 3, b: 4, c: 1 },
    { a: 4, b: 4, c: 1 },
];

const newArray = array.map(el => {
    return { arc: el.a, bord: el.b };
});
console.table(newArray);
