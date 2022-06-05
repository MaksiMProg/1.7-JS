//1) Создайте функцию, которая принимает массив в качестве аргумента и возвращает новый массив с названиями тех фруктов, чья цена выше 200 (сделать через forEach, filter + map, reduce) Поправить пропуски до, после и в середине строк Все строки привести в нижний регистр
let food = [
    { name: " ORANGE", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true }
];


//1.-forEach

function foodPriceForEach(arr) {
    let newArr = [];
    arr.forEach(item => {
        if (item.price > 200 && item.isFruit === true) {
            newArr.push(item.name.trim().replace(' ', '').toLowerCase());
        }
    })
    return newArr;
}
console.log(foodPriceForEach(food, 'forEach'));
//2.-reduce

function foodPriceReduce(arr) {

    arr.reduce((acc, elem) => {
        if (elem.price > 200 && elem.isFruit === true) {
            res.push(elem.name.trim().replace(' ', '').toLowerCase());
        }
    }, res = []);
    return res;
}
console.log(foodPriceReduce(food));

//3.-map+filter

function foodPriceMapFilter(arr) {
    let result = arr.filter(item => {
        return item.price >= 200 && item.isFruit === true;
    }).map(item => item.name.trim().replace(' ', '').toLowerCase());
    console.log(result);
}
foodPriceMapFilter(food);

//2)-Создайте функцию, которая будет принимать в качестве аргумента массив и: Копировать массив и отсортировывать его от меньшей зп к большей После чего изменять порядок на обратный Новый массив возвращать А также с помощью оператора проверять является ли полученный массив массивом (выводить в консоль)


let salary = [1000, 500, 1200, 230];

// newArr = salary;
// newArr.sort(function(a, b) {
//     return a - b;
// });
// console.log(newArr);
// newArr.sort(function(a, b) {
//     return b - a;
// });
// console.log(newArr);

function sortsalary(arr) {
    let newArr = [];
    for (let elem of arr) {
        newArr.push(elem);
    }
    newArr.sort(function(a, b) {
        return a - b;
    });
    if (Array.isArray(newArr) === true) {
        return newArr.reverse();
    } else {
        console.log('ne massiv');
    }
}
console.log(sortsalary(salary));
//3)-Создайте строку из элементов массива

let serials = ["How i met your mom", "Friends", "Big bang theory"];
console.log(serials.join(''));

//4)Создайте функцию, которая принимает массив в качестве аргумента и возвращает общую сумму всех продуктов

// let food = [
//     { name: " ORANGE", price: 500, isFruit: true },
//     { name: "burger", price: 100, isFruit: false },
//     { name: "watermelon", price: 210, isFruit: false },
//     { name: "toast", price: 350, isFruit: false },
//     { name: "apple ", price: 140, isFruit: true },
//     { name: " bAn ana", price: 380, isFruit: true }
// ];
//1.-first


function allPrice(arr) {
    let sum = 0;
    for (let elem of food) {
        sum += elem.price;
    }
    return sum;
}
console.log(allPrice(food));
//2. - second


// function allPrice(arr) {
//     let result = arr.forEach(item => {
//         sum += item.price;
//     });
//     console.log(sum);
// }
// console.log(allPrice(food));