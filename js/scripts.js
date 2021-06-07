//Задача 1

let i = 1;
while ( i <= 50 ) {
    console.log(i);
    i++;
}

for (let u = 35; u >= 8; u--) {
    console.log (u);
}




//Задача 3

let a = 100;
let sum = 0;
for (let j = 1; j <= a; j++) {
console.log(j); 
sum += j;
}
{
console.log(sum);
}

//Задача 4

let b = 5;
let sum = 0;

for (let c = 1; c <= b; c++) {
    sum = 0;
    for (let d = 1; d <= c; d++) {
    sum +=d;
}
console.log('sum' + c + '=' + sum);
}

Задача 5

for (let f = 8; f < 56; f+=2) {
    console.log(f);
}

//Задача 6
 
for (let k =1; k <= 9; k++) {
for (let h = 1; h<=9; h++) 
document.write(k + '*' + h + '=' + h * k + '<br>');   
}

//Задача 7
let n = 1000;
let o = 0;

while (n > 50){
    n = n / 2;
    o++;
    console.log(o);
    console.log(n);
}


//Задача 8

let m = 0;
let sum = 0;
while (true){
    m = prompt('введите число');

    if ( isNaN(+m) ) {
        alert('Ошибка ввода');
    }

    if (m === '0' || m === '') {
        break;
        
    }
    sum  = sum + +m;
}
console.log('сумма чисел = ' + sum);
