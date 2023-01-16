const filmDeleteForm = document.querySelector('#film-delete-form');
const filmDeleteFormSbmBtn = document.querySelector('#film-delete-form-submit');
const errorEle = document.querySelector(".error-message");

function deleteData() {
    let data = new FormData(filmDeleteForm);
    let obj = {};

    console.log(data);

    data.forEach((value, key) => {
        obj[key] = value
    });

    fetch('https://localhost:7211/api/Film/Delete/'+ obj.isbn, {
        method: 'delete',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        },
        // Naudojame JSON.stringify, nes objekte neturim .json() metodo
        body: JSON.stringify(obj) 
    })
    .then(async res => {
        console.log(res.status);
        console.log(window.localStorage.getItem('token'));

        if(res.ok)
        {
            // If success
            //window.location.href = "./index.html";
        }
    })
    .catch((err) => console.log(err));
}

filmDeleteFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    deleteData();
})

const logout = () => {
    localStorage.clear();
    window.location.href = "login.html";
}
logout_label.addEventListener('click', logout);