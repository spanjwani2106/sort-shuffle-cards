let shuffleSortCards = (() => {
  const cardsArray = [
    { value: 1, class: "color-palette1" },
    { value: 2, class: "color-palette2" },
    { value: 3, class: "color-palette3" },
    { value: 4, class: "color-palette2" },
    { value: 5, class: "color-palette3" },
    { value: 6, class: "color-palette4" },
    { value: 7, class: "color-palette4" },
    { value: 8, class: "color-palette1" },
    { value: 9, class: "color-palette3" },
  ];
  const shuffleCards = () => {
    let currentIndex = cardsArray.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [cardsArray[currentIndex], cardsArray[randomIndex]] = [
        cardsArray[randomIndex],
        cardsArray[currentIndex],
      ];
    }
    renderCards(cardsArray);
  };
  const sortCards = () => {
    cardsArray.sort((x, y) => x.value - y.value);
    renderCards(cardsArray);
  };
  const renderCards = (cardsArray) => {
    document.getElementById("shuffle").innerHTML = "";
    cardsArray.forEach((element) => {
      let card = document.createElement("div");
      card.className = "item " + element.class;
      card.innerHTML = element.value;
      document.getElementById("shuffle").appendChild(card);
    });
  };
  return {
    shuffleCards,
    sortCards,
  };
})();

window.onload = () => {
  shuffleSortCards.sortCards();
};
