import {render} from "./render";

export const sortUser = () => {
    const sortChildrenBtn = document.querySelector('#sort-is-children');
    sortChildrenBtn.style.cursor = 'pointer';
    let order = true;

    sortChildrenBtn.addEventListener('click', (e) => {
        userService.sort({sortObject: 'hasChildren', sortOrder: order ? 'asc' : 'desc'}).then(data => {
            render(data);
            order = !order;
        })
    });


}