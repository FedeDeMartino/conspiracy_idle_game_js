# Conspiracy Idle Game [WIP]

Alpha version: https://fededemartino.github.io/conspiracy_idle_game_js/

*THIS IS STILL A WORK IN PROGRESS*

Conspiracy Idle Game is a simple incremental game where players can "buy" conspiracies with followers and donations. The game features click-based mechanics, automatic resource generation, and descriptive popups for each conspiracy.

## Features

- **Idle Game Mechanics**: Gain followers by clicking or automatically over time.
- **Conspiracy Purchases**: Buy new conspiracies as you gather more followers and donations.
- **Popup Descriptions**: Learn more about each conspiracy with detailed descriptions in popups.
- **Persistent Game State**: The game state is saved locally so you can pick up where you left off.

## Getting Started

### Prerequisites

- **Node.js** (v12 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/conspiracy-idle-game.git
    cd conspiracy-idle-game
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

   or, if you're using `yarn`:

    ```bash
    yarn install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

   or, with `yarn`:

    ```bash
    yarn start
    ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the game.
  
### Game Mechanics

- **Followers & Donations**: Click to gain followers and donations. These resources allow you to purchase new conspiracies.
- **Conspiracies**: Each conspiracy has a unique name and description. The cost of each conspiracy increases as you progress.
- **Idle Progression**: As you gain followers, you generate donations automatically over time.
