/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./board.ts":
/*!******************!*\
  !*** ./board.ts ***!
  \******************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _boardSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardSettings */ \"./boardSettings.ts\");\n\nvar Board = /** @class */ (function () {\n    function Board(canvas) {\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        this.canvasHeight = canvas.height;\n        this.canvasWidth = canvas.width;\n        this.cellHeight = this.canvasHeight / _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n        this.cellWidth = this.canvasWidth / _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n    }\n    Board.prototype.draw = function () {\n        this.ctx.fillStyle = '#000000';\n        for (var col = 0; col < _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY; col++) {\n            for (var row = 0; row < _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX; row++) {\n                this.ctx.fillRect(row * this.cellWidth, col * this.cellHeight, this.cellWidth - 3, this.cellHeight - 3);\n            }\n        }\n    };\n    return Board;\n}());\n\n\n\n//# sourceURL=webpack:///./board.ts?");

/***/ }),

/***/ "./boardSettings.ts":
/*!**************************!*\
  !*** ./boardSettings.ts ***!
  \**************************/
/*! exports provided: board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"board\", function() { return board; });\nvar board = {\n    dimX: 10,\n    dimY: 10\n};\n\n\n//# sourceURL=webpack:///./boardSettings.ts?");

/***/ }),

/***/ "./game.ts":
/*!*****************!*\
  !*** ./game.ts ***!
  \*****************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./board.ts\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ \"./snake.ts\");\n\n\nvar Game = /** @class */ (function () {\n    function Game(canvas) {\n        this.requestedFrameId = -1;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"](canvas);\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__[\"Snake\"](canvas);\n    }\n    Game.prototype.loop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.board.draw();\n        this.snake.draw();\n        this.snake.update();\n        // console.count('looping');\n    };\n    Game.prototype.startLoop = function () {\n        var _this = this;\n        this.requestedFrameId = requestAnimationFrame(function () { return _this.loop(); });\n    };\n    Game.prototype.endLoop = function () {\n        cancelAnimationFrame(this.requestedFrameId);\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack:///./game.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./game.ts\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    var canvas = document.querySelector('canvas');\n    var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](canvas);\n    game.startLoop();\n});\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./snake.ts":
/*!******************!*\
  !*** ./snake.ts ***!
  \******************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\n/* harmony import */ var _boardSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardSettings */ \"./boardSettings.ts\");\n\nvar Snake = /** @class */ (function () {\n    function Snake(canvas) {\n        this.canvas = canvas;\n        this.updateFrame = 0;\n        this.direction = 'right';\n        this.moveQueue = [];\n        this.snakeBody = [[5, 5], [4, 5], [3, 5], [2, 5]];\n        this.ctx = canvas.getContext('2d');\n        this.cellWidth = canvas.width / _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = canvas.height / _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        // this.direction = 'right';\n        this.x = this.snakeBody[0][0];\n        this.y = this.snakeBody[0][1];\n        window.addEventListener('keydown', this.changeDirection.bind(this));\n    }\n    Snake.prototype.changeDirection = function (e) {\n        switch (e.key) {\n            case 'w':\n                this.moveQueue.push('up');\n                break;\n            case 'd':\n                this.moveQueue.push('right');\n                break;\n            case 's':\n                this.moveQueue.push('down');\n                break;\n            case 'a':\n                this.moveQueue.push('left');\n                break;\n            default:\n                return;\n        }\n    };\n    Snake.prototype.setNextDirection = function () {\n        var nextDirection = this.moveQueue.shift();\n        switch (nextDirection) {\n            case 'up':\n                return this.direction !== 'down' ? 'up' : 'down';\n            case 'right':\n                return this.direction !== 'left' ? 'right' : 'left';\n            case 'down':\n                return this.direction !== 'up' ? 'down' : 'up';\n            case 'left':\n                return this.direction !== 'right' ? 'left' : 'right';\n            default:\n                return this.direction;\n        }\n    };\n    Snake.prototype.draw = function () {\n        this.ctx.fillStyle = '#ff0000';\n        for (var i = 0; i < this.snakeBody.length; i++) {\n            var node = this.snakeBody[i];\n            this.ctx.fillRect(node[0] * this.cellWidth, node[1] * this.cellHeight, 30, 30);\n        }\n    };\n    Snake.prototype.updateSnakeBody = function (head) {\n        this.snakeBody.unshift(head);\n        this.snakeBody.pop();\n    };\n    Snake.prototype.update = function () {\n        this.updateFrame++;\n        if (this.updateFrame % 10 === 0) {\n            this.direction = this.setNextDirection();\n            switch (this.direction) {\n                case 'up':\n                    this.y--;\n                    break;\n                case 'right':\n                    this.x++;\n                    break;\n                case 'down':\n                    this.y++;\n                    break;\n                case 'left':\n                    this.x--;\n                    break;\n                default:\n                    break;\n            }\n            if (this.x === _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX)\n                this.x = 0;\n            if (this.x < 0)\n                this.x = _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n            if (this.y === _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY)\n                this.y = 0;\n            if (this.y < 0)\n                this.y = _boardSettings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n            this.updateSnakeBody([this.x, this.y]);\n        }\n    };\n    return Snake;\n}());\n\n\n\n//# sourceURL=webpack:///./snake.ts?");

/***/ })

/******/ });