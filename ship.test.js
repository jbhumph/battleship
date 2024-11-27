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

test('Tests ship hit module', () => {
    const testShip = new Ship(5);
    testShip.hit();
    expect(testShip.hits).toBe(1);
});

test('Tests ship isSunk module for false', () => {
    const testShip = new Ship(1);
    expect(testShip.isSunk()).toBe(false);
});

test('Tests ship isSunk module for true', () => {
    const testShip = new Ship(1);
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
})