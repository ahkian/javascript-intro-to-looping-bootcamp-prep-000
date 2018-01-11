for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}

var arr = [1, 2, 3]

function forLoop(arr){
  for(let i = 0; i < 26; i++){
    if (i === 1){ array.push("I am 1 strange loop");
  } else {array.push("I am ${i} strange loops")}
 }
}

function whileLoop(num){
  while(num > 0){
    console.log(--num)
  }
  return "done"
}

function doWhileLoop(arr){
  function maybeTrue() {
  return Math.random() >= 0.5
 }
  do {
    arr.pop() 
  } while(arr.length > 0 && maybeTrue());
  return array
}