const sumAll = function(numberOne, numberTwo) {
    if (typeof(numberOne) !== 'number' || typeof(numberTwo) !== 'number') return 'ERROR';

    if (numberOne < 0 || numberTwo < 0) return 'ERROR';

    let sum = 0

    let start = numberOne;
    let finish =  numberTwo;

    if (numberTwo < numberOne) {
        start = numberTwo;
        finish = numberOne;
    }

    for (let i = start; i <= finish; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
