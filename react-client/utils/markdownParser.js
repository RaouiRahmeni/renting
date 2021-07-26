const markdownParser = function (text) {
  // get bold
  var text_for_bolding = text
  var i = 0;
  var bolds = []
  while (i < text_for_bolding.length) {
    var start = text_for_bolding.indexOf('**', i)
    var end = text_for_bolding.indexOf('**', start + 2)
    bolds.push(text_for_bolding.slice(start + 2, end))
    text_for_bolding = text_for_bolding.slice(end + 2)
    i = end + 2
  }
  for (var j = 0; j < text.length; j++) {
    var x="**" + bolds[j] + "**"
var y="<b>" + bolds[j] + "</b>"
    text=text.replace(x, y)
  }
  //get italics
  //get italics
  var text_for_italic = text
  i = 0;
  var italics = []
  while (i < text_for_italic.length) {
    var start = text_for_italic.indexOf('_', i)
    var end = text_for_italic.indexOf('_', start + 1)

    italics.push(text_for_italic.slice(start + 1, end))


    i = end + 1
  }
  for (var j = 0; j < italics.length; j++) {
    var x="_" + italics[j] + "_"
    var y="<i>" + italics[j] + "</i>"
    text=text.replace(x, y)
  }
  console.log(text)
  //get headers
  // var headers1 = []
  // var headers2 = []
  // var headers3 = []
  // var headers4 = []
  // var headers5 = []
  // var headers6 = []
  // var array = text.split(".")

  // for (var k = 0; k < array.length; k++) {
  //   if (array[k].indexOf('######') >= 0) {

  //     headers6.push(array[k])
  //   }
  //   else if (array[k].indexOf('#####') >= 0) {

  //     headers5.push(array[k])
  //   }
  //   else if (array[k].indexOf('####') >= 0) {

  //     headers4.push(array[k])
  //   }
  //   else if (array[k].indexOf('###') >= 0) {

  //     headers3.push(array[k])
  //   }
  //   else if (array[k].indexOf('##') >= 0) {

  //     headers2.push(array[k])
  //   }
  //   else if (array[k].indexOf('#') >= 0) {

  //     headers1.push(array[k])
  //   }
  // }
  // for (var j = 0; j < headers6.length; j++) {
  //   var y="<h6>" + headers6[j].slice(6) + "</h6>"
  //   text=text.replace( headers6[j] , y)
  // }
  // for (var j = 0; j < headers5.length; j++) {
  //   var y="<h5>" + headers5[j].slice(5) + "</h5>"
  //   text=text.replace( headers5[j] , y)
  // }
  // for (var j = 0; j < headers4.length; j++) {
  //   var y="<h4>" + headers4[j].slice(4) + "</h4>"
  //   text=text.replace( headers4[j] , y)
  // }
  // for (var j = 0; j < headers3.length; j++) {
  //   var y="<h3>" + headers3[j].slice(3) + "</h3>"
  //   text=text.replace( headers3[j] , y)
  // }
  // for (var j = 0; j < headers2.length; j++) {
  //   var y= "<h2>" + headers2[j].slice(2) + "</h2>"
  //   text=text.replace( headers2[j] ,y)
  // }
  // for (var j = 0; j < headers1.length; j++) {
  //   var y= "<h1>" + headers1[j].slice(1) + "</h1>"
  //   text=text.replace( headers1[j] ,y)
  // }
  return text;
}

export default markdownParser;
