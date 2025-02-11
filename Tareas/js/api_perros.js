const API_URL = "https://dog.ceo/api/breeds/image/random"


Promise.all([
    fetch(API_URL).then(response => response.json()),
    fetch(API_URL).then(response => response.json()),
    fetch(API_URL).then(response => response.json())
])
.then(results => {
    const main = document.querySelector('#root');
    const dogs = results.map(data => {
        return `<div class="col card text-bg-dark">
            <img src="${data.message}" class="card-img-top" alt="..." >
            <div class="card-body">
                <h5 class="card-title">Perro</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">No se que raza es</h6>
                <p class="card-text">Pero esta lindo</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
    }).join('');

    main.innerHTML = dogs;
})