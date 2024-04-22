// // 다중 포인터 패턴

function sumZero(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === 0) {
                answer += 1
            }
        }
    }
    return answer
}
// // 중첩 반복문을 사용하게 되면 배열의 수만큼 길어지기 떄문에,
// // 효율성이 엄청 떨어진다.
// // 빅오 O(N2)

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]

        if (sum === 0) {
            return [arr[left],arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

// // 고유값 구하기
// // i와 j가 다르면 i++ 해주고 i값에 j값을 넣는다.
// // 다를 시에만 if문을 실행한다.
function countUniqueValues(arr) {
    let answer = 1;
    let i = 0;
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]) {
            answer += 1;
            i++;
            arr[i] = arr[j]
        }
    }

    return answer;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))

// 연습문제
function areThereDuplicates(...arguments) {
    arguments.sort();

    let start = 0;
    let next = 1;

    let answer = false;

    while (next < arguments.length) {
        arguments[start] === arguments[next] ? answer = true : answer;
        start = next;
        next++
    }

    return answer;
}

console.log(areThereDuplicates(1,2,3,4))

// 연습문제
function areThereDuplicates(...arguments) {
    let set = new Set(arguments)
    return set.size !== arguments.length ? true : false 
}

console.log(areThereDuplicates(1, 2, 3, 4, 1))

// 연습문제
function averagePair(arr, num){
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) {
            return true;
        } else if (avg < num) {
            start++;
        } else {
            end--;
        }
    }

    return false;
}
  
console.log(averagePair([1, 2, 3, 4], 2.5))
