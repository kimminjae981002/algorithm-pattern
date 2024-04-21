// 분할과 정복 패턴

// 값을 찾기 위해 배열의 왼쪽에서 시작하여 오른쪽 끝까지 이동하는 것보다는
// 배열을 작은 조각으로 세분하여 각 조각들을 어디로 이동시킬지 결정하는 작업부터 한다.

// 정렬된 배열에서 값 찾기
// 왼쪽부터 끝까지 찾아야 한다.
function search(arr, n) {
   return arr.indexOf(n)
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 4))

// 찾아야 할 값이 가운데 지점부터 큰지 작은지를 먼저 판단한다.
function search(arr, n) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentEl = arr[middle];

        if (arr[middle] < n) {
            min = middle + 1;
        }// 중간 지점보다 숫자가 크다면 중간 지점을 더 높게 올린다.
        else if (arr[middle] > n) {
            max = middle - 1;
        }// 중간 지점보다 숫자가 작다면 중간 지점을 낮춘다.
        else {
            return middle;
        }
    }
 }
 
 console.log(search([1,2,3,4,5,6,7], 5))