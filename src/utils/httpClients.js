const API = "https://api.themoviedb.org/3";
const {REACT_APP_URL} = process.env
export function get(path){
  // console.log("estamos aqui", process.env.REACT_APP_URL)
    return fetch(API + path, {
      headers: {
        Authorization: REACT_APP_URL,
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}