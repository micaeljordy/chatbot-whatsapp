class StringBuilder {
    constructor() {
        this.strings = new Array();
    }

    append(str) {
        this.strings.push(str);
    }

    toString() {
        return this.strings.join('');
    }
}

module.exports = StringBuilder;