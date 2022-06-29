import Person from "./Person";

export class Student extends Person {
    course;
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    getCourse() {
        this.course;
    }
}

