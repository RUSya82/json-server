export class UserService{
    constructor({ url }) {
        this.url = url;
    }
    getAll(){
        return fetch(this.url).then(response => response.json());
    }
    getOne(id){
        return fetch(`${this.url}/${id}`).then(response => response.json());
    }
    insert(data){
        return fetch(`${this.url}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());
    }
    delete(id){
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        }).then(response => response.json());
    }
    update(id, data){
        return fetch(`${this.url}/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        }).then(response => response.json());
    }
    edit(id, data){
        return fetch(`${this.url}/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(response => response.json());
    }
    filter(filterOption){
        // posts?title_like=server
        return fetch(`${this.url}?${filterOption}=true`).then(response => response.json());
    }
    sort(sortData){
        return fetch(`${this.url}?_sort=${sortData.sortObject}&_order=${sortData.sortOrder}`).then(response => response.json());
    }
    search(searchStr){
        return fetch(`${this.url}?name_like=${searchStr}`).then(response => response.json());
    }
}