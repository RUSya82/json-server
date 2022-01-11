export const render = (users) => {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    if(users && users.length > 0 ){
        users.forEach((user, index) => {
            tbody.insertAdjacentHTML('beforeend', `
                            <tr data-id="${user.id}">
                                <th scope="row">${index + 1}</th>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.hasChildren ? "Есть" : "Нет"}</td>
                                <td>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" 
                                        ${user.permission && 'checked'} id="form-children">
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-warning btn-edit">
                                            <i class="bi-pencil-square"></i>
                                        </button>
                                        <button type="button" class="btn btn-danger btn-delete">
                                            <i class="bi-person-x"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
       `)
        })
    } else {
        tbody.insertAdjacentHTML('beforeend', `<p> Нет данных</p>`)
    }

}