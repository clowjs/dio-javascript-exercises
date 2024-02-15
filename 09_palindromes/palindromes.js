const palindromes = function (string) {
    string = string.toLowerCase();

    let stringArray = string.split('');
    stringArray = stringArray.filter(c => /^[a-zA-Z0-9]+$/.test(c))
    let reversedStringArray = stringArray.toReversed();

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== reversedStringArray[i]) return false;
    }

    return true;
};

palindromes('test te!');

// Do not edit below this line
module.exports = palindromes;
