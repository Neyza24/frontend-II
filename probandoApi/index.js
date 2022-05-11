const url = "https://ctd-todo-api.herokuapp.com/v1/users"

const data = {
  firstName: "Prueb",
  lastName: "apellido",
  email: "mil@mail.com",
  password: 1222
}

//payload
const options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json",
  }
}

fetch(url, options )
  .then((response) => response.json())
  .then((json) => {
      // Aqui obtenemos la respuesta de la API.
      console.log("Usuario:", json);
    })



//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbEBtYWlsLmNvbSIsImlkIjoyMzQxLCJpYXQiOjE2NDk0MzcxMTN9.9z746_gsxqe3s_i70saSwQTkBvkQBhNqJods74GwdsE"


/*
 */












