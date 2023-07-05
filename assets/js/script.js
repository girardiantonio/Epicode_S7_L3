const cards = document.getElementsByClassName("card")
const hiddenCards = document.getElementById("hideButton")
const buyCards = document.getElementById("buyButton")

const remove = function () {
  hiddenCards.addEventListener("click", function () {
    cards.style.display = "none"
  })
}

remove()