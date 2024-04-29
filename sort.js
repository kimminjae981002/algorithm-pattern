// 버블 정렬

// 오름차순으로 만들기
function sort(arr) {
  // 맨 마지막 배열이 다음에 값이 없는데 비교를 하기 때문에
  // arr.length를 값으러 넣고 점점 줄여간다.
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function sort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // 맨 마지막 배열이 다음에 값이 없는데 비교를 하기 때문에
  // arr.length를 값으러 넣고 점점 줄여간다.
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log(sort([5, 8, 61, 2]));
