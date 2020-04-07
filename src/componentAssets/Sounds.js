import { Howl } from 'howler';
import cardRevealSound from '../assets/sounds/cardReveal.wav';
import foundPairSound from '../assets/sounds/foundPair.wav';
import gameWinSound from '../assets/sounds/gameWin.wav';
import menuMusicSound from '../assets/sounds/bgMusic1.mp3';

export const cardReveal = new Howl({
  src: [cardRevealSound],
});

export const foundPair = new Howl({
  src: [foundPairSound],
});

export const gameWin = new Howl({
  src: [gameWinSound],
});

export const menuMusic = new Howl({
  src: [menuMusicSound],
  volume: 0.6,
  loop: true,
});
