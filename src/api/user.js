import ajax from "./common";

const loginUrl = "/api/v1/login"
const addUserUrl = "/api/v1/user"

export const reqLogin = (username,password)=> ajax(loginUrl, {username,password},"POST")

export const reqAddUser = user => ajax(addUserUrl, {user},"POST")