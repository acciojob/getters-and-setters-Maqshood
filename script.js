// Person class
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Setter for name
  set name(name: string) {
    this._name = name;
  }

  // Getter for age
  get age(): number {
    return this._age;
  }

  // Setter for age
  set age(age: number) {
    this._age = age;
  }
}

// Student class extending Person
class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class extending Person
class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Example test cases
const person = new Person("John", 25);
console.log(person.name); // Should output: John

person.age = 30;
console.log(person.age); // Should output: 30

const student = new Student("John", 30);
student.study(); // Should output: John is studying

const teacher = new Teacher("John", 30);
teacher.teach(); // Should output: John is teaching