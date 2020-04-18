function squareAlert() {
    let x = prompt('Please give me a number to square:');
    alert(x + ' squared is ' + square(x));
}

function multiplyAlert() {
    let x = prompt('Please give me the first number:');
    let y = prompt('And the second number to multiply:')
    alert(x + ' multiplied by ' + y + ' equals ' + (x*y));
}

function square(x) {
    return x * x;
}