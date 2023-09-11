// test.js
const leftJoin = require('./hash-left-join'); 

describe('leftJoin', () => {
  it('should return the expected result', () => {
    const synonymsHashTable = {
      diligent: 'employed',
      fond: 'enamored',
      guide: 'usher',
      outfit: 'garb',
      wrath: 'anger',
    };

    const antonymsHashTable = {
      diligent: 'idle',
      fond: 'averse',
      guide: 'follow',
      flow: 'jam',
      wrath: 'delight',
    };

    const result = leftJoin(synonymsHashTable, antonymsHashTable);

    expect(result).toEqual([
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight'],
    ]);
  });

});
