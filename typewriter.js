const sentence = "hello there from lighthouse labs";
const delay = 50;
let delaySum = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delaySum) 
  delaySum += delay;

 
} 

setTimeout(() =>{
    console.log('')
},delaySum + 1)