const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTRiYzBjODhjZTE0ODM0OGZiNzg5NDE4YzE0NjQxNSIsInN1YiI6IjYzZjdkODI0MWYzMzE5MDA4YzUwMzIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i-XO3XOt7viJUdZ9ukFHGxZifEYGe2O0Vy2gt5jeccQ",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}