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

    it('minuteSimple should return YYYY when given 4', function() {
        const result = main.minuteSimple(4);

        expect(result).toBe("YYYY");
    });

    it('minuteSimple should return YYYY when given 5', function() {
        const result = main.minuteSimple(5);

        expect(result).toBe("OOOO");
    });

    it('minuteSimple should return YOOO when given 6', function() {
        const result = main.minuteSimple(6);

        expect(result).toBe("YOOO");
    });
    

    




});

describe('berlin horloge for minuteFiveSimple', function(){
    const main = new Main();

    it('minuteFiveSimple should return OOOOOOOOOOO when given 0', function() {
        const result = main.minuteFiveSimple(0);

        expect(result).toBe("OOOOOOOOOOO");
    });

    it('minuteFiveSimple should return OOOOOOOOOOO when given 1', function() {
        const result = main.minuteFiveSimple(1);

        expect(result).toBe("OOOOOOOOOOO");
    });

    it('minuteFiveSimple should return YOOOOOOOOOO when given 5', function() {
        const result = main.minuteFiveSimple(5);

        expect(result).toBe("YOOOOOOOOOO");
    });

    it('minuteFiveSimple should return YOOOOOOOOOO when given 6', function() {
        const result = main.minuteFiveSimple(6);

        expect(result).toBe("YOOOOOOOOOO");
    });

    it('minuteFiveSimple should return YYOOOOOOOOO when given 10', function() {
        const result = main.minuteFiveSimple(10);

        expect(result).toBe("YYOOOOOOOOO");
    });

    it('minuteFiveSimple should return YYOOOOOOOOO when given 11', function() {
        const result = main.minuteFiveSimple(11);

        expect(result).toBe("YYOOOOOOOOO");
    });

    it('minuteFiveSimple should return YYROOOOOOOO when given 15', function() {
        const result = main.minuteFiveSimple(15);

        expect(result).toBe("YYROOOOOOOO");
    });

    it('minuteFiveSimple should return YYROOOOOOOO when given 16', function() {
        const result = main.minuteFiveSimple(16);

        expect(result).toBe("YYROOOOOOOO");
    });

    it('minuteFiveSimple should return YYRYOOOOOOO when given 20', function() {
        const result = main.minuteFiveSimple(20);

        expect(result).toBe("YYRYOOOOOOO");
    });

    it('minuteFiveSimple should return YYRYOOOOOOO when given 21', function() {
        const result = main.minuteFiveSimple(21);

        expect(result).toBe("YYRYOOOOOOO");
    });

    it('minuteFiveSimple should return YYRYYOOOOOO when given 26', function() {
        const result = main.minuteFiveSimple(26);

        expect(result).toBe("YYRYYOOOOOO");
    });

    it('minuteFiveSimple should return YYRYYROOOOO when given 30', function() {
        const result = main.minuteFiveSimple(30);

        expect(result).toBe("YYRYYROOOOO");
    });

    it('minuteFiveSimple should return YYRYYOOOOOO when given 31', function() {
        const result = main.minuteFiveSimple(31);

        expect(result).toBe("YYRYYROOOOO");
    });

    it('minuteFiveSimple should return YYRYYOOOOOO when given 35', function() {
        const result = main.minuteFiveSimple(35);

        expect(result).toBe("YYRYYRYOOOO");
    });




});


