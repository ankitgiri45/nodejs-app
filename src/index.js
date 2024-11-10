"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var my_central_lib_1 = require("my-central-lib");
var user = new my_central_lib_1.User(1, "John Doe", "Role.Admin");
var role = {
    user: user
};
console.log(user === role.user); // true
