![](aesthetics/shunk-og.png)
# Shunk - Pig Game Re-Mastered 🎲

**Shunk - Pig Game Re-Mastered** is the third project from Jonas Schmedtmann's "The Complete JavaScript Course". This reimagined version of the classic Pig dice game is built using **HTML**, **CSS**, and **JavaScript** with a modern approach. Players take turns rolling the dice, banking points, and racing to reach 100 points first. The game blends luck and strategy, where players must decide whether to roll for more points or hold and bank their current score.

## Key Features
- **Randomized First Player**: At the start of each game, the first player is randomized, adding a unique twist to each playthrough.
- **2-Player Mode**: Compete head-to-head with a friend!
- **Dice Roll & Hold Mechanics**: Roll the dice to add points to your current score. If you roll a 1, your turn ends, and your current score for that round resets to zero. You can also play it safe by holding to bank your points and pass the turn to the opponent.
- **Winning Threshold**: The first player to reach **100 points** wins.
- **Game Animations**: Includes animations for the player turns, and errors, enhancing the user experience.
- **Error Feedback with Animations**: Special animations, such as the shake effect, give players visual feedback when errors occur (e.g., rolling before the game starts or trying to roll after the game is over).
- **Canvas Confetti Celebration**: Upon victory, a vibrant confetti burst celebrates the winner using the **canvas-confetti** library.


## Technologies Used
- **HTML5, CSS3, and JavaScript**: The core technologies powering the game.
- **canvas-confetti**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) is a lightweight library used to create fun, celebratory confetti animations when a player wins.

## How to Play
1. Players take turns rolling the dice. The number on the dice is added to the player's current score.
2. Players can "Hold" their current score and add it to their total score.
3. If a player rolls a 1, their current score for that turn is lost, and the turn passes to the opponent.
4. The first player to reach 100 points wins and triggers a confetti celebration!

## Edge Case Handling
- **Error Animations**: If a player tries to take action outside the normal flow of the game, such as rolling the dice before the game starts or after it ends, a subtle shake animation is triggered to signal the error and provide feedback without interrupting the flow of the game.
- **Interactive Feedback**: Clear visual cues ensure players are always aware of their actions, whether it's banking points, rolling a 1, or winning the game.

## Credits 🙌
- The flat shadow effect was inspired by [Hot Page](https://hot.page).
