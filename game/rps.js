function checkWin(a, b) {
    if (a == b) {
        return 0;
    }
    else if (a == 0 && b == 1 || a == 1 && b == 2 || a == 2 && b == 0) {
        return 1;
    }
    else {
        return -1;
    }
}
function randomnum() {
    var randomNumber = Math.floor(Math.random() * 3); // Generates random integer between 0 and 2
    return randomNumber;
}
function main() {
    let choose = document.querySelector(".human").getElementsByClassName("imgCont");
    let choice = Array.from(choose)

    const compChoice = document.querySelector(".comp").getElementsByClassName("imgCont");

    let resDisp = document.querySelector(".resDisp");
    for (let i = 0; i < choice.length; i++) {
        choice[i].addEventListener("click", () => {
            let a = randomnum();
            let compNum = compChoice[a].dataset.info;
            let humNum = choice[i].dataset.info;
            console.log(compNum, humNum);
            let res = checkWin(compNum, humNum);
            let resText, resImg;
            if (res == 0) {
                resText = "Draw...!";
                resImg = "/imagesRPS/draw.png";
            }
            else if (res == 1) {
                resText = "You Won.....!";
                resImg = "/imagesRPS/youwon.jpg"
            }
            else {
                resText = "Comp Won...!";
                resImg = "/imagesRPS/compwon.jpeg";
            }
            
            resDisp.querySelector(".resImg img").src = resImg;
            resDisp.querySelector(".resText").innerHTML = resText;

            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.overlay').style.zIndex = '1';
            resDisp.style.display = "inline";
            resDisp.style.zIndex = "1";
        })

    }
    let replay = document.querySelector(".replay");
    replay.addEventListener("click", () => {
        
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.overlay').style.zIndex = '-1';
        resDisp.style.display = "none"; 
        resDisp.style.zIndex = "-1";
    })
}

onload = main();
