import { board } from './boardSettings';

type MoveDir = 'up' | 'right' | 'down' | 'left';

export class Snake {
  private ctx: CanvasRenderingContext2D;
  private cellWidth: number;
  private cellHeight: number;
  private x: number;
  private y: number;
  private updateFrame: number = 0;
  private direction: string = 'right';
  private moveQueue: MoveDir[] = [];

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');

    this.cellWidth = canvas.width / board.dimX;
    this.cellHeight = canvas.height / board.dimX;
    // this.direction = 'right';

    this.x = 0;
    this.y = 0;
    window.addEventListener('keydown', this.changeDirection.bind(this));
  }

  private changeDirection(e: KeyboardEvent) {
    switch (e.key) {
      case 'w':
        this.moveQueue.push('up');
        break;
      case 'd':
        this.moveQueue.push('right');
        break;
      case 's':
        this.moveQueue.push('down');
        break;
      case 'a':
        this.moveQueue.push('left');
        break;
      default:
        return;
    }
  }

  private setNextDirection() {
    const nextDirection = this.moveQueue.shift();
    switch (nextDirection) {
      case 'up':
        return this.direction !== 'down' ? 'up' : 'down';
      case 'right':
        return this.direction !== 'left' ? 'right' : 'left';
      case 'down':
        return this.direction !== 'up' ? 'down' : 'up';
      case 'left':
        return this.direction !== 'right' ? 'left' : 'right';
      default:
        return this.direction;
    }
  }

  public draw() {
    this.ctx.fillStyle = '#ff0000';
    this.ctx.fillRect(
      this.x * this.cellWidth,
      this.y * this.cellHeight,
      30,
      30
    );
  }

  public update() {
    this.updateFrame++;
    if (this.updateFrame % 10 === 0) {
      this.direction = this.setNextDirection();
      switch (this.direction) {
        case 'up':
          this.y--;
          break;
        case 'right':
          this.x++;
          break;
        case 'down':
          this.y++;
          break;
        case 'left':
          this.x--;
          break;
        default:
          break;
      }
      if (this.x === board.dimX) this.x = 0;
      if (this.x < 0) this.x = board.dimX;
      if (this.y === board.dimY) this.y = 0;
      if (this.y < 0) this.y = board.dimY;
    }
  }
}
