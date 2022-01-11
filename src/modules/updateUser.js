import {render} from "./render";

export const updateUser = () => {
    const tbody = document.getElementById('table-body');

    tbody.addEventListener('click', (e) => {
        if(e.target.closest('.form-check-input')){
            const userID = e.target.closest('tr').dataset.id;
            const newPermission = e.target.closest('.form-check-input').checked;

            userService.update(userID, {permission: newPermission}).then(() => {
                userService.getAll().then(data => render(data));
            })
        }
    })
}