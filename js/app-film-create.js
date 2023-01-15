const filmCreateForm = document.querySelector('#film-create-form');
const filmCreateFormSbmBtn = document.querySelector('#film-create-form-submit');
const errorEle = document.querySelector(".error-message");

function sendData() {
    let data = new FormData(filmCreateForm);
    let obj = {};

    console.log(data);

    data.forEach((value, key) => {
        obj[key] = value
    });

    fetch('https://localhost:7211/api/Film/Create', {
        method: 'post',
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

filmCreateFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    sendData();
})

const logout = () => {
    localStorage.clear();
    window.location.href = "login.html";
}
logout_label.addEventListener('click', logout);