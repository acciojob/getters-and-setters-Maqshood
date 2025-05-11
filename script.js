//complete this code
class Person {
	private_name: string;
	private_age: number;
	constructor(name: string; age: number;){
		this.name=name;
	this.age=age;
	}
get name(): string{
	return this._name;
}
set name(name: string){
	this._name=name;
}
get age(): number{
	return this._age;
}
set age(age: number){
	 this._age=age;
}
}

class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}


class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}


const person = new Person("John", 25);
console.log(person.name); 

person.age = 30;
console.log(person.age); 

const student = new Student("John", 30);
student.study(); 

const teacher = new Teacher("John", 30);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
