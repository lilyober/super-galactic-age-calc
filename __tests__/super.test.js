// commit after good fail aka red phase 
// commit after business logic written, test passes aka green phase

import AgeCalc from '../src/super.js';

describe('AgeCalc', () => {
    let earthAge = new AgeCalc(35);

    test('should create a class object for age on Earth', () => {
        expect(earthAge.age).toEqual(35);
    });

    test('should calculate age on Earth to age on Mercury', () => {
        expect(earthAge.mercury()).toBeCloseTo(145.83);
    });

    test('should calculate age on Earth to age on Venus', () => {
        expect(earthAge.venus()).toBeCloseTo(56.45);
    });

    test('should calculate age on Earth to age on Mars', () => {
        expect(earthAge.mars()).toBeCloseTo(18.62);
    });

    test('should calculate age on Earth to age on Jupiter', () => {
        expect(earthAge.jupiter()).toBeCloseTo(2.95);
    });

    test('should calculate number of years passed since last birthday', () => {
        let passedAge = new AgeCalc(25);
        let diff = earthAge - passedAge;
        expect(earthAge.ageDifference()).toEqual(10);
        expect(earthAge.ageDifference()).toBeCloseTo(41.67);
        expect(earthAge.ageDifference()).toBeCloseTo(16.13);
        expect(earthAge.ageDifference()).toBeCloseTo(5.32);
        expect(earthAge.ageDifference()).toBeCloseTo(0.84);
    });

});