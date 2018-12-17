import { grid, button } from "./globals";
import { init, ticTacToe } from "./helpers";

// Event Listeners
grid.forEach(box => box.addEventListener("click", ticTacToe));

// This will handle the reset game logic
button.addEventListener("click", () => {
  grid.forEach(box => box.addEventListener("click", ticTacToe));
  init();
});
