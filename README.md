# Equipo_Crud_Cac
Trabajo práctico en equipo - Proyecto Full Stack
Backend -> Express
Frontend -> React

## Integrantes Grupo 7
- Marianela Gaia
- Rosana López
- Julieta Piclu
- Marianela Rodríguez
- Eugenio Vázquez

# Backend

# Librería API
Librería API para la gestión de una Libreria. API para manejar el préstamo y devolución de libros de una biblioteca.

# Endpoints

El principal endpoint es:
<server>/api/v1/

## Géneros
- Lista todos los géneros
    - GET /genre/
- Crear un nuevo género
    - POST /genre/
    ```
    {
    "name": "nombre del género",
    "description": "descripcion del género"
    }
    ```
- Obtener un género
    - GET /genre/< id >/
- Actualizar un género
    - PATCH /genre/< id >/
- Eliminar un género
    - DELETE /genre/< id >/

## Autores
- Listar todos los autores
    - GET /author/
- Crear un nuevo autor
    - POST /author/
    ```
    {
       "name": "nombre del autor"
    }
    ```
- Obtener un autor
    - GET /author/< id >/
- Actualizar un autor
    - PATCH /author/< id >/
- Eliminar un autor
    - DELETE /author/< id >/

## Libros
- Listar todos los libros
    - GET /book/
    El endpoint devuelve el total de libros pero no más de 1000 libros por página.

- Listar libros paginados
    - GET /book/?page=< page >&limit=< limit
    - page: número de página
    - limit: número de libros por página

- Crear un nuevo libro
    - POST /book/
    ```
    {
        "title": "titulo del libro",
        "description": "descripcion del libro",
        "author": "id del autor",
        "genre": "id del genero",
        "image": "url de la imagen"
    }
    ```
- Obtener un libro
    - GET /book/< id >/
- Actualizar un libro
    - PATCH /book/< id >/
- Eliminar un libro
    - DELETE /book/< id >/

## Endpoints especificos

- Listar libros por género
    - GET /book/genre/< id >/

- Listar libros por autor
    - GET /book/author/< id >/

- Listar libros por autor y género
    - GET /book/author/< id >/genre/< id >/

## Usuarios
- Registro
    - POST /users/signup/
    ```
    {
        "username": "nombre de usuario",
        "password": "contraseña"
    }
    ```
- Login
    - POST /users/login/
    ```
    {
        "username": "nombre de usuario",
        "password": "contraseña"
    }
    ```

## Préstamos y devoluciones
- Préstamo
    - GET /borrow/< bookId >/

- Devolución
    - GET /return/< bookId >/


- Listar todos los préstamos
    - GET /order/

- Obtener un préstamo
    - GET /order/< id >/


## Dataset

Se inicia con un data set de más de 200k libros, 100k autores y 32 géneros. El conjunto de datos está disponible en la carpeta dataset. Para cargar el conjunto de datos en la base de datos, ejecute la siguiente función:

```
fullDB();
```

# Frontend