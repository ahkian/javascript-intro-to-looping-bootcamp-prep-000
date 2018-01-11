for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}



function forLoop(arr){
  for(let i = 0; i < 26; i++){
    if (i === 1){ arr.push("I am 1 strange loop");
  } else {arr.push("I am ${i} strange loops")}
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
  return arr
}