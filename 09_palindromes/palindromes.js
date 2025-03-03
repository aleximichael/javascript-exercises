const palindromes = function (str) {
    let cleanStr = str
        .toLowerCase()
        .split("")
        .filter(char => { return /[a-z0-9]/.test(char); });
    let flippedStr = cleanStr.toReversed()
    return cleanStr.join("") === flippedStr.join("");
};

// Do not edit below this line
module.exports = palindromes
