const container = document.querySelector(".row") // Seleziona il contenitore delle carte

const library = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => {
      if (res.ok) {
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
    .then((data) => {
      console.log(data)

      data.forEach((element) => {
        const card = document.createElement("div")

        card.innerHTML = `
          <div class="card" style="height: 100%; margin-bottom: 2em; height: 40em;">
          <div class="card-body">
          <img src="${element.img}" class="card-img-top" alt="image" style="height: 25em"/>
          <h5 class="card-title" style="height: 5em; margin: 1em 0 1em 0">${element.title}</h5>
          <p class="card-text">Price: $ ${element.price}</p>
          <div class="d-flex justify-content-around">
          <button id="hideButton" type="button" class="btn btn-outline-danger p-fixed">Scarta</button>
          <button id="buyButton" type="button" class="btn btn-outline-success">
          Compra ora
          </button>
          </div>
          </div>
          </div> 
        `
        container.appendChild(card)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

library()
