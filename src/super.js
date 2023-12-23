export default class AgeCalc {
    constructor(age) {
        this.age = age;
    }

    mercury() {
        return this.age / .24;
    }

    venus() {
        return this.age / .62;
    }

    mars() {
        return this.age / 1.88;
    }

    jupiter() {
        return this.age / 11.86;
    }

    yearsPassed() {

    }

}