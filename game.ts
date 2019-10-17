import { Board } from './board';
import { Snake } from './snake';

export class Game {
  private board: Board;
  private snake: Snake;
  private requestedFrameId: number = -1;

  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.board = new Board(canvas);
    this.snake = new Snake(canvas);
  }

  private loop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.board.draw();
    this.snake.draw();
    this.snake.update();

    // console.count('looping');
  }

  public startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  public endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }
}
