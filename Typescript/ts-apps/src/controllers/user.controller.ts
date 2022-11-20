import { UserService } from "../services/user.service"

export class UserController{
    constructor(private userService:UserService){
    }
    init(){
        console.log(this.userService.findAll())
    }
}