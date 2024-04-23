// 자신을 호출하는 것

// 한 가지 문제를 가지고 어떤 종료점(base case)에 도달할 때까지 더 작은 부분이나 변경되는 부분에서 반복적으로 수행하는 것

function sumRange(num) {
    if (num === 1) return 1; // num이 1일 때 return 종료 시점
    return num + sumRange(num - 1); // 재귀함수 호출 4 3 2 1 
} 

console.log(sumRange(4));