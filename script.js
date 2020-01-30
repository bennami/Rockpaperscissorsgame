

const game = ()=> {

  let playerScore = 0;
  let computerScore = 0;

const startGame = () =>{
const playBtn = document.querySelector('.intro button');
 const introScreen = document.querySelector('.intro');
 const match = document.querySelector('.match');

 playBtn.addEventListener('click', () =>{

     introScreen.classList.add("fadeOut");
     match.classList.add("fadeIn");
    });
};

//call all inner functioons
startGame();

};

//start game function
game();