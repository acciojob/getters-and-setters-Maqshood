class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}

get name(){
	return this._name
}
	set age(newAge){
		this._age=newAge;
	}
}

class Teacher extends Person {
	teach(){
		console.log(${this._name} is teaching);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
