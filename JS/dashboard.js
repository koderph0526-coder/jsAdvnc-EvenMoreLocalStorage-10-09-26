let userData = JSON.parse(sessionStorage.getItem("loggedInUser")); //gets info back into object, save variable

const welcomeHeading = document.querySelector("#welcomeMessage");

welcomeHeading.innerText = `Welcome${userData.username}`;

// const gameCont = document.querySelector("#gameContainer");
const gameForm = document.querySelector("#gameForm");

//  NS: From this point on the material is higly needed to understand to complete this weeks assignment and it can be reused again and again!
gameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(gameForm);
  const data = Object.fromEntries(formData.entries());

  let gameArray = [];

  if (localStorage.getItem("gameInfo")) {
    const allGames = JSON.parse(localStorage.getItem("gameInfo"));
    allGames.forEach((game) => {
      gameArray.push(game);
      gameArray.push(data);
    });
  } else {
    gameArray.push(data);
    localStorage.setItem("gameInfo", gameArray);
  }

  console.log(data);
});

const gameCont = document.querySelector("#gameContainer");

function createGameCards(searchedGames) {
  let getGames = JSON.parse(localStorage.getItem("gameInfo")); // Henter data

  //NOTE: innnerHTml can be used here because it's a localStorage not API, and also it's just different games, not personla info. + it i stored within a function as an empty'er
  gameCont.innerHTML = "";

  //   Using this instead of the If statement within forEach:
  if (searchedGames != "NA") {
    getGames = getGames.filter((game) => games.gameName.icludes(searchedGames));
  }

  getGames.forEach((GameI) => {
    // if (GameI.gameName == searchedGames || searchedGames == "NA") {
    const containDiv = document.createElement("div");

    const gameNameP = document.createElement("p");
    const gameTxt = document.createTextNode(GameI);
    gameNameP.append(gameTxt);

    const ratingP = document.createElement("p");
    const ratingTxt = document.createTextNode(GameI.rating);
    ratingP.append(ratingTxt);

    const platformP = document.createElement("p");
    // GameI.platform is fetching info from the browsers local storage!!
    const platformTxt = document.createTextNode(GameI.platform);
    platformP.append(platformTxt);

    const gameImg = document.createElement("img");
    img.src = GameI.picture;
    // img url to test when I get this all to work:  https://howlongtobeat.com/games/139630_Spirit_of_the_North_2.jpg?width=250

    // Appending the created elements and their stored values!
    containDiv.appendChild(gameNameP);
    containDiv.appendChild(platformP);
    containDiv.appendChild(ratingP);
    containDiv.appendChild(gameImg);

    gameCont.appendChild(containDiv);
    // } else {
    // }
  });
}
createGameCards("NA");

const searchBar = document.querySelector("#search");

searchBar.addEventListener("change", (e) => {
  let searchValue = searchBar.value;
  //createGameCards i bunnen her!
  createGameCards(searchValue);
});
