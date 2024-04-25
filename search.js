// 검색 알고리즘

// 선형 검색 기능
// 배열에서 내가 원하는 것을 찾을 때
// js에는 선형 검색 기능이 있다.
// indexOf, includes, find, findIndex
// 이 모든 것들이 선형 검색 기능으로 값을 찾는다.
// indexOf를 만들자

function indexOf(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 4, 5], 4));
