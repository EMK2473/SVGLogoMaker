class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    generateShape() {
        console.log(`Shape is ${this.color} and has ${this.text} as text`);
    }
}
class Circle extends Shape {
    constructor(color, text, textColor, r, shape) {
        super(color, text, textColor);
        this.r = r;
        this.area = Math.PI * Math.pow(r, 2);
        this.shape = 'circle';
    }
}
class Rectangle extends Shape {
    constructor(color, text, textColor, w, l, shape) {
        super(color, text, textColor);
        this.w = w;
        this.l = l;
        this.area = w * l;
        this.shape = 'rectangle';
    }
}
class Triangle extends Shape {
    constructor(color, text, textColor, h, b) {
        super(color, text, textColor);
        this.h = h;
        this.b = b;
        this.area = (h * b) / 2;
        this.shape = 'triangle';
    }
}
const newShape2 = new Circle('0000ff', 'SVG', '00FF00', 10, this.shape);
const newShape1 = new Rectangle('00ff00', 'SVG', '00FF00', 10, 10, this.shape);
const newShape = new Triangle('ff0000', 'SVG', '00FF00', 10, 10, this.shape);

console.log('Triangle:', newShape);
console.log('Rectangle:', newShape1);
console.log('Circle:', newShape2);