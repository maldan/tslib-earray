import * as Chai from 'chai';
import { EArray } from '../src';

describe('Base', function () {
  it('avg', async function () {
    Chai.assert.equal(new EArray([1, 2, 3]).avg(), 2);
  });

  it('sum', async function () {
    Chai.assert.equal(new EArray([1, 2, 3]).sum(), 6);
  });

  it('delete', async function () {
    const x = new EArray([1, 2, 3, 1]);
    Chai.assert.deepEqual(x.delete(1).toArray(), [1]);
    Chai.assert.deepEqual(x.toArray(), [2, 3, 1]);
  });

  it('deleteAll', async function () {
    const x = new EArray([1, 2, 3, 1]);
    Chai.assert.deepEqual(x.deleteAll(1).toArray(), [1, 1]);
    Chai.assert.deepEqual(x.toArray(), [2, 3]);
  });

  it('last', async function () {
    const x = new EArray([1, 2, 3, 15]);
    Chai.assert.equal(x.last(), 15);
  });

  it('unique', async function () {
    const x = new EArray([1, 2, 2, 3, 3, 4, 4, 4]);
    Chai.assert.deepEqual(x.unique().toArray(), [1, 2, 3, 4]);
  });

  it('contains', async function () {
    const x = new EArray([1, 2, 2, 3, 3, 4, 4, 4]);
    Chai.assert.equal(x.contains(1), true);
    Chai.assert.equal(x.contains(1, 2), true);
    Chai.assert.equal(x.contains(1, 2, 5), false);
    Chai.assert.equal(x.contains(5), false);
  });
});
