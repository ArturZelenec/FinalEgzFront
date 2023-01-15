const registrationForm = document.querySelector('#registration-form');
const registrationFormSbmBtn = document.querySelector('#registration-form-submit');
const errorEle = document.querySelector(".error-message");

function sendData() {
    let data = new FormData(registrationForm);
    let obj = {};

    console.log(data);

    data.forEach((value, key) => {
        obj[key] = value
    });
    console.log(obj);

    fetch('https://localhost:7211/api/User/Registration', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        // Naudojame JSON.stringify, nes objekte neturim .json() metodo
        body: JSON.stringify(obj) 
    })
    .then(async res => {
        console.log(res.status);

        if(res.ok)
        {
            // If success
            window.location.href = "./index.html";
        }
        
        console.log(res);
        var resBody = await res.json();
        errorEle.textContent = resBody.message;
    })
    .catch((err) => console.log(err));
}

registrationFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    sendData();
})