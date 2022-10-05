
let n = 0
let k = 2
let sum = 0
let i =0

n = prompt("n의 값을 입력해주세요")
k = prompt("k의 값을 입력해주세요")

if(n, k > 1){
    for(i>0; i<=n; i++){
        if(i%k==0){
            sum += i;
        }
    }
  }
  else if(k == ''){
    k = 2;
    for(i>0; i<=n; i++){
        if(i%k==0){
            sum += i;
        }
    }
  }
  else{
    alert('1이상의 정수만 입력하세요')
  }
console.log(sum);