class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    generateObject(shape) {
        switch(shape){
          case "circle":
            return ` <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="75" r="${shape.r}" stroke="#${shape.color}" fill="#${shape.color}" stroke-width="5"/>
            <text x="150" y="125" font-size="${shape.textSize} text-anchor="middle" fill="#${shape.textColor}>${shape.text}</text>`
          case "rectangle":
            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="${shape.W}" height="${shape.H}"/>
            <rect x="60" y="10" rx="10" ry="10" width="${shape.W}" height="${shape.H}"/>
            <text x="150" y="125" font-size="${shape.textSize} text-anchor="middle" fill="#${shape.textColor}>${shape.text}</text>`
          case "triangle":
            return`<svg width="${svg.W}" height="${svg.H}" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
            <text x="150" y="125" font-size="${shape.textSize} text-anchor="middle" fill="#${shape.textColor}>${shape.text}</text>
          # ${shape.shape}
          # ${shape.color}
          # ${shape.text}
          # ${shape.circleR}
          # ${shape.textHexValue}
          `
        }
        
        module.exports = generateObject;
}
}

class Circle extends Shape {
    constructor(color, text, textColor, r) {
        super(color, text, textColor);
        this.r = r;
        this.area = Math.PI * Math.pow(r, 2);
    }
    generateShape(){
        
    }
}
class Rectangle extends Shape {
    constructor(color, text, textColor, w, l, x, x1, y) {
        super(color, text, textColor);
        this.w = w;
        this.l = l;
        this.area = w * l;
        this.x = x;
        this.x1 = x1;
        this.y = y;
    }
}
class Triangle extends Shape {
    constructor(color, text, textColor, h, b, points, sideLength, area, math) {
        super(color, text, textColor);
        this.h = h;
        this.b = b;
        this.Math = (2 * area) / sideLength;
        this.sideLength = sideLength;
        this.points = points;
        this.area = area;
    }
}
const newShape2 = new Circle('0000ff', 'SVG', '00FF00', 10);
const newShape1 = new Rectangle('00ff00', 'SVG', '00FF00', 10, 10);
const newShape = new Triangle('ff0000', 'SVG', '00FF00', 10, 10, "x", 30, 400);

console.log('Triangle:', newShape);
console.log('Rectangle:', newShape1);
console.log('Circle:', newShape2);



// generateShape()




