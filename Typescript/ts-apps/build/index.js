var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
//decorator declaration
function Course_(target) {
    //decorator logic
    Object.defineProperty(target.prototype, 'Course', {
        value: 'Typescript'
    });
}
//decorator without parameter
function Course(course) {
    //decorator logic
    return function (target) {
        //decorator logic
        Object.defineProperty(target.prototype, 'Course', {
            value: course
        });
    };
}
let Student = class Student {
    constructor(name = "") {
        this.name = name;
    }
};
Student = __decorate([
    Course({ id: 1, name: 'Angular', duration: '40hrs' }),
    __metadata("design:paramtypes", [String])
], Student);
let student = new Student("Aditya");
console.log(`${student.name} is learning ${student.Course.name}`);
let userController = new UserController(new UserService());
userController.init();
