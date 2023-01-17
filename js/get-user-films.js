const menuContainer = document.getElementById('menu-items');
const url = 'https://localhost:7211/api/UserFilm/Get/'+ localStorage.getItem("userId");

const optionsGet = {

    method: "get",

    headers: {

      Accept: "application/json",

      "Content-Type": "application/json",

      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
    },
  };

const response = {};

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