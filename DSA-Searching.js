//4.
// in order 14 15 19 25 27 35 79 89 90 91
// pre 35 25 15 14 19 27 89 79 91 90
// post 14 19 15 27 25 79 90 91 89 35


//            35
//        /      \
//       25       89
//     /    \     / \   
//    15    27   79  91 
//   /  \            /
// 14    19         90


//post 5 7 6 9 11 10 8
//pre 8 6 5 7 10 9 11             

      //       8
      //   6      10
      // 5   7   9  11




      //exo 7

      const SHARE_PRICES = [128, 97, 121, 123, 98, 97, 105];

/**
 * The share price for a company over a week's trading is as follows:
 *  [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the
 *  company on a particular day, and sell the shares on a following day,
 *  write an algorithm to work out what the maximum profit you could make would be.
 */

function maxProfits (arr) {
  //take in an array, return max profit
  let currMin = arr[0];
  let currMinIndex = arr[0];
  let currMax = arr[arr.length-1];
  let currMaxIndex = arr[arr.length-1];
  let currMaxProfit = currMax - currMin;

  for (let i = 0; i < arr.length; i++) {
    //iterate through the array looking for a better minimum
    if (currMaxIndex > i && currMax-arr[i] > currMaxProfit) {
      currMin = arr[i];
      currMinIndex = i;
      currMaxProfit = currMax - currMin;
    }
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] > currMax) {
        currMax = arr[j];
        currMaxProfit = currMax - currMin;
      }
    }    
  }
  return currMaxProfit;
}

console.log(maxProfits(SHARE_PRICES));