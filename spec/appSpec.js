// Description: This file contains all the test cases for the app.js file.

import { Main } from "../src/app.js";

describe("berlin horloge for minuteSimple", function () {
  const main = new Main();

  it("minuteSimple should return OOOO when given 0", function () {
    const result = main.minuteSimple(0);

    expect(result).toBe("OOOO");
  });

  it("minuteSimple should return YOOO when given 1", function () {
    const result = main.minuteSimple(1);

    expect(result).toBe("YOOO");
  });

  it("minuteSimple should return YYOO when given 2", function () {
    const result = main.minuteSimple(2);

    expect(result).toBe("YYOO");
  });

  it("minuteSimple should return YYYO when given 3", function () {
    const result = main.minuteSimple(3);

    expect(result).toBe("YYYO");
  });

  it("minuteSimple should return YYYY when given 4", function () {
    const result = main.minuteSimple(4);

    expect(result).toBe("YYYY");
  });

  it("minuteSimple should return YYYY when given 5", function () {
    const result = main.minuteSimple(5);

    expect(result).toBe("OOOO");
  });

  it("minuteSimple should return YOOO when given 6", function () {
    const result = main.minuteSimple(6);

    expect(result).toBe("YOOO");
  });
});

describe("berlin horloge for minuteFiveSimple", function () {
  const main = new Main();

  it("minuteFiveSimple should return OOOOOOOOOOO when given 0", function () {
    const result = main.minuteFiveSimple(0);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("minuteFiveSimple should return OOOOOOOOOOO when given 1", function () {
    const result = main.minuteFiveSimple(1);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("minuteFiveSimple should return YOOOOOOOOOO when given 5", function () {
    const result = main.minuteFiveSimple(5);

    expect(result).toBe("YOOOOOOOOOO");
  });

  it("minuteFiveSimple should return YOOOOOOOOOO when given 6", function () {
    const result = main.minuteFiveSimple(6);

    expect(result).toBe("YOOOOOOOOOO");
  });

  it("minuteFiveSimple should return YYOOOOOOOOO when given 10", function () {
    const result = main.minuteFiveSimple(10);

    expect(result).toBe("YYOOOOOOOOO");
  });

  it("minuteFiveSimple should return YYOOOOOOOOO when given 11", function () {
    const result = main.minuteFiveSimple(11);

    expect(result).toBe("YYOOOOOOOOO");
  });

  it("minuteFiveSimple should return YYROOOOOOOO when given 15", function () {
    const result = main.minuteFiveSimple(15);

    expect(result).toBe("YYROOOOOOOO");
  });

  it("minuteFiveSimple should return YYROOOOOOOO when given 16", function () {
    const result = main.minuteFiveSimple(16);

    expect(result).toBe("YYROOOOOOOO");
  });

  it("minuteFiveSimple should return YYRYOOOOOOO when given 20", function () {
    const result = main.minuteFiveSimple(20);

    expect(result).toBe("YYRYOOOOOOO");
  });

  it("minuteFiveSimple should return YYRYOOOOOOO when given 21", function () {
    const result = main.minuteFiveSimple(21);

    expect(result).toBe("YYRYOOOOOOO");
  });

  it("minuteFiveSimple should return YYRYYOOOOOO when given 26", function () {
    const result = main.minuteFiveSimple(26);

    expect(result).toBe("YYRYYOOOOOO");
  });

  it("minuteFiveSimple should return YYRYYROOOOO when given 30", function () {
    const result = main.minuteFiveSimple(30);

    expect(result).toBe("YYRYYROOOOO");
  });

  it("minuteFiveSimple should return YYRYYROOOOO when given 31", function () {
    const result = main.minuteFiveSimple(31);

    expect(result).toBe("YYRYYROOOOO");
  });

  it("minuteFiveSimple should return YYRYYRYOOOO when given 35", function () {
    const result = main.minuteFiveSimple(35);

    expect(result).toBe("YYRYYRYOOOO");
  });

  it("minuteFiveSimple should return YYRYYRYOOOO when given 36", function () {
    const result = main.minuteFiveSimple(36);

    expect(result).toBe("YYRYYRYOOOO");
  });

  it("minuteFiveSimple should return YYRYYRYYOOO when given 40", function () {
    const result = main.minuteFiveSimple(40);

    expect(result).toBe("YYRYYRYYOOO");
  });

  it("minuteFiveSimple should return YYRYYRYYOOO when given 41", function () {
    const result = main.minuteFiveSimple(41);

    expect(result).toBe("YYRYYRYYOOO");
  });

  it("minuteFiveSimple should return YYRYYRYYROO when given 45", function () {
    const result = main.minuteFiveSimple(45);

    expect(result).toBe("YYRYYRYYROO");
  });

  it("minuteFiveSimple should return YYRYYRYYROO when given 46", function () {
    const result = main.minuteFiveSimple(46);

    expect(result).toBe("YYRYYRYYROO");
  });

  it("minuteFiveSimple should return YYRYYRYYRYO when given 50", function () {
    const result = main.minuteFiveSimple(50);

    expect(result).toBe("YYRYYRYYRYO");
  });

  it("minuteFiveSimple should return YYRYYRYYRYO when given 51", function () {
    const result = main.minuteFiveSimple(51);

    expect(result).toBe("YYRYYRYYRYO");
  });

  it("minuteFiveSimple should return YYRYYRYYRYY when given 55", function () {
    const result = main.minuteFiveSimple(55);

    expect(result).toBe("YYRYYRYYRYY");
  });

  it("minuteFiveSimple should return YYRYYRYYRYY when given 59", function () {
    const result = main.minuteFiveSimple(59);

    expect(result).toBe("YYRYYRYYRYY");
  });
});

describe("berlin horloge for hourSimple", function () {
  const main = new Main();

  it("hourSimple should return OOOO when given 0", function () {
    const result = main.hourSimple(0);

    expect(result).toBe("OOOO");
  });

  it("hourSimple should return ROOO when given 1", function () {
    const result = main.hourSimple(1);

    expect(result).toBe("ROOO");
  });

  it("hourSimple should return RROO when given 2", function () {
    const result = main.hourSimple(2);

    expect(result).toBe("RROO");
  });

  it("hourSimple should return RRRO when given 3", function () {
    const result = main.hourSimple(3);

    expect(result).toBe("RRRO");
  });

  it("hourSimple should return RRRR when given 4", function () {
    const result = main.hourSimple(4);

    expect(result).toBe("RRRR");
  });

  it("hourSimple should return RRRR when given 5", function () {
    const result = main.hourSimple(5);

    expect(result).toBe("OOOO");
  });

  it("hourSimple should return ROOO when given 6", function () {
    const result = main.hourSimple(6);

    expect(result).toBe("ROOO");
  });
});

describe("berlin horloge for hourSimple", function () {
  const main = new Main();

  it("hourSimpleFive should return OOOO when given 0", function () {
    const result = main.hourSimpleFive(0);

    expect(result).toBe("OOOO");
  });

  it("hourSimpleFive should return OOOO when given 1", function () {
    const result = main.hourSimpleFive(1);

    expect(result).toBe("OOOO");
  });

  it("hourSimpleFive should return ROOO when given 5", function () {
    const result = main.hourSimpleFive(5);

    expect(result).toBe("ROOO");
  });

  it("hourSimpleFive should return ROOO when given 6", function () {
    const result = main.hourSimpleFive(6);

    expect(result).toBe("ROOO");
  });

  it("hourSimpleFive should return RROO when given 10", function () {
    const result = main.hourSimpleFive(10);

    expect(result).toBe("RROO");
  });

  it("hourSimpleFive should return RROO when given 11", function () {
    const result = main.hourSimpleFive(11);

    expect(result).toBe("RROO");
  });

  it("hourSimpleFive should return RRRO when given 15", function () {
    const result = main.hourSimpleFive(15);

    expect(result).toBe("RRRO");
  });

  it("hourSimpleFive should return RRRO when given 16", function () {
    const result = main.hourSimpleFive(16);

    expect(result).toBe("RRRO");
  });
});
