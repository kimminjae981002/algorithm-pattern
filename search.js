// 검색 알고리즘

// 선형 검색 기능
// 배열에서 내가 원하는 것을 찾을 때
// js에는 선형 검색 기능이 있다.
// indexOf, includes, find, findIndex
// 이 모든 것들이 선형 검색 기능으로 값을 찾는다.
// indexOf를 만들자

// function indexOf(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(indexOf([1, 2, 3, 4, 5], 4));

// 이진 검색 기능
// 선형 검색에서 개선된 알고리즘
// 이진 검색은 확인을 하면 항목의 절반을 없앨 수가 있다.
// 정렬이 돼있어야한다.

let min = 0; // 좌측 기준
// 중간 지점보다 낮다면 max = middle - 1 = 4
let max = arr.length - 1; // 우측 기준

// 좌측 기준이 우측 기준까지 도달할 때까지 값을 찾는다.
while (min <= max) {
  // 배열의 중간 지점을 찾는다.
  let middle = Math.floor((min + max) / 2); // 5 -> 2

  // 값이 중간 지점보다 낮게 있다면
  if (value < arr[middle]) {
    max = middle - 1;
  }

  // 값이 중간 지점보다 높게 있다면
  if (value > arr[middle]) {
    min = middle + 1;
  }
}
