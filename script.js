let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  // return a random number from 0 to 9
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  if (userGuess === computerGuess){
    return true;
  } else if(userGuess - secretNumber > computerGuess - secretNumber){
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  if(winner === "human"){
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
