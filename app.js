// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// let t1 = performance.now();
// console.log(addUpTo(100000000));
// let t2 = performance.now();
// console.log(`addUpTo time elapsed: ${t2 - t1}`);

// // function addUpTo2(n) {
// //   return (n * (n + 1)) / 2;
// // }
// // let t1 = performance.now();
// // console.log(addUpTo2(100000000));
// // let t2 = performance.now();
// // console.log(`addUpTo2 time elapsed: ${t2 - t1}`);

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += arr[i]
  }
  return total
}

