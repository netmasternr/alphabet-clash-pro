// re usable function

function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueGText = element.innerText;
    const value = parseInt(elementValueGText);

    return value;
} 


function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
 


function getARandomAlphabet(){ 
    // get  or create an alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index between 0 to 25
    const randomNumber = Math.random(alphabets)*25
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index]
    // console.log(index, alphabet);

    return alphabet;

}