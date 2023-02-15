class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.res = Math.ceil((this.max + this.min) / 2);
        return this.res;
    }

    lower() {
       this.max = this.res ;
    }

    greater() {
        this.min = this.res ;
    }
}
module.exports = GuessingGame;
