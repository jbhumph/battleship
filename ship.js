class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    };

    getLength() {
        return this.length;
    };
    getHits() {
        return this.hits;
    };
    getSunk() {
        return this.sunk;
    };

    isSunk() {
        if (this.hits >= this.length) {
            this.sunk = true;
            return true;
        } else {
            return false;
        }
    }
    hit() {
        this.hits += 1;
    }
}

module.exports = Ship;