let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let count = 0;

let sum = 0;
arr.forEach((ele,index)=>{
  if(index % 2 != 0){
    sum += ele;
    count++;
  }
})

console.log(sum / count);