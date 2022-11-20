export class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    init() {
        console.log(this.userService.findAll());
    }
}
