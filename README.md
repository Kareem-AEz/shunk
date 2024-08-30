![](aesthetics/shunk-og.png)
# Shunk 🎲

**Shunk** is a fun and strategic 2-player dice game where players take turns rolling the dice, banking points, and racing to reach 100 points first. The game combines luck with strategy, as players must decide whether to risk rolling for a higher score or play it safe and bank their points. If a player rolls a 1, their current turn's score resets to zero, and they must pass the turn to their opponent. The first player to accumulate 100 points wins!

## Features
- **2-Player Mode**: Play head-to-head with a friend!
- **Dice Roll & Hold Mechanics**: Roll the dice to add to your current score, but be careful! If you roll a 1, you lose all points for that turn. You can also hold and bank your points to play it safe.
- **Winning Threshold**: The first player to reach **100 points** wins the game.
- **Game Animations**: Includes animations for the player turns, and errors, enhancing the user experience.
- **Canvas Confetti Celebration**: When a player wins, a burst of colorful confetti celebrates the victory!
- **Handling Edge Cases with Animations**: Smooth error-handling animations (such as a shake effect) ensure that even unexpected situations—like trying to roll before starting a turn—are met with visual feedback, making the game more engaging and user-friendly.

## Technologies Used
- **HTML5, CSS3, and JavaScript**: The core technologies powering the game.
- **canvas-confetti**: A lightweight library used to create fun, celebratory confetti animations when a player wins.

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
