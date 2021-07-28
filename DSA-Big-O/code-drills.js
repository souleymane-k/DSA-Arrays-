// let n = 0;
function TOH (num, source, dest, temp) {
    // n++;
    if (num === 1) {
      console.log(`${source} -> ${dest}`)
      return;
    }
  
    TOH(num - 1, source, temp, dest)
    console.log(`${source} -> ${dest}`)
    TOH(num - 1, temp, dest, source)
    // console.log(n)
  }
  TOH (3, 'A', 'C', 'B')
  
  function countingSheep (numSheep) {
    for (let i = numSheep; i > 0; i--) {
      console.log(`${i}: Another sheep jumps over the fence`)
    }
    console.log('All sheep jumped over the fence')
  }
  countingSheep(4);
  
  function powerCalculator (base, exp) {
    let result = base;
    for (i = 1; i < exp; i++) {
      result *= base
    }
    console.log(result)
  }
  powerCalculator(2, 3);
  
  function reverseString(str) {
    if (str.length < 2) {
      return str;
    }
    let revStr = '';
    for (i = 1; i <= str.length; i++) {
      revStr += str[str.length-i]
    }
    console.log(revStr);
  }
  reverseString('hello');
  
  function nthTriNum(n) {
    let triNum = 0
    for (let i= 0; i <= n; i++) {
      triNum += i
    }
    console.log(triNum)
  }
  
  nthTriNum(5)
  
  function strSplit (str, sep) {
    let result = []
    let prevIndex = -1
    for (let i = 0; i < str.length; i++) {
      if (str[i] === sep) {
        result.push(str.slice(prevIndex+1, i))
        prevIndex = i
      }
      if (i === str.length-1 && str[i] !== sep)  {
        result.push(str.slice(prevIndex+1, i+1))
      }
    }
    console.log(result)
  }
  
  strSplit('02/20/2020', '/')
  
  function fibonacci(n) {
    let seq = [1, 1]
    if (n===0) {
      console.log(0);
      return;
    }
    if(n===1){
      console.log(1)
      return;
    }
    if(n===2){
      console.log(seq)
      return;
    }
    for (let i = 2; i <= n; i++) {
      seq.push(seq[i-1]+seq[i-2])
    }
    console.log(seq)
  }
  
  fibonacci(9)
  
  function factorial(n){
    let result = 1
    for(let i = n; i > 0; i--) {
      result = result * i
    }
    console.log(result)
  }
  
  factorial(5)