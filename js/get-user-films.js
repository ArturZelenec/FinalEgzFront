const menuContainer = document.getElementById('menu-items');
const url = 'https://localhost:7211/api/UserFilm/Get/1';
// const options = {
//     method: 'get'
//}
const optionsGet = {

    method: "get",

    headers: {

      Accept: "application/json",

      "Content-Type": "application/json",

      'Authorization': 'Bearer ' + window.localStorage.getItem('token')

    },

  };

const response = {};


//view all for one user

// function viewData() {

//     fetch(url, optionsGet)

//       .then((response) => response.json())

//       .then( async a => {

//          console.log(a);

//          let visiDuomenys = "";

 

//       a.films.forEach((element) => {

//         console.log(element);

//         let filtruojamiDuomuo = `<tr style = "display: flex">
//         <img src="film-596519_640.jpg" alt="placeholder image" style = " max-width: 200px;
//         height: 90px;">
//         <p style = "margin: 0px">Filmo kodas</p>
//         <td> ${element.filmISBN}</td>
//         <p style = "margin: 0px">Pavadinimas</p>
//         <td> ${element.filmTitle}</td>
//         <p style = "margin: 0px">Režisierius</p>
//         <td> ${element.filmDirector}</td>
//         </tr>`;

//         tarpas = `<hr>`;
//         visiDuomenys += tarpas;
//         visiDuomenys += filtruojamiDuomuo;
//       });
//       menuContainer.innerHTML = visiDuomenys;
//     })}

// // view Button funtion

// //   userViewFormSbmBtn.addEventListener("click", (e) => {

// //     e.preventDefault();

//     viewData();

  




    

function loadData() {
    fetch(url, optionsGet)
    .then((response) => response.json())
    .then(async a => {
        console.log(a);
        
        let htmlMenuItem = '';
        
        a.films.forEach((element) => {
            console.log(element);
            let htmlElement = 
            `<article class="menu-item">
                <section class="menu-item-picture">
                    <img src="film-596519_640.jpg" alt="placeholder image">
                </section>
                <section class="menu-item-info">
                    <section class="menu-item-name">
                        <h3> Filmo kodas: ${element.filmISBN}</h3>
                    </section>
                    <section class="menu-item-desc">
                       Pavadinimas: ${element.filmTitle} <br/> Režisierius: ${element.filmDirector}
                    </section>
                   
                </section>
            </article>`;
            htmlMenuItem += htmlElement;
        });

        menuContainer.innerHTML = htmlMenuItem;
    })
}

loadData();

const logout = () => {
    localStorage.clear();
    window.location.href = "login.html";
}
logout_label.addEventListener('click', logout);