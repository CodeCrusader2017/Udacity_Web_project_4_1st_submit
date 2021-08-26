var namestore = [];

//Web Source tutorial for checking, setting and getting cookies - code below based on: //https://www.w3schools.com/js/js_cookies.asp
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      if (namestore.includes(user)) {
         console.log("This user has visited before: " + user);
      }
      else {
         alert("Welcome " + user);
         console.log("New user: " + user);
      }
      namestore.push(user);
      return user;
    } else {
       user = prompt("To proceed please enter your first name (stored as a cookie):","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
         return user;
       }
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  let names = [
      "Picard",
      "Janeway",
      "Kirk",
      "Archer",
      "Georgiou",
      "Paul"
  ]

  if(names.includes(inputText)) {
      console.log("Log: One of our Captains has returned to this website!");
      return inputText;
  }
}

export { checkForName }
export { checkCookie } 
export { getCookie } 
export { setCookie }
