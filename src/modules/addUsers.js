import {render} from "./render";

export const addUsers = () => {
    const form = document.querySelector('#add-user');


    form.addEventListener('submit', (e) => {
        if(!form.dataset.edit){
            const userName = form.querySelector('#form-name');
            const userEmail = form.querySelector('#form-email');
            const userChildren = form.querySelector('#form-children');
            e.preventDefault();
            const body = {
                name: userName.value,
                email: userEmail.value,
                hasChildren: userChildren.checked,
                permission: false
            }
            userService.insert(body).then(data => {
                form.reset();
                userService.getAll().then(data => {
                    render(data)
                })
            });
        }

    })
}