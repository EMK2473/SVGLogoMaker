class Shape {
    constructor(shape, color, text, textColor, r, h, b, l, w, pie, x, y, cx, cy, points){
    this.color = color;
    this.textColor = textColor;
    this.text = text;
    this.shape = shape;
    this.r = r;
    this.h = h;
    this.b = b;
    this.l = l;
    this.w = w;
    this.pie = pie;
    this.x = x;
    this.y = y;
    this.cx =cx;
    this.cy = cy;
    this.points = points;
    const pie = Math.PI
    }
    generateShape() {
        console.log(`${this.area} is ${this.color} and has ${this.textAndTextColor} as text`)  }
}

class Circle extends Shape{
    constructor(color, text, textColor, r, pie, circleArea, cx, cy) {
        super(color, text, textColor, r, pie, cx, cy)
        const pie = Math.PI;
        this.r = r;
        const circleArea = pie * Math.pow(r, 2)
        this.area = circleArea;
        this.cx = cx;
        this.cy = cy;
        this.text = text;
        this.textColor = textColor;
        console.log('The area of this circle is: ' + circleArea)
        console.log(`This Circle is colored ${this.color} and has ${this.textAndTextColor} as text`)
    }
}

class Rectangle extends Shape{
    constructor(color, textAndTextColor, w, l, recArea) {
        super(color, textAndTextColor)
        this.w = w;
        this.l = l;
        const recArea = w * l;
        this.area = recArea;
        console.log('The area of this rectangle is: ' + recArea)
        console.log(`This Rectangle is colored ${this.color} and has ${this.textAndTextColor} as text`)
    }
}

class Triangle extends Shape{
    constructor(color, textAndTextColor, h, b, triArea, points) {
        super(color, textAndTextColor, points)
        this.h = h;
        this.l = b;
        const triArea = (h * b)/ 2;
        this.area = triArea
        // const points = [(50,10), (10,90), (90,90)]
        console.log('The area of this Triangle is: ' + triArea)
        console.log(`This Triangle is colored ${this.color} and has ${this.textAndTextColor} as text`)
    }
}


const newShape = new Triangle('ff0000', 'SVG + 00FF00', 10, 10 )
const newShape1 = new Rectangle('00ff00', 'SVG + 00FF00', 10, 10 )
const newShape2 = new Circle('0000ff', 'SVG + 00FF00',  10)

// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
//   }
  
//   function init() {
//     inquirer.prompt(questions).then((responses) => {
//       console.log(`SVG Logo Generated`);
//       writeToFile("./examples/index.js", generateMarkdown({ ...responses }));
//     });
//   }
//   init();




// {/* <input type="text" class="form-control" onchange="validate($event)" tabindex="9" maxlength="2">


// validate(event) {
//     let regEx = "^[-+]?[0-9A-Fa-f]+\.?[0-9A-Fa-f]*?$";
//     let isHex = regEx.match(event.target.value);
//     // Do things with isHex Boolean
//  }

// var input = document.getElementById('input');
// input.addEventListener('keyup', (event) => {
//   let regEx = /^[0-9a-fA-F]+$/;
//   let isHex = regEx.test(event.target.value.toString());
//   if(!isHex) {
//     input.value = input.value.slice(0, -1);
//   }
// }) */}