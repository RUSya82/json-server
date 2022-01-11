import {render} from "./render";

export const filterUsers = () => {
    const btnGroup = document.querySelector('.btn-filter');

    btnGroup.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.closest('#btn-isChildren')){
            userService.filter('hasChildren').then(data => {
                render(data);
            })
        } else if (e.target.closest('#btn-isPermissions')) {
            userService.filter('permission').then(data => {
                render(data);
            })
        } else if (e.target.closest('#btn-isAll')){
            userService.getAll().then(data => {
                render(data);
            })
        }
    });
    
}