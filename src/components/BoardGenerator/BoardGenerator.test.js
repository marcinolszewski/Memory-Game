import BoardGenerator from './BoardGenerator';

const setUp = (cardBack, boardSize) => {
  const component = BoardGenerator(cardBack, boardSize);
  return component;
};

let wrapper;

beforeEach(() => {
  wrapper = setUp('animals', 8);
});

describe('BOARD GENERATOR function', () => {
  it('Should return array which elements are objects', () => {
    wrapper.forEach((el) => {
      expect(typeof el).toEqual('object');
    });
  });

  it('Should return 16 objects when 8 is passed as boardSize', () => {
    expect(wrapper.length).toEqual(16);
  });

  it('Every object should have "imgSrc" property', () => {
    wrapper.forEach((el) => {
      expect(el.hasOwnProperty('imgSrc')).toBe(true);
    });
  });

  it('Every object should have "pairId" property', () => {
    wrapper.forEach((el) => {
      expect(el.hasOwnProperty('pairId')).toBe(true);
    });
  });

  it('Every object should have "isVisible" property', () => {
    wrapper.forEach((el) => {
      expect(el.hasOwnProperty('isVisible')).toBe(true);
    });
  });

  it('Every object should have "id" property', () => {
    wrapper.forEach((el) => {
      expect(el.hasOwnProperty('id')).toBe(true);
    });
  });
});
