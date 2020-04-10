import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import images from '../../componentAssets/Images';

const BoardGenerator = () => {
  const shuffledArray = [
    {
      imgSrc: images.cat,
      id: uuidv4(),
      pairId: 1,
      isVisible: false,
    },
    {
      imgSrc: images.dino,
      id: uuidv4(),
      pairId: 2,
      isVisible: false,
    },
    {
      imgSrc: images.giraffe,
      id: uuidv4(),
      pairId: 3,
      isVisible: false,
    },
    {
      imgSrc: images.goat,
      id: uuidv4(),
      pairId: 4,
      isVisible: false,
    },
    {
      imgSrc: images.panda,
      id: uuidv4(),
      pairId: 5,
      isVisible: false,
    },
    {
      imgSrc: images.rhino,
      id: uuidv4(),
      pairId: 6,
      isVisible: false,
    },
    {
      imgSrc: images.snake,
      id: uuidv4(),
      pairId: 7,
      isVisible: false,
    },
    {
      imgSrc: images.tiger,
      id: uuidv4(),
      pairId: 8,
      isVisible: false,
    },
    {
      imgSrc: images.cat,
      id: uuidv4(),
      pairId: 1,
      isVisible: false,
    },
    {
      imgSrc: images.dino,
      id: uuidv4(),
      pairId: 2,
      isVisible: false,
    },
    {
      imgSrc: images.giraffe,
      id: uuidv4(),
      pairId: 3,
      isVisible: false,
    },
    {
      imgSrc: images.goat,
      id: uuidv4(),
      pairId: 4,
      isVisible: false,
    },
    {
      imgSrc: images.panda,
      id: uuidv4(),
      pairId: 5,
      isVisible: false,
    },
    {
      imgSrc: images.rhino,
      id: uuidv4(),
      pairId: 6,
      isVisible: false,
    },
    {
      imgSrc: images.snake,
      id: uuidv4(),
      pairId: 7,
      isVisible: false,
    },
    {
      imgSrc: images.tiger,
      id: uuidv4(),
      pairId: 8,
      isVisible: false,
    },
  ].sort(() => Math.random() - 0.5);

  return shuffledArray;
};

export default BoardGenerator;
