import { UserController } from "./controllers/user.controller"
import { UserService } from "./services/user.service"

//decorator declaration
function Course_(target : any){
    //decorator logic
    Object.defineProperty(target.prototype, 'Course', {
        value: 'Typescript'
    })
}


//decorator without parameter
function Course(course : any){
    //decorator logic
    return function(target : any){
        //decorator logic
        Object.defineProperty(target.prototype, 'Course', {
            value: course
        })
    }
}



@Course({id:1, name: 'Angular', duration:'40hrs'})
class Student{
    constructor(public name:string = ""){}
}
let student = new Student("Aditya") as any
console.log(`${student.name} is learning ${student.Course.name}`)


let userController = new UserController(new UserService())
userController.init()