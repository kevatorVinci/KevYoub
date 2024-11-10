// Description: This file contains all the test cases for the app.js file.

import { Main } from '../src/app.js';

describe('berlin horloge for minuteSimple', function() {
    const main = new Main();

    it('minuteSimple should return OOOO when given 0', function() {
        const result = main.minuteSimple(0);


        expect(result).toBe("OOOO");
    });


});

