# REST API

REST => REpresentational State Transfer

> sebuah konsep architectural yang menyediakan standar komunikasi antar sistem

> konsepnya stateless atau tidak menyimpan data

API => Application Programming Interface

> sebuah cara 2 / lebih komputer berkomunikasi satu sama lain (contoh: client dan server)

REST API => API yang dibuat berdasarkan standar REST yang dapat diakses dari HTTP/HTTPS

## RESTful API

Karena rest api bersifat `merepresentasikan`, maka API atau endpoint yang nanti disediakan oleh server tidak ditambahkan lagi kata kerja seperti `delete` atau `update`, tapi direpresentasikan oleh HTTP Methodnya

contoh standar REST API

- `GET` `/movies`
- `POST` `/actors`
- `DELETE` `/movies/:id`

### HTTP Methods

- `GET` => read spesific resource or collection of resources
- `POST` => create new resource
- `DELETE` => delete resource
- `PUT` => update/replace resource in collections
- `PATCH` => update/modify spesific field in spesific resource

### Resources Naming

Secara umum, standar untuk penamaan resource adalah sebagai berikut

1. resource merepresentasikan collections dalam entity, misalnya `movies` entity atau `courses` entity dalam `plural`

   `GET` `/movies` ✅

   `POST` `/courses` ✅

   `POST` `/cars/add` ❌

   `GET` `/housesInJakarta` ❌

2. apabila mencari (atau mengubah) resources yang spesific di dalam satu collections entity, maka bisa ditambahkan ID

   `GET` `/movies/3`

   `PUT` `/courses/4321`

3. apabila ada resources lain yang mempunyai relationship, misalnya mengambil kumpulan `actors` **dalam** 1 `movies`, maka bisa ditulis seperti ini

   `GET` `/movies/4/actors`

   `GET` `/courses/4321/instructors`

### HTTP Status Code

`2xx` => success

`3xx` => redirection

`4xx` => client error (kesalahan pada request)

`5xx` => server error

## DEMO

- test get postman

- get 1 resources

  - kirim response 200
  - kirim json
  - contoh yang salah (findAll ke film instead of movie)

- get resources by id

- post resources

  - check dulu req.body nya
  - url encoded
  - body json
  - handle error 400, tapi sent headers lagi 500
  - handle errornya satu satu dulu

- async await

- [buat documentation](https://github.com/ziterz/documentation-example/blob/master/README.md)
