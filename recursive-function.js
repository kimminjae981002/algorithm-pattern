// // 자신을 호출하는 것

// // 한 가지 문제를 가지고 어떤 종료점(base case)에 도달할 때까지 더 작은 부분이나 변경되는 부분에서 반복적으로 수행하는 것

// function sumRange(num) {
//     if (num === 1) return 1; // num이 1일 때 return 종료 시점
//     return num + sumRange(num - 1); // 재귀함수 호출 4 3 2 1
// }

// console.log(sumRange(4));

// 순수 재귀
function collectOddValues(arr) {
  // 함수 호출 때마다 배열이 리셋된다.
  let newArr = [];

  // base case
  if (arr.length === 0) {
    return newArr;
  }

  // 조건
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // 재귀 호출 및 배열
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  // newArr 에 1이 있으니 concat 하면 재귀 함수에 남고
  // 다시 빈 배열에서 조건에 맞으면 3 , 5가 concat으로 함수에 들어간다.
  // 짝수일 때는 newArr에 들어가지 않으니 concat을 해도 변화가 없다.

  // base case
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
