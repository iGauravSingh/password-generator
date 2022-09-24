const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function randNumber(){
    return Math.floor(Math.random() * characters.length)
}

function passwordGen(){
    let newPassword = ''
    for(let i=0; i < 15 ; i++){
    
        newPassword += characters[randNumber()]

    }
    return newPassword
}


let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')
let btnCon = document.getElementById('btn-gen')


function handleClick(){
    passwordOne.textContent = passwordGen()
    passwordTwo.textContent = passwordGen()
}