//1) Создайте функцию, которая принимает массив в качестве аргумента и возвращает новый массив с названиями тех фруктов, чья цена выше 200 (сделать через forEach, filter + map, reduce) Поправить пропуски до, после и в середине строк Все строки привести в нижний регистр
// let food = [
//     { name: " ORANGE", price: 500, isFruit: true },
//     { name: "burger", price: 100, isFruit: false },
//     { name: "watermelon", price: 210, isFruit: false },
//     { name: "toast", price: 350, isFruit: false },
//     { name: "apple ", price: 140, isFruit: true },
//     { name: " bAn ana", price: 380, isFruit: true }
// ];
let newArr = [];

//1.-forEach

// function foodPrice(arr) {
//     arr.forEach(item => {
//         if (item.price > 200 && item.isFruit === true) {
//             newArr.push(item.name.trim().replace(' ', '').toLowerCase());
//         }
//     })
//     console.log(newArr);
// }
// foodPrice(food);
//2.-reduce

// function foodPrice(arr) {
//     arr.reduce((item, elem) => {
//         if (elem.price > 200 && elem.isFruit === true) {
//             newArr.push(elem.name.trim().replace(' ', '').toLowerCase());
//         }
//     }, []);
//     return newArr;
// }
// console.log(foodPrice(food));

//3.-map+filter

// function foodPrice(arr) {
//     let result = arr.filter(item => {
//         return item.price >= 200 && item.isFruit === true;
//     }).map(item => item.name.trim().replace(' ', '').toLowerCase());
//     console.log(result);
// }
// foodPrice(food);

//2)-Создайте функцию, которая будет принимать в качестве аргумента массив и: Копировать массив и отсортировывать его от меньшей зп к большей После чего изменять порядок на обратный Новый массив возвращать А также с помощью оператора проверять является ли полученный массив массивом (выводить в консоль)


// let salary = [1000, 500, 1200, 230];

// newArr = salary;
// newArr.sort(function(a, b) {
//     return a - b;
// });
// console.log(newArr);
// newArr.sort(function(a, b) {
//     return b - a;
// });
// console.log(newArr);

//3)-Создайте строку из элементов массива

// let serials = ["How i met your mom", "Friends", "Big bang theory"];
// console.log(serials.join(''));

//4)Создайте функцию, которая принимает массив в качестве аргумента и возвращает общую сумму всех продуктов

let food = [
    { name: " ORANGE", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true }
];
//1.-first
let sum = 0;

// function allPrice(arr) {
//     let result = arr.map(item => {
//         sum += item.price;
//     });
//     console.log(sum);
// }
// console.log(allPrice(food));

//2.-second


function allPrice(arr) {
    let result = arr.forEach(item => {
        sum += item.price;
    });
    console.log(sum);
}
console.log(allPrice(food));