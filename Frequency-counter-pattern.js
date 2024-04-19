// 빈도수 체크 패턴

// 내 코드 효율성 떨어짐
function same(arr1, arr2) {
    let answer = 0;
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]) {
                answer += 1;
            }
        }
    }

    if (answer === arr1.length) {
        console.log(answer)
    } else {
        console.log('빈도가 맞지 않습니다.')
    }

}

console.log(same([1, 2, 3], [4, 9, 1])) // 각 숫자의 제곱이 빈도가 맞다.
console.log(same([1,2,1],[4,4,1])) // 2의 제곱의 4가 빈도가 맞지가 않다.


// 중첩 반복문 효율성 떨어짐
function same(arr1, arr2) {
    let answer = 0;
    for (let i = 0; i < arr1.length; i++){
        let indexOfArr = arr2.indexOf(arr1[i])
        if (indexOfArr ===  -1 ) {
            return '빈도 수가 맞지 않다.'
        }
        // 있다면
        answer += 1;
        // arr2 배열에서 삭제해준다. 그러면 같은 값이 있어도 또 체크할 수가 없다.
        arr2.splice(indexOfArr,1)
    }
    return answer;
}

console.log(same([1, 2, 3], [4, 9, 1])) // 각 숫자의 제곱이 빈도가 맞다.
console.log(same([1,2,1],[4,4,1])) // 2의 제곱의 4가 빈도가 맞지가 않다.


// 빈도 카운터 패턴 for문을 따로 이용해 중첩 반복 제거
function same(arr1, arr2) {
    if (arr1.length !== arr1.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

// 각 객체에 배열 원소를 넣어주고 그 원소 값에 +
    for (let a of arr1) {
        frequencyCounter1[a] = (frequencyCounter1[a] || 0) + 1
        console.log(frequencyCounter1[a]=frequencyCounter1[a] || 0)
    }
// 각 객체에 배열 원소를 넣어주고 그 원소 값에 +
    for (let a of arr2) {
        frequencyCounter2[a] = (frequencyCounter2[a] || 0) +1
    }

// 각 객체1에 key의 제곱 값과 객체2의 key의 값이 다르다면 false
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
// 맞다면 true
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

console.log(same('asd', 'dsa')) // true
// { '1': 1, '2': 1, '3': 1 } { '1': 1, '4': 1, '9': 1 }
// 각 빈도가 하나씩 나왔따.
console.log(same('aa','bb')) // false

// 문자열 빈도수 체크 패턴
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {}
    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        console.log(lookup)
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    // 객체에 a가 있는지를 체크한다.
    // 없으면 a에 1을 할당하고 있으면 그 값에 + 1을 해준다.

    for (let i = 0; i < second.lnegth; i++){
        let letter = second[i]
        
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    // lookup[letter]이 0이라면 false를 반환한다.

    return true
}

console.log(validAnagram('svc','vcs'))