function num (n) {
if (n % 3===0 && n % 5===0) {
    alert("fizzBuzz");
}else if (n % 3===0) {
    alert("fizz");      
} else if (n % 5===0) {
    alert("buzz");   
} else {
  document.write(n+'<br>');
}
}


 num(60)

 /*for numbers 1-100*/

 for(var i=1; i<101; i++){
     var text = "";
     if(i%3===0){
         text+=' Fizz'
     }
     if(i%5===0){
         text+= 'Buzz'
     }
     console.log((i+' ' + text).trim())
 }
