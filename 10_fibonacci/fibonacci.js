const fibonacci = function(num) {
    num = parseInt(num);

    if (num < 0) return 'OOPS';

    if (num < 1) return 0;

    if (num < 3) return 1;

    let total = 1;
    let last = 1;
    let temp = 1;

    for (let i = 2; i < num; i++) {
        temp = total;
        total = last + total;
        last = temp;        
    }

    return total
};

// Do not edit below this line
module.exports = fibonacci;
