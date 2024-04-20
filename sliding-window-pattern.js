// 기준점 간 이동 배열 패턴

// 내 코드
function maxSubarraySum(arr, n) {
    arr.sort();
    return arr[arr.length - 1] + n
    // 제일 큰 값과 n을 더하는 줄 알았다.
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))

// n의 인자 수 만큼 합을 더 했을 때 마주보는 숫자들이 가장 높은 것
// 연습 코드
function maxSubarraySum(arr, n) {
    
    const sortArr = arr.slice().sort();
    const max = arr.indexOf(sortArr[sortArr.length - 1]);
    
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < arr.length; i++){
        sum1 = arr[max] + arr[max - 1];
        sum2 = arr[max] + arr[max + 1];
    };
    return sum1 > sum2 ? sum1 : sum2;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1,2,5,2,8,1,5],4))

// 슬라이딩 윈도우
function maxSubarraySum(arr, n) {
    let tempSum = 0;
    let maxSum = 0;

    // 0번부터 n번까지 합을 넣어준다.
    for (let i = 0; i < n; i++){
        tempSum += arr[i]
    }

    for (let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i];
        // 0번부터 n번까지 합에서 0번을 빼고 n번을 더한다.
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1,2,5,2,8,1,5],4))