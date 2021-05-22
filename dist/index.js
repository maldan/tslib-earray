"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EArray = void 0;
class EArray extends Array {
    constructor(arr) {
        super(...arr);
    }
    avg(field) {
        let out = 0;
        if (!this.length) {
            return 0;
        }
        if (field) {
            for (let i = 0; i < this.length; i++) {
                out += this[i][field] * 1;
            }
        }
        else {
            for (let i = 0; i < this.length; i++) {
                out += this[i];
            }
        }
        return out / this.length;
    }
    sum(field) {
        let out = 0;
        if (field) {
            for (let i = 0; i < this.length; i++) {
                out += this[i][field] * 1;
            }
        }
        else {
            for (let i = 0; i < this.length; i++) {
                out += this[i];
            }
        }
        return out;
    }
    gap() {
        const out = [];
        for (let i = 0; i < this.length - 1; i++) {
            out.push(this[i + 1] - this[i]);
        }
        return out;
    }
    extractField(field) {
        const out = [];
        for (let i = 0; i < this.length; i++) {
            // deno-lint-ignore no-prototype-builtins
            if (this[i].hasOwnProperty(field)) {
                out.push(this[i][field]);
            }
        }
        return out;
    }
    delete(...value) {
        const removed = [];
        for (let i = 0; i < value.length; i++) {
            const index = this.indexOf(value[i]);
            if (index !== -1) {
                removed.push(...this.splice(index, 1));
            }
        }
        return removed;
    }
    /**
     * Remove passed value from array and remove them all.
     * Return an array of removed values.
     * @param {unknown} value
     */
    deleteAll(...value) {
        const removed = [];
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (this[j] === value[j]) {
                    removed.push(this.splice(j, 1)[0]);
                    j--;
                }
            }
        }
        return removed;
    }
    last() {
        return this[this.length - 1];
    }
    shuffle() {
        const array = JSON.parse(JSON.stringify(this));
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    clear() {
        this.length = 0;
    }
    unique(field) {
        if (field) {
            const out = [];
            for (let i = 0; i < this.length; i++) {
                let isExist = false;
                for (let j = 0; j < out.length; j++) {
                    if (out[j][field] === this[i][field]) {
                        isExist = true;
                        break;
                    }
                }
                if (!isExist) {
                    out.push(this[i]);
                }
            }
            return out;
        }
        return this.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
    }
    contains(...value) {
        for (let i = 0; i < value.length; i++) {
            if (!this.includes(value[i])) {
                return false;
            }
        }
        return true;
    }
    chunk(size = 0) {
        if (size <= 0) {
            return this;
        }
        const out = [];
        const l = Math.ceil(this.length / size);
        for (let i = 0; i < l; i++) {
            const p = this.splice(0, size);
            out.push(p);
        }
        return out;
    }
}
exports.EArray = EArray;
