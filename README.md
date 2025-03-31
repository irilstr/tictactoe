## File structure

- `TICTACTOE/`: Root folder with configuration files and subfolders
  - `.vscode/`: VSCode workspace settings
  - `node_modules/`: Project dependencies (auto-generated)
  - `public/`: Static assets
    - `Bjorn.png/`: Type of character
    - `Elephant.png/`: Type of character
    - `Lemur.png/`: Type of character
  - `src/`: All source code for the web app
    - `components/`: Components for each state of the game
      - `Board.tsx/`: Game board logic and display
      - `button.tsx/`: Reusable button component
      - `Choose_player.tsx/`: Character selection screen
      - `startGame.tsx/`: Intro screen
    - `App.tsx/`: App routing and view control
    - `index.css/`: Tailwind and global CSS
    - `main.tsx/`: React app entry point
    - `vite-env.d.ts/`: Vite TypeScript types
  - `README.md/`: Project documentation
