const linka = document.querySelector('input[name="lenghta"]');
const linkb = document.querySelector('input[name="lenghtb"]');
const linkc = document.querySelector('input[name="lenghtc"]');
const buttonlink = document.querySelector('button');

let a, b, c;

linka.addEventListener('change', () => {
a = Number(linka.value);
console.log('a = ', a);
});

linkb.addEventListener('change', () => {
b = Number(linkb.value);
console.log('b = ', b);
});

linkc.addEventListener('change', () => {
c = Number(linkc.value);
console.log('c = ', c);
});


buttonlink.addEventListener('click', (ev) => {
    console.log('Стороны: ', a, b, c);

    if (((a+b)<c) || ((a+c)<b) || ((b+c)<a)) {
        console.log('Треугольник построить нельзя!');
        return;
    }

    if ((a === b) && (b === c) && (a === c)) {
        console.log('Треугольник равносторонний');
        return;
    }

    if ((a === b) || (a === c) || (b === c)) {
        console.log('Треугольник равнобедренный'); 
        return;
    }

    let d; //for change big or small
    if (a > b) {console.log('a = ', a,' > b = ', b, 'меняем!'); d = b; b = a; a = d;}
    if (b > c) {console.log('b = ', b,' > c = ', c, 'меняем!'); d = c; c = b; b = d;}
    if (a > c) {console.log('a = ', a,' > c = ', c, 'меняем!'); d = c; c = a; a = d;}
    if (a > b) {console.log('a = ', a,' > b = ', b, 'меняем!'); d = b; b = a; a = d;}
    console.log('Стороны теперь: ', a, b, c);

    if ((a/3 === b/4) && (b/4 === c/5)) {
        console.log('Треугольник египетский');
        return;
    }
    console.log('Вы построили обычный треугольник.');
});
