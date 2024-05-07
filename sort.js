// 버블 정렬

// 오름차순으로 만들기

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // 변수에 저장해두고 값을 바꿔준다.
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

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

// 버블 정렬 최적화
// 눈으로 봤을 때 정렬이 되었음에도 불구하고 계속해서 값을 확인한다.
function sort(arr) {
  // 맨 마지막 배열이 다음에 값이 없는데 비교를 하기 때문에
  // arr.length를 값으러 넣고 점점 줄여간다.
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // 변수에 저장해둠.
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(sort([5, 8, 61, 2]));

// 선택 정렬
// 코드 이해 불가

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
