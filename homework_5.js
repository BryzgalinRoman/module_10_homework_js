//10.5 задание 5 - Выводим длину и элементы массива

const arr = [1, 9, 5, 4, 11];
console.log('Array length ' + arr.length);
function arrPrint(item, index, arr) {
    console.log(item);
    return item;
}
let temp = arr.map(arrPrint);