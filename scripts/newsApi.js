function mostrarNoticias() {
    // solicitud a la API NewsAPI
    fetch('https://newsapi.org/v2/everything?q=clima OR meteorología &language=es&apiKey=de759f4359874ee7a6b37df7f000dd0e')
        .then(response => response.json())
        .then(data => {
            console.log('Datos:', data);

            // devuelve cuatro noticias
            const noticias = data.articles.slice(0, 4);

            // contenedor de las noticias
            const noticiasContainer = document.getElementById('noticias');
            console.log('Contenedor de noticias:', noticiasContainer);

            // card para cada noticia
            noticias.forEach(noticia => {
                const card = `
                    <div class="col-md-3">
                        <div class="card">
                            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${noticia.title}</h5>
                                <p class="card-text">${noticia.description}</p>
                                <a href="${noticia.url}" class="btn btn-primary">Leer más</a>
                            </div>
                        </div>
                    </div>
                `;
                noticiasContainer.innerHTML += card;
            });
        })
        .catch(error => console.error('Error al obtener las noticias:', error));
}


export { mostrarNoticias };
