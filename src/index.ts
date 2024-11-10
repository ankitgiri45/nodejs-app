import {User, Role} from "my-central-lib"

const user = new User(1, "John Doe", "Role.Admin");

const role:Role = {
    user: user
}
console.log(user === role.user); // true