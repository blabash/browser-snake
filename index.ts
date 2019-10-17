import { Game } from './game';
document.addEventListener('DOMContentLoaded', () => {
  const canvas: HTMLCanvasElement = document.querySelector('canvas');
  const game = new Game(canvas);

  game.startLoop();
});
