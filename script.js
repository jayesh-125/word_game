const signinhide = function () {
    document.querySelector("#suhide").removeAttribute('class', "SUhidden");
    document.querySelector("#sihide").setAttribute('class', "SUhidden");
}
const signuphide = function () {
    document.querySelector("#sihide").removeAttribute('class', "SUhidden");
    document.querySelector("#suhide").setAttribute('class', "SUhidden");
}
// validate form...........
// validaton of registration.............
const reg_validate = function () {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("reg_email").value;
    let pass = document.getElementById("pass").value;
    let re_pass = document.getElementById("re_pass").value;
    console.log(pass);
    let submit = true;
    // first name and last name check 
    if (fname == "" && lname == "") {
        alert("please enter the first name and last name");
        submit = false;
        return submit;
    }
    // email check
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!regex.test(email)) {
        alert("Email is not valid");
        submit = false;
        return submit;
    }
    var regexpass = /^(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{8,16}$/;
    if (pass == "" || pass !== re_pass) {
        alert("password is not valid or password is not match with retype password")
        submit = false;
        return submit;
    }
    // if (!regexpass.test(pass)) {
    //     alert("password set strong use capital letter @$#!_ etc sign and number..")
    //     submit = false;
    //     return submit;
    // }

    debugger
    // stroing data in local storage
    //23-2-2023 7:40 adding new variables in local storage for highscore maintaining 
    let data = {
        firstname: fname,
        lastname: lname,
        email: email,
        password: pass,
        highScore: 0,
      
    }
    let userData = JSON.parse(localStorage.getItem("playerData"));
    if (userData) {
        userData.push(data);
        localStorage.setItem('playerData', JSON.stringify(userData))
    } else {
        localStorage.setItem('playerData', JSON.stringify([data]));
    }
    console.log(submit);
    return submit;

}

// login form script

// const login_validate = function () {

//     let email = document.getElementById("lg_email").value;
//     let pass = document.getElementById("lg_pass").value;
//     let submit = false;

//    let data = JSON.parse(localStorage.getItem('playerData'));
//    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//     // email check   with    regex and local store database 
//     debugger
//     if (regex.test(email) && pass!=='') {
//         for (let player = 0; player < data.length; player++) {
//             console.log()
//             if (data[player].email==email && data[player].password==pass) {
//                 console.log(data[player].firstname)
//                 playerSessionData = {
//                     name: data[player].firstname,
//                     score: 0,
//                     totalScore:0
//                 }
//                 sessionStorage.setItem('currentPlayerData',JSON.stringify([playerSessionData]));
//                 submit = true;
//                 return submit;
//             }
//         }

// }else {
//         alert(" Entered Email or Password is wrong please try again or register your self ");       
// }


// }
const login_validate = function () {

    let email = document.getElementById("lg_email").value;
    let pass = document.getElementById("lg_pass").value;
    let submit = false;

    let data = JSON.parse(localStorage.getItem('playerData'));
    const regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    // email check   with    regex and local store database 
    debugger
    if (regex.test(email) && pass !== ''&& data) {
        for (let player = 0; player < data.length; player++) {
            console.log()
            if (data[player].email == email && data[player].password == pass) {
                console.log(data[player].firstname)
                playerSessionData = {
                    name: data[player].firstname,
                    email: data[player].email, // adding email parameter in session storage for idde
                    
                }
                sessionStorage.setItem('currentPlayerData', JSON.stringify([playerSessionData]));
                submit = true;
                return submit;          
            } window.location.href("wordgame.html");
        }

    } else {
        alert(" Entered Email or Password is wrong please try again or register your self ");
        return false;
    }


}

















// login form validatoion

