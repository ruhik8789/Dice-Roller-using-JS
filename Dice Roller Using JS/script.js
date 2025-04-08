document.getElementById("rollBtn").addEventListener("click", rollDice);

function rollDice() {
    const dice = document.getElementById("dice");
    const result = document.getElementById("result");

    // Dice faces Unicode 🎲 (can be changed to images if needed)
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    // Generate random number 1-6
    let randomNumber = Math.floor(Math.random() * 6);

    // Add rolling animation
    dice.classList.add("roll");

    // Wait for animation, then change the dice face
    setTimeout(() => {
        dice.classList.remove("roll");
        dice.textContent = diceFaces[randomNumber];
        result.textContent = `You rolled a ${randomNumber + 1}!`;
    }, 500);
}
