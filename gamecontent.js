let rendomaccess = ["abandon", "abandoned", "ability", "able", "about", "above,", "abroad", "absence", "absent", "absolute",
    "absolutely", "absorb", "abuse", "academic", "accent", "accept", "acceptable", "access", "accident", "accidental", "accompany", "according to", "account", "accurate"
    , "accuse", "achieve", "achievement", "acid", "acknowledge", "acquire"
]

var rendomarr = [];
// set timer
var interval = setInterval(function () {
    var RA1 = Math.floor(Math.random() * rendomaccess.length);
    var ranac = rendomaccess[RA1];
    rendomarr.push(ranac);
    document.getElementById('words').innerHTML = ranac;
}, 1000);
setTimeout(function () {
    clearInterval(interval)
}, 5000);
// clear time
// redirect to each
setInterval(function () {
    $(".overflow").hide();
    setTimeout(function () {
        $("#main-contain").fadeIn('normal');
    });
}, 5500)



// user can not access game without login
// const wordgame_onload = function () {
//     var data = JSON.parse(sessionStorage.getItem("currentPlayerData"));
//     if (!data) {
//         window.location.replace("index.html");
//     }
// }
// score count 

const word_check = function () {
    debugger


    var arr = [];
    arr[0] = document.getElementById("word1").value;
    arr[1] = document.getElementById("word2").value;
    arr[2] = document.getElementById("word3").value;
    arr[3] = document.getElementById("word4").value;
    arr[4] = document.getElementById("word5").value;
    var counter = 0;
    var newScore = 0;

    let currentPlayer = JSON.stringify(localStorage.getItem('currentActivePlayer'));
    if (currentPlayer[0].round > 0) {
        for (let el = 0; el < arr.length; el++){
            if (arr[el] === rendomarr[el]) {
                counter++
                newScore = counter + currentPlayer[0].totalScore;
            }
        }
        currentPlayer[0].totalScore = newScore;
        localStorage.setItem('currentActivePlayer',JSON.stringify(currentPlayer));
        document.getElementById("ts").currentPlayer[0].totalScore;
        
    } else {
        for (let el = 0; el < arr.length; el++) {
                        if (arr[el] === rendomarr[el]) {
                            counter++;
                        }
                    }
                    let data = JSON.parse(localStorage.getItem("currentActivePlayer"))
                    if (data) {
                        data[0].totalScore = counter;
                        localStorage.setItem('currentActivePlayer', JSON.stringify(data));
                    }
                   document.getElementById("score").innerHTML = counter;
                   document.getElementById("ts").textContent = data[0].totalScore;
        
    }
//     let data = JSON.parse(sessionStorage.getItem("currentPlayerData"))
//    if (data[0].round > 0) {
        
//         for (let el = 0; el < arr.length; el++) {
//             if (arr[el] === rendomarr[el]) {
//                 counter ++
//                     newScore=counter+data[0].score;
                
//             }
//         }
//        data[0].score = newScore;
//         sessionStorage.setItem('currentPlayerData', data);
//        document.getElementById("score").innerHTML = counter;
//        document.getElementById("ts").textContent = data[0].score;
//     }
    
//     else {
//       
//     }
 
    
}
// implemented score
const nextRound = function () {
    debugger

    let data = JSON.parse(localStorage.getItem('currentActivePlayer'));
    if (data) {
        data[0].round++;
        if (data[0].round == 5) {
            userMainData = JSON.parse(localStorage.getItem("playerData"));
            for (let player; player < userMainData.length; player++){
                if (data[0].email == userMainData[player].email) {
                    userMainData[player].highScore = data[0].highScore + data[0].totalScore;
                    localStorage.setItem('playerData', JSON.stringify(userMainData));
                    alert("you reached at maximum round for playing more login again");
                    setTimeout(() => {
                        window.location.replace("/index.html");
                    }, 3000);
                }
            }
        }
        else {
            localStorage.setItem('currentActivePlayerData', JSON.stringify(data));
                        location.reload();
        }
    }

//     let data = JSON.parse(sessionStorage.getItem("currentPlayerData"))
//     console.log(data);
//     if (data) {
//         data[0].round++;
//         if (data[0].round == 5) {
//             alert(`you reached at maximum round ${data[0].score} `);
//             // adding after changing the registration script
//             // adding high score into local storage user data 
//  // identifying user by matching user email which is come form the session wtih local storage email and corrsoponding email user high score is updated with below function 
//  userEmail=data[0].email
//             userData = JSON.parse('playerData')
//             for (let player = 0; userData.length; player++){
//                 if (userData[player].email = userEmail) {
//                     userData[player].highScore = data[0].score;
//                     sessionStorage.setItem('currentPlayerData',JSON.stringify(userData))
//                 }
//             }

         
//         } else {
//             sessionStorage.setItem('currentPlayerData', JSON.stringify(data));
//             location.reload();
//         }
       
//     }
}



const page_load = function () {
// taking data from the session storage function for high score it match the form localstorage and session storage and display the high score of that player

    let userSessionData = JSON.parse(sessionStorage.getItem('currentPlayerData'))
    if (userSessionData) {
       let email = userSessionData[0].email;
       let userLocalData = JSON.parse(localStorage.getItem('playerData'));
        for (let player = 0; player < userLocalData.length; player++){
            if (userLocalData[player].email == email) {
               let currentPlayingUser = {
                    email: userLocalData[player].email,
                    highScore: userLocalData[player].highScore,
                    totalScore: 0,
                    round:0
                }
                localStorage.setItem('currentActivePlayer', JSON.stringify([currentPlayingUser]));
                document.getElementById("hs").textContent = currentPlayingUser[player].hs;
            }
        }
    } else {
        let currentActivePlayer = localStorage.getItem('currentActivePlayer');
        document.getElementById('ts').textContent=currentActivePlayer[0].totalScore;
        document.getElementById('hs').textConetent = currentActivePlayer[0].highScore;
    }


}