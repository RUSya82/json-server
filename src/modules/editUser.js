import {render} from "./render";

export const editUser = () => {
    const tbody = document.getElementById('table-body');
    const form = document.querySelector('#add-user');
    const userName = form.querySelector('#form-name');
    const userEmail = form.querySelector('#form-email');
    const userChildren = form.querySelector('#form-children');

    tbody.addEventListener('click', (e) => {
        if(e.target.closest('.btn-edit')){
            const userID = e.target.closest('tr').dataset.id;
            userService.getOne(userID).then(data => {
                userName.value = data.name;
                userEmail.value = data.email;
                userChildren.checked = data.hasChildren;
                form.dataset.edit = userID;
                form.dataset.permission = data.permission;
            })
        }
    })
    form.addEventListener('submit', (e) => {
        if(form.dataset.edit){
            e.preventDefault();
            const id = form.dataset.edit;
            const body = {
                name: userName.value,
                email: userEmail.value,
                hasChildren: userChildren.checked,
                permission: form.dataset.permission
            };
            userService.edit(id, body).then(() => {
                userService.getAll().then(data => {
                    render(data);
                    form.removeAttribute('data-edit');
                    form.reset();
                });
            })
        }
    })
}