
        let btnsBox = document.querySelectorAll(".btn")
        let message = document.querySelector("#msg")
        let resetBtn = document.querySelector("#reset")
        let newGame = document.querySelector("#newGame")
        let msgBox = document.querySelector("messageBox")
        let turn0 = true
        let arr = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8],
        ]
      

        const resetFun = ()=>{
               turn0 = true
               enableFun()
        }
        const enableFun = ()=>{

            for(let box of btnsBox ){
                box.disabled = false
                box.innerText = ""
            }
        }
        const disableFun = ()=>{
            for(let box of btnsBox ){
                box.disabled = true
            }
        }
        // playerX , playerY
        btnsBox.forEach((e) => {
            e.addEventListener("click", () => {
                if (turn0) {
                    e.innerHTML = "x"
                    turn0 = false
                }
                else {
                    e.innerHTML = "0"
                    turn0 = true
                }
                e.disabled = true;
                checkWinner()
            })
        });
         const showWinner=(winner)=>{
            console.log(winner , "winnnnnnnnnnnn")
            message.innerText = `Congraculation you are Winner ${winner}`
            disableFun()
         }

        const checkWinner = () => {
            for (let pattern of arr) {
                let value1 = btnsBox[pattern[0]].innerText
                let value2 = btnsBox[pattern[1]].innerText
                let value3 = btnsBox[pattern[2]].innerText
                // console.log(value1)
                if (value1 != " " && value2 != " " && value3 != "") {
                    if (value1 == value2 && value1 == value3) {
                        alert("you win the game")
                        showWinner(value1)
                    }
                }
            }
        }

        resetBtn.addEventListener("click" ,resetFun)
        newGame.addEventListener("click" ,resetFun )
    