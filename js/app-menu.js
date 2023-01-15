const url = 'https://localhost:7211/api/Film/GetAll';
const options = {
    method: 'get'
}

const response = {};

function loadData() {
    fetch(url, options)
    .then((response) => response.json())
    .then((a) => {
        console.log(a);
        const menuContainer = document.getElementById('menu-items');
        let htmlMenuItem = '';

        a.forEach(element => {
            console.log(element);
            let htmlElement = 
            `<article class="menu-item">
                <section class="menu-item-picture">
                    <img src="film-596519_640.jpg" alt="placeholder image">
                </section>
                <section class="menu-item-info">
                    <section class="menu-item-name">
                    
                        <h3>${element.isbn}</h3>
                    </section>
                    <section class="menu-item-desc">
                        <h4>${element.titleAndDirector} - ${element.publishYear}</h4>
                    </section>
                   
                </section>
            </article>`;
            htmlMenuItem += htmlElement;
        });

        menuContainer.innerHTML = htmlMenuItem;
    })
}

loadData();