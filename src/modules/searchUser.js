import {render} from "./render";
import {debounce} from "./helpers";

export const searchUser = () => {
    const searchInput = document.getElementById('search-input');

    const  searchDB = debounce((e) => {
        userService.search(e.target.value).then(data => {
            render(data)
        })
    }, 500)

    searchInput.addEventListener('input', searchDB);
}