const url = 'https://api.football-data.org/v4/persons/{id}';
const API_KEY = "1bee90283fa04fc6ba8ea573aa216e54";




function getRandomId() {
    return Math.floor(Math.random() * 1000); // Genera un ID aleatorio entre 0 y 999
}

id = getRandomId();

function fetchData(id) {
    const requestUrl = url.replace('{id}', id);
    return fetch(requestUrl, {
        method: 'GET',
        headers: {
            'X-Auth-Token': API_KEY,
            'Accept-Encoding': ''
        }
    })
    .then(response => response.json())
        .then(persons => {
            const root = document.querySelector('#root');
            const players = persons.map(person => {
                return `<div class="col card text-bg-dark">
                            <img src="${person.currentTeam.crest}" class="card-img-top" alt="..." >
                            <div class="card-body">
                                <h5 class="card-title">${person.name}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${person.nationality}</h6>
                                <p class="card-text">${person.section}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>`
                    })
            console.log(players)
            root.innerHTML = players;


                }
            )
    .catch(error => {
        console.error('Error:', error);
        return null;
    });
}

fetchData(id);