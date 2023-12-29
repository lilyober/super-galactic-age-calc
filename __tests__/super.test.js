// commit after good fail aka red phase 
// commit after business logic written, test passes aka green phase

import AgeCalc from '../src/super.js';

describe('AgeCalc', () => {
    let earthAge = new AgeCalc(35);
    let passedAge = new AgeCalc(25);
    let diff = earthAge - passedAge;
    let futureAge = new AgeCalc(50);
    let yearsUntil = futureAge - earthAge;


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

    test('should calculate number of years passed since last birthday on Earth', () => {
        expect(earthAge.ageDifference()).toEqual(10);
    });

    test('should calculate number of years passed since last birthday on Mercury', () => {
        expect(earthAge.ageDiffMercury()).toBeCloseTo(41.67);
    });

    test('should calculate number of years passed since last birthday on Venus', () => {
        expect(earthAge.ageDiffVenus()).toBeCloseTo(16.13);
    });

    test('should calculate number of years passed since last birthday on Mars', () => {
        expect(earthAge.ageDiffMars()).toBeCloseTo(5.32);
    });

    test('should calculate number of years passed since last birthday on Jupiter', () => {
        expect(earthAge.ageDiffJupiter()).toBeCloseTo(0.84);
    });

    test('should calculate number of years to pass until future birthday on Earth', () => {
        expect(earthAge.toPass()).toEqual(15);
    });

    test('should calculate number of years to pass until future birthday on Mercury', () => {
        expect(earthAge.toPassMercury()).toEqual(62.5);
    });

    test('should calculate number of years to pass until future birthday on Venus', () => {
        expect(earthAge.toPassVenus()).toEqual(24.19);
    });

});