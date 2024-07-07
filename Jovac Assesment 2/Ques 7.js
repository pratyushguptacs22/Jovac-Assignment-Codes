function main(cb1, cb2, x, y) {
    console.log("Sum:", cb1(x, y));
    console.log("Difference:", cb2(x, y));
}


function cb1(a, b) {
    return a + b;
}

function cb2(a, b) {
    return a - b;
}

var x = 11;
var y = 4;

main(cb1, cb2, x, y);
