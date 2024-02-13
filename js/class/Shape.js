export class Shape {
    _x
    _y
    _lineWidth
    _color

    constructor(x, y, _lineWidth = 1, _color = 'black') {
        this._x = x
        this._y = y
        this._lineWidth = _lineWidth
        this._color = _color
    }
    
    set lineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    get lineWidth() {
        return this._lineWidth
    }

    set color(color) {
        this._color = color;
    } 
    get color () {
        return this._color
    }
}