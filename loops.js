for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}

function forLoop(array){
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
  
}