// 헬퍼 메도스 재귀

// 외부 함수
function collectOddValues(arr) {
  let result = [];

  // 재귀 함수
  function helper(helperInput) {
    // 재귀 함수의 base case
    if (helperInput.length === 0) {
      return;
    }

    // 재귀 함수의 조건
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // slice를 이용해 외부 함수에서 받은 배열에서 하나를 자른 인자를 다시 받는다.
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// 외부에서 함수를 실행하면 재귀 함수가 내부에서 실행된다.
// 재귀 함수는 외부 함수의 인자를 받고 실행된다.
// 인자를 받은 재귀 함수는 조건에 따라 result 변수에 담아준다.

console.log(collectOddValues([1, 2, 3, 4, 5]));
