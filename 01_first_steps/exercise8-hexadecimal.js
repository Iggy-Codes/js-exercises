// Hexadecimal

// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

// Hint: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split

// >>> var a = getRGB ('#00FF00');
// >>> a;
// “rgb(0,255,0)”;

function getRGB (colorHex) {
  var sRGB = 'rgb('
  for (var i = 1; i < colorHex.length; i += 2) {
    sRGB += parseInt(colorHex.substr(i, 2), 16) + ','
  }
  sRGB = sRGB.substr(0, sRGB.length - 1) + ')'
  return sRGB
}

// Hexadecimal enhanced

// Improves the previous function so besides the conversion also identifies some basic colors:

// Black: #000000
// White: #FFFFFF
// Red: #FF0000
// Green: #00FF00
// Blue: #0000FF
// So the result can be (for these cases):

// >>> var a = getRGB ('#00FF00');
// >>> a;
// “rgb(0,255,0)   verde”;

function getRGBimproved (colorHex) {
  var sColor
  switch (colorHex) {
    case '#000000':
      sColor = 'Black'
      break
    case '#FFFFFF':
      sColor = 'White'
      break
    case '#FF0000':
      sColor = 'Red'
      break
    case '#00FF00':
      sColor = 'Green'
      break
    case '#0000FF':
      sColor = 'Blue'
      break
    default:
      sColor = 'Color name unknown'
  }
  return getRGB(colorHex) + '   ' + sColor
}
