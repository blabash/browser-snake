import { board } from './boardSettings';

export class Board {
  private ctx: CanvasRenderingContext2D;
  private canvasHeight: number;
  private canvasWidth: number;
  private cellHeight: number;
  private cellWidth: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    this.canvasHeight = canvas.height;
    this.canvasWidth = canvas.width;
    this.cellHeight = this.canvasHeight / board.dimY;
    this.cellWidth = this.canvasWidth / board.dimX;
  }

  public draw() {
    this.ctx.fillStyle = '#000000';
    for (let col = 0; col < board.dimY; col++) {
      for (let row = 0; row < board.dimX; row++) {
        this.ctx.fillRect(
          row * this.cellWidth,
          col * this.cellHeight,
          this.cellWidth - 3,
          this.cellHeight - 3
        );
      }
    }
  }
}
