//array of letters
//selects random one
//displays this onscreen

let letter = document.querySelector('.letter');
let newLetter = document.querySelector('.newLetter');

newLetter.addEventListener('click', randomLetter);
newLetter.addEventListener('mousedown', click);
newLetter.addEventListener('mouseup', clickOff);

let koreanVowels = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'];

function randomLetter(){    
    
    let newValue = koreanVowels[Math.floor(Math.random()*koreanVowels.length)];
    letter.innerHTML = newValue;
    letter.classList.add('motion');
}

function click(){
    newLetter.style.boxShadow = "5px 5px red";
    newLetter.style.fontSize = "25px";

    if(letter.classList.contains('motion')){
        letter.classList.remove('motion');  
    }
}

function clickOff(){
    newLetter.style.boxShadow = "none";
    newLetter.style.fontSize = "15px";

}
