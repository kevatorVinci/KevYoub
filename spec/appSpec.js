// Description: This file contains all the test cases for the app.js file.

import { Main } from '../src/app.js';

describe('berlin horloge for minuteSimple', function() {
    const main = new Main();

    it('minuteSimple should return OOOO when given 0', function() {
        const result = main.minuteSimple(0);

        expect(result).toBe("OOOO");
    });

    it('minuteSimple should return YOOO when given 1', function() {
        const result = main.minuteSimple(1);

        expect(result).toBe("YOOO");
    });

    it('minuteSimple should return YYOO when given 2', function() {
        const result = main.minuteSimple(2);

        expect(result).toBe("YYOO");
    });

    it('minuteSimple should return YYYO when given 3', function() {
        const result = main.minuteSimple(3);

        expect(result).toBe("YYYO");
    });

    




});

