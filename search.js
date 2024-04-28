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

// 이진 검색 기능
// 선형 검색에서 개선된 알고리즘
// 이진 검색은 확인을 하면 항목의 절반을 없앨 수가 있다.
// 정렬이 돼있어야한다.

function binarySearch(arr, el) {
  arr.sort((a, b) => {
    return a - b;
  });

  // 배열의 시작
  let start = 0;
  // 배열의 끝
  let end = arr.length - 1;
  // 배열의 중간점
  let middle = Math.floor((start + end) / 2);

  // 배열의 시작점이 배열의 끝보다 커지면
  // 배열 안에 요소가 없는 것이니 반복몬 종료
  while (start <= end) {
    if (arr[middle] < el) {
      start = middle + 1;
    } else if (arr[middle] > el) {
      end = middle - 1;
    } else {
      return middle;
    }

    // 중간점을 다시 위의 결과로 재할당
    middle = Math.floor((start + end) / 2);
  }

  // 배열의 끝을 봤다면 -1 return
  return -1;
}

console.log(binarySearch([28, 13, 15, 2, 5, 6, 9], 10));

// naive search strings 문자열 찾기

function naiveSearch(long, short) {
  let answer = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // long의 문자와 short문자가 다르면 내부 반복문을 빠져 나온다.
      if (long[i + j] !== short[j]) {
        break;
      }

      // j가 short길이와 같다면 내부 반복문이 끝까지 실행됨을 뜻한다.
      // 그러면 같은 글자가 있다는 뜻
      if (j === short.length - 1) {
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(naiveSearch("lorie loled", "lo"));
