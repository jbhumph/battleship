const Ship = require("./ship")

test('Tests ship length constructor', () => {
    const testShip = new Ship(5);
    expect(testShip.length).toBe(5);
});

test('Tests ship hit constructor', () => {
    const testShip = new Ship(5);
    expect(testShip.hits).toBe(0);
});

test('Tests ship sunk constructor', () => {
    const testShip = new Ship(5);
    expect(testShip.sunk).toBe(false);
});