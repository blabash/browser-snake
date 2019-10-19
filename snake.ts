import { board } from './boardSettings';

type MoveDir = 'up' | 'right' | 'down' | 'left';
type SnakeNode = [number, number];

export class Snake {
  private ctx: CanvasRenderingContext2D;
  private cellWidth: number;
  private cellHeight: number;
  private x: number;
  private y: number;
  private updateFrame: number = 0;
  private direction: string = 'right';
  private moveQueue: MoveDir[] = [];
  private tail: SnakeNode;
  private newHead: SnakeNode;
  snakeBody: SnakeNode[] = [[5, 5], [4, 5], [3, 5], [2, 5]];

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');

    this.cellWidth = canvas.width / board.dimX;
    this.cellHeight = canvas.height / board.dimX;
    // this.direction = 'right';

    this.x = this.snakeBody[0][0];
    this.y = this.snakeBody[0][1];
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
    for (let i = 0; i < this.snakeBody.length; i++) {
      let node = this.snakeBody[i];
      this.ctx.fillRect(
        node[0] * this.cellWidth,
        node[1] * this.cellHeight,
        30,
        30
      );
    }
  }

  public updateSnakeBody(head: SnakeNode) {
    this.snakeBody.unshift(head);
    this.snakeBody.pop();
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

      this.updateSnakeBody([this.x, this.y]);
    }
  }
}
