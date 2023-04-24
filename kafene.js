

// let button=document.getElementById("button")

// /* button.addEventListener("click", () => {
//     let signInMainBox = document.getElementById("signinmainbox");
//     signInMainBox.style.display = "none";
//     mainPage.append(createPage);
//     createPage.setAttribute("class", "createpage");
//   }); */
//   const usernameField = document.getElementById("username");
//   const passwordField = document.getElementById("password");
  
//   button.addEventListener("click", () => {
//     const username = usernameField.value;
//     const password = passwordField.value;




$(document).ready(()=>{

    console.log(localStorage.getItem("LoggedIn")=="true")
    const loginform=document.getElementById("Loginform")
    localStorage.getItem("LoggedIn")=="true"? window.location.assign("./order.html") :loginform.style.display="block";
    loginform.addEventListener("submit",(e)=>{
        e.preventDefault();
        if(e.target.Username.value==e.target.Password.value){
            window.alert("Login Successful")
            localStorage.setItem("LoggedIn",true)
            window.location.assign("./order.html")
        }
        else{
            window.alert("Please enter valid credentials")
        }
    })
    })