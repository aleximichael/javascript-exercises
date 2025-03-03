const fibonacci = function(num) {
    if (+num < 0) {
        return "OOPS";
    } else if (+num === 0) {
        return 0;
    } 

    let last_num = 0;
    let curr_num = 1;

    for (let i = 1; i < +num; i++) {
        let new_num = last_num + curr_num;
        last_num = curr_num;
        curr_num = new_num;
    }

    return curr_num;

};

// Do not edit below this line
module.exports = fibonacci;
