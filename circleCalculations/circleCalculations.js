//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

//   The radius of the circle will be supplied by the user 

var radius = parseInt(prompt("What the radius for the circle?"));

function circleCalculation () {

  
   
  
//  program to calculate the area   A=πr2
  
   var area = Math.round( Math.PI * radius * Math.pow(radius, 2));
console.log(area);
  
//    calculate the perimeter of a circle C=2πr
  var circumference = Math.round( 2 * Math.PI * radius);
  console.log(circumference);
console.log("The area of the circle is " + area + " and the perimeter of the circle is " + circumference +".");  }
  circleCalculation(radius);
  
  