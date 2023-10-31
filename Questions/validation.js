const validation = {
    valInput3Nums: (input) => /^[0-9]{1,3}$/.test(input) ? true : (() => {throw new Error("Please provide an input. Max 3 digits (0-9) only."); })(),

    valHexNum: (input) => /^[0-9a-fA-F]{6}$/.test(input) ? true : (() => {throw new Error("Please provide a hexadecimal key. Max 6 characters (0-9, A-F, a-f) only.");}) (),

    valLetter3: (input) => /^[A-Za-z]{1,3}$/.test(input) ? true : (() => {throw new Error("Please provide a valid text input for your shape. Max 3 characters (A-Za-z) only.");}),

    valPoints: (input) => /^(\d{1,3},\d{1,3} ){2}\d{1,3},\d{1,3}$/.test(input) ? true: (() => {throw new Error("Please provide points (6 required). Format: 'x,y x,y x,y'")}),
}
  module.exports = validation;