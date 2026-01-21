# Park Street Survivor

## Game Type

- Vertical Scrolling Arcade
- Survival Resource Management

## Game Prototype

- Road Fighter
  - Vertical scrolling and obstacle avoidance

- Crossy Road
  - Grid-based movement and voxel/pixel aesthetic

## Description

- A satirical survival game simulating the daily struggle of a UoB student trying to reach the Merchant Venturers Building before a 9 AM lecture.(Could be any building ->Multiple maps)

- The game features an infinitely scrolling map of Park Street (a steep hill). The player must navigate through traffic and pedestrians while managing three dynamic stats: Stamina, Mood, and Time.

- The Goal: Survive the climb and reach the top before running out of stats.

- The Struggle: The screen constantly scrolls downwards. If the player is too slow (stopped by obstacles or interactions) and falls off the bottom of the screen, they are "Late" (Game Over).

- The Obstacles: Players must dodge speeding First Buses, erratic Voi Scooters, and slow-walking tourists.

- The Choices: Players encounter random events like a homeless person asking for change or a Tesco offering a Meal Deal. They must decide: risk stopping to interact (restoring Mood/Stamina but losing Time) or ignore them to rush forward.

## Added Idea Points

1. Risk-Reward Interaction Mechanic

   - Unlike standard arcade games, interacting with shops (Tesco) or NPCs requires the player to stand still in a specific zone for 2 seconds while the screen continues to scroll.

2. Dynamic Weather Physics

   - The game implements a variable physics engine. When the weather changes to "Bristol Rain", the friction coefficient decreases, causing the player character to slide (inertia) after moving. In "Heavy Wind" mode, a constant lateral force vector pushes the player towards the dangerous road center.

3. The "Bristol Item" System

   - Players can pick up items that change gameplay mechanics using the Strategy Pattern:

     - Voi Scooter: Increases speed by 200% but disables braking (high risk).

     - Broken Umbrella: Provides immunity to "Rain" physics but breaks after 3 hits.

     - Noise-Cancelling Headphones: Automatically ignores negative social events (Promoters/Homeless) but blocks positive audio cues (Car horns).

## Possible Possible Challenges

1. Complex State Management

   - Balancing the player's three stats (Stamina/Mood/Time) alongside the "Hold-to-Interact" logic requires a sophisticated Finite State Machine (FSM). Handling the transition between Running, Sliding (Rain), and Interacting (Shopping) without bugs is critical.

2. UI/UX in a Canvas Environment

   - Since p5.js lacks native UI components, creating a responsive HUD (Heads-up Display) for stats and floating interaction bars (e.g., "Buying... 50%") requires writing a custom UI Manager class from scratch.

## Screenshot

- Road Fighter (NES)
  - ![alt text](image.png)

- Crossy Road
  - ![alt text](<Screenshot 2026-01-21 at 12.29.40.png>)

## Website

- Road Fighter (NES)
  - https://www.retrogames.cz/play_065-NES.php

- Crossy Road
  - https://crossy-road.io/cross-road

---

# Maze Building Tower Defense

## Game Type
- Strategy
- Pathfinding Simulation
- Grid-based Puzzle

## Game Prototype
- Desktop Tower Defense

## Game description
## Added Idea Points
## Possible Challenges
## Screenshot
## Website

