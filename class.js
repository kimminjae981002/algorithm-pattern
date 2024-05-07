class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  // 이름
  hello() {
    return `Welcome! ${this.firstName}${this.lastName}!!`;
  }

  // 지각수 체크
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "너 결석";
    }
    return `${this.firstName}${this.lastName} 지각이 ${this.tardies}번 입니다. `;
  }

  // scores 배열에 점수 넣기
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  // scores 평균 구하기
  scoreAverage() {
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    }, 0);

    return sum / this.scores.length;
  }
}

const user1 = new Student("kim", "minjae");

console.log(user1.addScore(10));
console.log(user1.addScore(20));
console.log(user1.scoreAverage());
console.log(user1);
