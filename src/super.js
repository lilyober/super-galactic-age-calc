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

    ageDifference() {
        let passedAge = 25;
        let diff = this.age - passedAge;
        return diff;
    }

    ageDiffMercury() {
        let passedAge = 25;
        let diff = this.age - passedAge;
        return diff / .24;
    }

    ageDiffVenus() {
        let passedAge = 25;
        let diff = this.age - passedAge;
        return diff / .62;
    }

}