# Buscador de películas

Aplicación creada en React con el fin de crear una aplicación para buscar películas y valorarlas.

## Scripts disponibles en la aplicación

### `npm start`

Nos permitirá lanzar la aplicación en el modo desarrollo\
Desde [http://localhost:3000](http://localhost:3000) se podrá ver el resultado en el navegador.

### `npm run build`

Script encargado de la compilación del proyecto para producción

### `npm test`

Lanzará los test definidos en la aplicación

## Objetivos

El objetivo será crear una aplicación para buscar películas y valorarlas.

Contaremos con dos vistas, una principal, donde tendremos un buscador de películas que podremos votar y otra con el listado de las que valoramos así como lo que hemos votado.

## Integración API

Los datos de la API se obtendrán de los distintos Endpoints definidos en este dominio:

```
https://api.themoviedb.org/3/
```

### Endpoint para obtener todos los productos

#### Path
```
GET /search/movie?api_key={api_key}&query={query}&language=es
```

#### Response

```
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "",
      "genre_ids": [],
      "id": 0000,
      "original_language": "en",
      "original_title": "Title",
      "overview": "overview",
      "popularity": 3502.855,
      "poster_path": "",
      "release_date": "yyyy-mm-dd",
      "title": "Title",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 1270
    },
    ...
  ]
  "total_pages": 7,
  "total_results": 135
}

```