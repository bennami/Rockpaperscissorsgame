

const game = ()=> {

  let pScore = 0;
  let cScore = 0;

  const startGame = () =>{
  const playBtn = document.querySelector('.intro button');
  const introScreen = document.querySelector('.intro');
  const match = document.querySelector('.match');

playBtn.addEventListener('click', () =>{

     introScreen.classList.add("fadeOut");
     match.classList.add("fadeIn");
    });
};
  
//play match
    const playMatch = () => {
     let options = document.querySelectorAll('.options button');
     let playerHand = document.querySelector('.player-hand');
     let computerHand = document.querySelector('.computer-hand');
     const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand =>{

        hand.addEventListener('animationend', function (){
           this.style.animation ='';
        });
    });

      //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
    options.forEach((option)=>{

    //using normal function because inside arrow function 'this' will not bind itself to the keyword option
    option.addEventListener('click', function () {
        //computer choice
        const computerNumber =Math.floor( Math.random()*3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() =>{
            compareHands(this.textContent,computerChoice);
            //update images
            playerHand.src = `./assets/img/${this.textContent}.png`;
            computerHand.src = `./assets/img/${computerChoice}.png`;
        }, 2000);

        //animation
        playerHand.style.animation="shakePlayer 2s ease";
        computerHand.style.animation="shakeComputer 2s ease";
    });

  });
};

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) =>{
        //update text
        const winner = document.querySelector('.winner');

        //checking for tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        //check for rock
        if (playerChoice === 'rock'){

            if (computerChoice === 'scissors'){
                winner.textContent = 'player wins';
                pScore++;
                return;
            }else{
                winner.textContent = 'computer wins';
                cScore++;
                return;
            }
        }

        //check paper
        if (playerChoice === 'paper'){

            if (computerChoice === 'scissors'){
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }
        }

        //check scissors
        if (playerChoice === 'scissors'){

            if (computerChoice === 'rock'){
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }
        }
    };
//call all inner functions
startGame();
playMatch();
};

//start game function
game();
