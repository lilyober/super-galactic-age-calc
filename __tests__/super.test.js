// commit after good fail aka red phase 
// commit after business logic written, test passes aka green phase

import AgeCalc from '../src/super.js';

describe('AgeCalc', () => {
    const earthAge = new AgeCalc(35);

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
        expect(earthAge.mars()).toBeCloseTo(18.61);
    });

});