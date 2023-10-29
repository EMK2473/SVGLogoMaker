class Shape {
    constructor(color, text, textColor, textSize, svgW, svgH, textX, textY) {
      this.color = color;
      this.text = text;
      this.textColor = textColor;
      this.textSize = textSize;
      this.svgH = svgH;
      this.svgW=svgW;
      this.textX = textX;
      this.textY = textY;
    }
    generateShape(){
    }
  }
  class Circle extends Shape {
    constructor(color, text, textColor, textSize, circleRadius, svgW, svgH, cx, cy, textX, textY,) {
      super(color, text, textColor, textSize, svgW, svgH, cx, cy, textX, textY,);
      this.circleRadius = circleRadius;
      this.cx = cx;
      this.cy = cy;
      this.textX = textX;
      this.textY = textY;
    }
  
    generateShape() {
      return `
        <svg width="${this.svgW}" height="${this.svgH}" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${this.cx}" cy="${this.cy}" r="${this.circleRadius}" fill="#${this.color}"></circle>
          <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="middle" fill="#${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Square extends Shape {
    constructor(color, text, textColor, textSize, w, h, svgW, svgH, textX, textY, squareXPlot, squareYPlot,) {
      super(color, text, textColor, textSize, svgW, svgH, squareXPlot, squareYPlot,);
      this.w = w;
      this.h = h;      
      this.textX = textX;
      this.textY = textY;
      this.squareXPlot = squareXPlot;
      this.squareYPlot = squareYPlot;
    }
  
    generateShape() {
      return `
        <svg width="${this.svgW}" height="${this.svgH}" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect x="${this.squareXPlot}" y="${this.squareYPlot}" width="${this.w}" height="${this.h}" fill="#${this.color}" stroke="#${this.color}" stroke-width="5"/>></rect>
          <text x="150" y="125" font-size="${this.textSize}" text-anchor="middle" fill="#${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Triangle extends Shape {
    constructor(color, text, textColor, textSize, triB, triH, svgW, svgH) {
      super(color, text, textColor, textSize, svgW, svgH);
      this.triB = triB;
      this.triH = triH;
    }
  
    generateShape() {
      return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon points="${this.points}" fill="#${this.color}" stroke="#${this.color}" stroke-width="5"/>
          <text x="150" y="125" font-size="${this.textSize}" text-anchor="middle" fill="#${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  module.exports = {Circle, Triangle, Square}