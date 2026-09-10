const formOne = document.querySelector("#formLogin");

let userArray = [];
// let userArray; // If we only declare it but don't store anythign in it

if (localStorage.getItem("user")) {
  console.log(true);

  let preUsers = JSON.parse(localStorage.getItem("user"));
  preUsers.forEach((e) => {
    userArray.push(e);
  });
  // window.location.href = "/pages/dashboard.html"; //Auto login
} else {
  console.log(false);
}
// Removing/deleting all local storage
// localStorage.clear()
//Remover specific data from the local storage
// localStorage.removeItem("user")
const userField = document.querySelector("#userField");
const passWfield = document.querySelector("#passWfield");

function checkLogin(username1, password1) {
  let allUser = JSON.parse(localStorage.getItem("user"));
  console.log(username1, password1);

  allUser.forEach((e) => {
    if (e.username === username1 && e.password === password1) {
      const loggedUser = {
        username: e.username,
        password: e.password,
      };
      sessionStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
      console.log("Matched");
      window.location.href = "./pages/dashboard.html";
    } else {
      console.log("No match found");
    }
  });
}

formOne.addEventListener("submit", (e) => {
  e.preventDefault(); // removes default functions/actions

  const formData = new FormData(formOne); // Saved data from form to js, this stores all the data!

  const data = Object.fromEntries(formData.entries()); //Makes each input into an object, which is readable for JS

  //data
  //username: "input value"
  //passord: "input value"

  //JSON: javascript object notation
  //JSOn is always either an array or an object

  // userArray.push(data);
  // console.log(userArray, 3);
  // localStorage.setItem("user", JSON.stringify(data)); //Saves object to localStorage
  let userData = JSON.parse(localStorage.getItem("user")); //gets info back into object, save variable

  checkLogin(data.username, data.password); //Sends info into form
  // console.log(userData);
  // console.log(data.username);

  // window.location.href = "/pages/dashboard.html";
});

const signUp = document.querySelector("#signUp");

signUp.addEventListener("click", (e) => {
  let userNameValue = userField.value;
  let userPassValue = passWfield.value;
  let fullUser = {
    username: userNameValue,
    password: userPassValue,
  };

  userArray.push(fullUser);
  localStorage.setItem("user", JSON.stringify(userArray));
});
