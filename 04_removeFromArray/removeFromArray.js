const removeFromArray = function(array, ...elements) {
    
    let newArray = [];

    for (let i = 0; i < array.length; i++){
        elemIndex = elements.indexOf(array[i]);
        // indexOf returns -1 if the value is not found
        if (elemIndex === -1) {
            newArray.push(array[i]);
        };
    };

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
