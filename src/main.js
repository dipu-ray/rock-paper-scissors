// Initialize Score Variables
let playerScore = 0;
let computerScore = 0;

// Map Choices to Emojis
const emojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

// Main Game Function
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];

    // Update Choice Displays
    const playerDisplay = document.getElementById('player-display');
    const computerDisplay = document.getElementById('computer-display');
    playerDisplay.textContent = emojis[playerChoice];
    computerDisplay.textContent = emojis[computerChoice];

    // Add CSS Pop Animation
    playerDisplay.classList.remove('animate-pop');
    computerDisplay.classList.remove('animate-pop');
    void playerDisplay.offsetWidth; // Trigger reflow
    playerDisplay.classList.add('animate-pop');
    computerDisplay.classList.add('animate-pop');

    // Determine Winner
    let result = '';
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "YOU WIN!";
        playerScore++;
    } else {
        result = "COMPUTER WINS!";
        computerScore++;
    }

    // Update Score Text on Page
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = result;

    // Add Shake Animation to Result Message
    resultMessage.classList.remove('animate-shake');
    void resultMessage.offsetWidth; // Trigger reflow
    resultMessage.classList.add('animate-shake');
}

// Reset Function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = '0';
    document.getElementById('computer-score').textContent = '0';
    document.getElementById('player-display').textContent = '❓';
    document.getElementById('computer-display').textContent = '❓';
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = 'Choose Your Weapon!';
}

// Expose functions globally
window.playGame = playGame;
window.resetGame = resetGame;