// let points = [0, 3, 4];
// let dimensions = [trianlge, square, circle]; // data.points + math for circle, trianlge, and square
// let text = /[A-Za-z0-9]/; // data.text
// let hexNumbers = /[xX][0-9a-fA-F]+/;


// const length = ${length}
// const width = ${width}
// const radius = ${radius}



// let r = "red hex value input coming from entering 4 digits within red hex value range" // at least 4 numbers between XXXX-XXXX
// let o = "orange hex value input coming from entering 4 digits within red hex value range"// at least 4 numbers between XXXX-XXXX
// let y = "yellow hex value input coming from entering 4 digits within red hex value range"// at least 4 numbers between XXXX-XXXX
// let g = "green hex value input coming from entering 4 digits within red hex value range"// at least 4 numbers between XXXX-XXXX
// let b = "blue hex value input coming from entering 4 digits within red hex value range"// at least 4 numbers between XXXX-XXXX
// let i = "indigo hex value input coming from entering 4 digits within red hex value range"// at least 4 numbers between XXXX-XXXX
// let v = "violet hex value input coming from entering 4 digits within red hex value range"// at least 4 numbers between XXXX-XXXX



class Shape {
    constructor(color, textAndTextColor,){
    // this.shape = area;
    this.color = color;
    this.textAndTextColor = textAndTextColor;
    }
    generateShape() {
        console.log(`${this.area} is ${this.color} and has ${this.textAndTextColor} as text`)  }
}


class Circle extends Shape{
    constructor(color, textAndTextColor, r) {
        super(color, textAndTextColor)
        const pie = Math.PI;
        this.r = r;
        const circleArea = pie * Math.pow(r, 2)
        this.area = circleArea;
        console.log('The area of this circle is: ' + circleArea)
        console.log(`This Circle is colored ${this.color} and has ${this.textAndTextColor} as text`)
    }
}

class Rectangle extends Shape{
    constructor(color, textAndTextColor, w, l) {
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
    constructor(color, textAndTextColor, h, b) {
        super(color, textAndTextColor)
        this.h = h;
        this.l = b;
        const triArea = (h * b)/ 2;
        this.area = triArea
        console.log('The area of this Triangle is: ' + triArea)
        console.log(`This Triangle is colored ${this.color} and has ${this.textAndTextColor} as text`)
    }
}

// dynamically create objects
const newShape = new Triangle('ff0000', 'SVG + 00FF00', 10, 10 )
const newShape1 = new Rectangle('00ff00', 'SVG + 00FF00', 10, 10 )
const newShape2 = new Circle('0000ff', 'SVG + 00FF00',  10)



function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log(`SVG Logo Generated`);
      writeToFile("./examples/index.js", generateMarkdown({ ...responses }));
    });
  }
  init();




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