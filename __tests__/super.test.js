// commit after good fail aka red phase 
// commit after business logic written, test passes aka green phase

import AgeCalc from '../src/super.js';

describe('AgeCalc', () => {

    test('should create a class object for age on earth', () => {
        const earthAge = new AgeCalc(35);
        expect(earthAge.age).toEqual(35);
    });

});