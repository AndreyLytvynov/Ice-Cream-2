const array = [1, 2, 2, 1, 3, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 'a', 'a', 'a', 'a', 1, 'b', 'a', 'b'];
function maxQuantity(array) {
    const uniqueNumbers = {};
    for (const numb of array) {
        uniqueNumbers[numb] = 0;
    }
    for (const el of Object.keys(uniqueNumbers)) {
        for (const numb of array) {
            if (numb.toString() === el) {
                uniqueNumbers[numb] += 1;
            }
        }
    }
    console.log(uniqueNumbers);

    console.log(
        `${
            Object.keys(uniqueNumbers)[
                Object.values(uniqueNumbers).indexOf(Math.max(...Object.values(uniqueNumbers)))
            ]
        } quantity ${Math.max(...Object.values(uniqueNumbers))}`
    );
}
maxQuantity(array);
