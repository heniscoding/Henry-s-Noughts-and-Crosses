# DOM Mini-Apps

Instructions for this sprint can be found at: https://l2c.northcoders.com/courses/fe/dom-mini-apps

## Noughts and Crosses

- Users can click on squares to place an alternating `X`, or `O`, marker.
- If a user places three of their markers either horizontally, vertically, or diagonally, then the game lets them know that they've won!

_Additional_

- Players can only choose squares that haven't already been taken.
- Once a player has won, allow them to reset the game.
- Keep track of the players' scores.
- Alternate who goes first.


What are the basic features that your mini app needs?

1. A grid of 3x3  buttons representing the playing field. Each button should have its own unique id. (change id by mouse clicking)
2. Alternating between noughts and crosses is a heading on top of the grid to show player's turn. 
3. A condition needs to be set for winning (three in a line either horizontally, vertically or diagonally)
4. When the condition of winning is met, the three matching fields will change background color.
5. A draw is reached if the grid is full and the condition of winning isn't met.
6. A button that resets or restarts the grid could be used in cases of winning or draw.
7. In case of a win a the header is updated to ${player} wins or in case of a draw the header is updated to "No one won, try again" for 2 seconds and resets automatically.
8. Each time a player plays a move the game checks for a win or draw scenario.      

Advanced functionality:

- Keep track of the players' scores.

How will your web page be structured?

- Heading: indicates who's turn it is and what they're playing as. The heading toggles between the players based on clicks. Each time a valid cell is clicked the heading toggles.
ex. (player one as "O") (player two as "X")
- A grid of 3x3 cells each with unique ids that start as empty cells.
- A reset button at the bottom of the grid to clear the grid at any point in the game. 

How will users interact with your web page?

"Click event listeners"

- Clicking on the cells to start the game. First click within the cells assigns a player naughts.

