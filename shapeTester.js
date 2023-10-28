class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    generateShape() {
        console.log(`Shape is ${this.Shape} and it is ${this.color} and has ${this.text} as text that is ${this.textColor}`);
    }
}
class Circle extends Shape {
    constructor(color, text, textColor, r) {
        super(color, text, textColor);
        this.r = r;
        this.area = Math.PI * Math.pow(r, 2);
    }
}
class Rectangle extends Shape {
    constructor(color, text, textColor, w, l) {
        super(color, text, textColor);
        this.w = w;
        this.l = l;
        this.area = w * l;
    }
}
class Triangle extends Shape {
    constructor(color, text, textColor, h, b) {
        super(color, text, textColor);
        this.h = h;
        this.b = b;
        this.area = (h * b) / 2;
    }
}
const newShape = new Triangle('ff0000', 'SVG', '00FF00', 10, 10);
const newShape1 = new Rectangle('00ff00', 'SVG', '00FF00', 10, 10);
const newShape2 = new Circle('0000ff', 'SVG', '00FF00', 10);
console.log('Triangle:', newShape);
console.log('Rectangle:', newShape1);
console.log('Circle:', newShape2);