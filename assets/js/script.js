const Data = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => {
      if (res.ok) {
        //prelevo i dati dalla pagina
        return res.json()
      } else {
        if (res.status === 404) {
          throw new Error("Not found")
        } else if (res.status === 500) {
          throw new Error("Internal Server Error")
        } else {
          throw new Error("Errore nella chiamata API")
        }
      }
    })

    .catch((err) => {
      console.log(err)
    })
}
