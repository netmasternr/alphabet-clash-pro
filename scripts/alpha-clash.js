/**
 * 
 * 2. show the play ground
 */


//  function play(){
//     //   1. hide the home screen. to hide home screen and add the class hidden to the home section

//      const homeSection = document.getElementById('home-screen');
//      homeSection.classList.add('hidden');

//     //   show the play ground

//      const playGroundSection = document.getElementById('play-ground')
//      playGroundSection.classList.remove('hidden');
    
//  } 



function continueGame (){
    // Step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);


}



// re usable function
function play(){
    // hide home screen
    hideElementById('home-screen');

    // show play ground
    showElementById('play-ground');

    continueGame()
}

