import {render} from "./render";

export const deleteUser = () => {
    const tbody = document.getElementById('table-body');

    tbody.addEventListener('click', (e) => {
        if(e.target.closest('.btn-delete')){
            const userID = e.target.closest('tr').dataset.id;
            userService.delete(userID).then((resp) => {
                const users = userService.getAll().then(data => render(data));
            })
        }
    })
}