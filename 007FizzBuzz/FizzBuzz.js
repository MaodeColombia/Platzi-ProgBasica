for (var i = 1; i <= 100; i++) {
  if (d(i,3)) {
    document.write("Fizz");}

  if (i%5 == 0) {
    document.write("Buzz");}

  if (!d(i,3) && !d(i,5)) {
    document.write(i);}

  document.write ("<br/>");}

function d(num,div) {
  if (num % div == 0) {return true;}
  else {return false;}}
