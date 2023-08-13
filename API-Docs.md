# Movie App API Docs

## List available endpoint

- GET /movies
- GET /movies/:id
- POST /movies
- DELETE /movies/:id

### GET /movies

This endpoint is for get all movies

Response 200 - OK

- Response Body

```js
{
  message: "Success get",
  data: [
    {
      {
            "id": 1,
            "title": "The Social Network",
            "releaseYear": 2010,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
            "genreId": 1,
            "createdAt": "2023-08-07T04:29:35.429Z",
            "updatedAt": "2023-08-07T04:29:35.429Z"
        },
        ...
    }
  ]
}
```

### GET /movies/:id

This endpoint is for get one single movie

- Request params

```js
  {
    id: <Integer>
  }
```

Response 200 - OK

- Response Body

```js
{
    "id": 3,
    "title": "The Avengers",
    "releaseYear": 2012,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    "genreId": 2,
    "createdAt": "2023-08-07T03:36:48.124Z",
    "updatedAt": "2023-08-07T03:36:48.124Z"
}
```

### POST /movies

This endpoint is for adding one movie

- Request Body

```js
{
  "title" : <String>,
  "releaseYear": <Integer>,
  "imageUrl": <String>,
  "genreId": <Integer>
}
```

Response 201 - OK

- Response Body

```js
{
    "message": "Movies with id <Integer> has been created"
}
```

### DELETE /movies/:id

- Request Params

```js
{
  id: <Integer>
}
```

Response 200 - OK

- Response Body

```js
{
    "message": "Movie with id <Integer> deleted successfully"
}
```

Response 404 - Not Found

- Response Body

```js
{
    "message": "Movie with id <Integer> not found"
}
```

### Global Error

Response 500 - Internal Server Error

```js
{
    "message": "Internal Server Error"
}
```
