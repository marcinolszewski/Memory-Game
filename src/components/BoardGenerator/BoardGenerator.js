import { v4 as uuidv4 } from 'uuid';
import { animals, frozen } from '../../componentAssets/Images';

const BoardGenerator = (cardBack, boardSize) => {
  const cardBackImg = cardBack === 'animals' ? animals : frozen;
  const createArray = (boardSize) => {
    const animalsObj = Object.keys(cardBackImg);
    const singleArray = Array.from({ length: boardSize }, () => ({}));
    singleArray.forEach((el, idx) => {
      el.imgSrc = cardBackImg[animalsObj[idx]];
      el.pairId = idx;
      el.isVisible = false;
    });

    const singleArrayCopy = JSON.parse(JSON.stringify(singleArray));

    const shuffledArray = [...singleArray, ...singleArrayCopy].sort(
      () => Math.random() - 0.5
    );

    shuffledArray.forEach((el) => (el.id = uuidv4()));

    return shuffledArray;
  };

  return createArray(boardSize);
};

export default BoardGenerator;
