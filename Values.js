//class for roman numbers


class Values {
    constructor() {
        this.values = require('./romanNumbers.json');
    }
//function that gets roman number and returns number
    translate(chr) {
        const number = this.values[chr];
        return (number!=undefined) ? number : 0;
    }
}

module.exports = Values;