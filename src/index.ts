export class EArray<T> extends Array {
  static get [Symbol.species]() {
    return Array;
  }

  constructor(arr: any) {
    super(...(arr as any));
  }

  avg(field?: string): number {
    let out = 0;
    if (!this.length) {
      return 0;
    }
    if (field) {
      for (let i = 0; i < this.length; i++) {
        out += this[i][field] * 1;
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        out += this[i];
      }
    }
    return out / this.length;
  }

  sum(field?: string): number {
    let out = 0;
    if (field) {
      for (let i = 0; i < this.length; i++) {
        out += this[i][field] * 1;
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        out += this[i];
      }
    }
    return out;
  }

  gap(): EArray<number> {
    const out = [];
    for (let i = 0; i < this.length - 1; i++) {
      out.push(this[i + 1] - this[i]);
    }
    return new EArray(out);
  }

  extractField(field: string): EArray<unknown> {
    const out = [];
    for (let i = 0; i < this.length; i++) {
      // deno-lint-ignore no-prototype-builtins
      if (this[i].hasOwnProperty(field)) {
        out.push(this[i][field]);
      }
    }
    return new EArray(out);
  }

  delete(...value: unknown[]): EArray<T> {
    const removed = new EArray<T>([]);
    for (let i = 0; i < value.length; i++) {
      const index = this.indexOf(value[i]);
      if (index !== -1) {
        removed.push(...this.splice(index, 1));
      }
    }

    return removed;
  }

  deleteAll(...value: unknown[]): EArray<T> {
    const removed = new EArray<T>([]);
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (this[j] === value[i]) {
          removed.push(...this.splice(j, 1));
          j--;
        }
      }
    }

    return removed;
  }

  last(): T {
    return this[this.length - 1];
  }

  shuffle(): EArray<T> {
    const array = JSON.parse(JSON.stringify(this));

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return new EArray(array);
  }

  clear(): void {
    this.length = 0;
  }

  unique(field?: string): EArray<T> {
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
      return new EArray(out);
    }
    return new EArray(
      this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      }),
    );
  }

  contains(...value: unknown[]): boolean {
    for (let i = 0; i < value.length; i++) {
      if (!this.includes(value[i])) {
        return false;
      }
    }
    return true;
  }

  chunk(size: number = 0): EArray<unknown> {
    if (size <= 0) {
      return this;
    }
    const out = [];
    const l = Math.ceil(this.length / size);
    for (let i = 0; i < l; i++) {
      const p = this.splice(0, size);
      out.push(p);
    }
    return new EArray(out);
  }

  toArray(): T[] {
    return [...this];
  }
}
