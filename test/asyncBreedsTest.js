// asyncBreedsTest.js
const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {

  it('provides, via callback, breed details for the Bombay breed', (done) => {
    breedDetailsFromFile('Bombay', (bombay) => {
      const expectedDescription = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
      assert.equal(expectedDescription, bombay);
      done();
    });
  });

  it('description should be undefined for a file that doesn\'t exist', (done) => {
    breedDetailsFromFile('THISDOESNTEXIST', (bombay) => {
      assert.equal(undefined, bombay);
      done();
    });
  });
});
