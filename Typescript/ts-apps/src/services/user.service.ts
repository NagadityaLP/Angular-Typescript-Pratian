
export class UserService{
    constructor(){
        console.log("User Service")
    }
    findAll() : Array<string>{
        return ['a','b','c']
    }
}