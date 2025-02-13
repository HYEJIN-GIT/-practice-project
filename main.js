// let randomNum = 0 ;//랜덤 번호 저장
// let playButton = document.getElementById("play-button");
// let userInput = document.getElementById("user-input");
// let resultArea = document.getElementById("result-area");
// let resetButton = document.getElementById("reset-button");
// let chance = 5;
// let gameOver = false
// let chanceArea = document.getElementById("chance-area");
// let history = []



// playButton.addEventListener("click",play) //버튼이벤트에 클릭 시 플레이라는 함수 실행
// //play라는 함수를 매개변수로 넘김 ()쓰면 안됨.(실행되기 때문) ->함수도 변수처럼 넘길수 있다.
// resetButton.addEventListener("click",reset)
// userInput.addEventListener("focus",function(){userInput.value=""})




// function pickRandomNum(){
//     randomNum = Math.floor(Math.random()*100)+1;// 0~1사이에 있는 것만 알려줌.그러기에 0~99까지만 뽑아주니 + 1을 해주어 1~100까지로 나타낼 수 있음
//     console.log("정답 : ", randomNum); // 랜덤한 숫자를 뽑을수 았게해주는 함수
// }


// function play(){
//    let userValue = userInput.value

//     if(userValue<1 ||userValue>100){
//         resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요."
//         return;//함수종료 시킨다.
//     }
//     if(history.includes(userValue)){
//         resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요. "
//         return;
//     }




//    chance --;
//    chanceArea.textContent = `남은기회 : ${chance}번`

//    if(userValue < randomNum){
//        resultArea.textContent = "UP!!"
//    }else if(userValue >randomNum){
   
//     resultArea.textContent = "DOWN!!"
//    }else{
//     resultArea.textContent = "정답입니다!!"
//     gameOver=true
//    }
//     history.push(userValue)
   
//     if(chance<1){
//     gameOver=true
//    }

//    if(gameOver == true){
//     playButton.disabled = true
//    }
// }

// function reset(){
//     // user input 창이 정리, 새로운 번호 생성
//     userInput.value = ""
//     pickRandomNum();
//     resultArea.textContent = "결과값이 여기 나옵니다!!"
// }

// pickRandomNum();



let randomNum = 0
let inputNum = document.getElementById("input-num")
let goBtn = document.getElementById("go")
let resultArea =document.getElementById("result")
let chance =5;
let distinctValue = []
let chanceArea = document.getElementById("chance")
let resetBtn = document.getElementById("reset")


goBtn.addEventListener("click",play)
resetBtn.addEventListener("click",resetPlay)
inputNum.addEventListener("focus",function(){inputNum.value=""})



function randomNumPick(){
    randomNum = Math.floor(Math.random()*100)+1
    console.log(randomNum)
}


function play(){



    let userValue = inputNum.value

    if(userValue<1 || userValue>100){
        resultArea.textContent = "1과 100사이의 숫자를 입력하세요."
        return;
    }
    if(distinctValue.includes(userValue)){
        resultArea.textContent = "중복된 숫자입니다.다시 입력하세요."
        return;
    }


    chance--
    chanceArea.textContent = `남은기회 ${chance}번`

   
   if(userValue>randomNum){
    resultArea.textContent = "DOWN"
   }else if(userValue<randomNum){
    resultArea.textContent = "UP"
   }else if(userValue=randomNum){
   resultArea.textContent = "정답"
}
distinctValue.push(userValue)
console.log(distinctValue)

if(chance<1){
    goBtn.disabled = true
    resultArea.textContent = "실패"
}

}

function resetPlay(){   
   
    inputNum.value = ""
    randomNumPick()
    goBtn.disabled = false
    chance = 5
    chanceArea.textContent = `남은기회 ${chance}번`
    resultArea.textContent = "결과값이 여기 나옵니다"
   
    

}


randomNumPick()
