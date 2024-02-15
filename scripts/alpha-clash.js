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

function handKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the game if press esc button
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet)


// check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you win');       
        const currentScore = getTextElementValueById ('current-score');
        const updatedScore = currentScore +1;
        setTextElementValueById('current-score',updatedScore );



        // ----------------------------
        // update score:            
            //  * 1. get the current score            
        //  const currentScoreElement = document.getElementById('current-score');
        //  const currentScoreText = currentScoreElement.innerText;
        //  const currentScore = parseInt(currentScoreText);
        //  console.log(currentScore);

     
        // //  * 2. increase the score by 1
        // const newScore = currentScore + 1;
        // //  * 3. show the updated score
        // currentScoreElement.innerText = newScore;

            // start a new round
        removeBackgroundColorById(expectedAlphabet);

        continueGame();
    }
    else{
        console.log('you missed');

        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife -  1;
        setTextElementValueById('current-life', updatedLife);



        // ----------------------------
        // // step1: get the current life number
        //  const currentLifeElement = document.getElementById('current-life');
        //  const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step2: reduce the life number
        // const newLife = currentLife - 1;

        // // display the update life number
        // currentLifeElement.innerText = newLife;


        // game over
    if(updatedLife === 0){
       gameOver()

    }
    }
  
}

// keyboard type or keyup
document.addEventListener('keyup', handKeyboardKeyUpEvent)



function continueGame (){
    // Step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


          // re usable function
function play(){
    // hide everything, only show play ground
    hideElementById('home-screen');
    hideElementById('finale-score');
    // show play ground
    showElementById('play-ground');

    // reset score and life
     setTextElementValueById('current-life', 5);
     setTextElementValueById('current-score', 5);

    continueGame()
}

// game over
function gameOver(){
    hideElementById('play-ground');
    showElementById('finale-score'); 

    // update finale score
    // 1. get the finale score 
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore); 

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet')  
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet);
 
}
