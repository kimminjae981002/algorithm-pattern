// 기준점 간 이동 배열 패턴

// 내 코드
function maxSubarraySum(arr, n) {
    arr.sort();
    return arr[arr.length - 1] + n 
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))

function maxSubarraySum(arr, n) {
    if (n > arr.length) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - n + 1; i++){
        
    }
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1,2,5,2,8,1,5],4))