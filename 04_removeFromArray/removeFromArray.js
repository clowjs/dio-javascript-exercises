const removeFromArray = function(array, ...args) {

    args.forEach(arg => {
        array = array.filter(element => element !== arg);
    });

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
