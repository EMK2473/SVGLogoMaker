// const width = `${shape.W}`;
// const height = `${shape.H}`;
// const x1 = `${shape.W}`;
// const x2 = `${shape.W}`;
// const y1 = `${shape.W}`;
// const y2 = `${shape.W}`;
// const area = `${shape.area}`;
// const sideLength = `${shape.sideLength}`
// const height = 



function generateObject(shape) {
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
}
  module.exports = generateObject
