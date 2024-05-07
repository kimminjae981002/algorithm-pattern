class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
}

const user1 = new Student("kim", "minjae");

console.log(user1.firstName);
