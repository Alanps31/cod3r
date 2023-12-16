import { User } from "../model/user_model.js";

function creatUser() {
    let new_user = new User("Alan","Santos",{"home":"Tv Gutemberg", "work":" Av Frediroc Ritter"})

    return new_user
}
export {creatUser}