import { render } from "./modules/render";
import {UserService} from "./modules/userService";
import {addUsers} from "./modules/addUsers";
import {deleteUser} from "./modules/deleteUser";
import {updateUser} from "./modules/updateUser";
import {editUser} from "./modules/editUser";
import {filterUsers} from "./modules/filterUsers";
import {sortUser} from "./modules/sortUser";
import {searchUser} from "./modules/searchUser";

window.userService = new UserService({url: 'http://localhost:4547/users'});

userService.getAll().then(data => {
    render(data)
})

addUsers();
deleteUser();
updateUser();
editUser();
filterUsers();
sortUser();
searchUser()