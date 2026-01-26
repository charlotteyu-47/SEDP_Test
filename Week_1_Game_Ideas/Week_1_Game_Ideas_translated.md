The primary aim of the project : learn, apply , and reflect on the principles of software engineering.


## game 1: Flappy Bird
**Genre:** Arcade<br>
**Core Mechanics:** Players control a bird that moves vertically along the screen's axis, navigating through gaps between trees that scroll horizontally.<br>
<img width="650" height="365" alt="image" src="https://github.com/user-attachments/assets/469ff1b2-9d6c-4a28-898e-b0f5d4237fbd" />

**Added Idea Points：**  
Unlike the linear, one-hit-death mechanic of the original Flappy Bird, our game introduces 360-degree freedom. The player controls a bird that can move on both X and Y axes with a sophisticated acceleration system (dash mechanics). Instead of an infinite loop, the game features structured levels where the camera follows the player through vertical shafts and horizontal tunnels (Metroidvania-style traversal). Furthermore, we are replacing the "instant death" state with a health and resilience system: collisions deplete HP but allow for recovery frames, shifting the focus from frustration to precision mastery.

**Possible Challenges** 
1. The Camera System and Coordinate Transformation
2. Modularity in Scoring and Level Evaluation


## game 2: Tableturf Battle (from Splatoon 3)
**Genre:** turn-based strategy / Puzzle / Deck-building<br>
**Core Mechanics:** On a grid map, both sides compete to fill areas with colour by placing blocks of different shapes (similar to Tetris). <br>
Each block must connect to existing areas of their own colour, with the player controlling the largest contiguous territory at the end being declared the winner.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/84654fce-c1ab-4e76-9bab-a0dea74059e8" />
Key mechanics explain that you may check the link below: 
https://www.youtube.com/watch?v=a3UmoODEjis

**Added Idea Points：**  
[empty]

**Possible Challenges**
1. Intelligent AI Opponent
2. The game’s decision rules may be quite complex, including boundary conditions, which may require the use of extensive graph algorithms.



## game 3: Super Mario Bros
**Genre:** 2D Platformer<br>
**Core Mechanics:** Players leap between platforms, collect items, stomp on enemies, and reach the finish line.<br>
<img width="900" height="501" alt="image" src="https://github.com/user-attachments/assets/b7deb321-ed96-4206-a2c9-364964c57b52" />
<img width="900" height="501" alt="image" src="https://github.com/user-attachments/assets/fc69da13-2add-42fb-bdba-f1444b9a7413" />










# 1. Balatro
## **Game Prototype** 
Balatro (Jester Cards)

## **Game Description** 
A roguelike game based on playing cards.

Main mechanics:
- Players play different card combinations (pair, high card, flush, straight) from standard playing cards to gain points; when the score is sufficient the stage is cleared.
- Three rounds make up a major stage. At the end of a major stage there are additional rewards.
- During round settlement, use the gold earned from the round to purchase buffs (the "jester cards"). For example: increase points gained from specific card combinations, increase points when playing even-numbered cards.

 ## **Added points**
- Change the game's skin and reduce the number of cards. Replace standard playing cards with tarot cards.
- Replace regular hand cards with Minor Arcana cards; four elements replace the four suits: Wands, Cups, Coins, Swords.
  - Element effects: when Cups and Coins both play a pair, the score is doubled; when Wands and Cups are both played, the score is halved.
- Use Major Arcana cards (e.g., The Fool, The Tower, Judgement) to replace the game's jester-buff cards to provide buffs; for example: the effect of The Tower card is that after playing two Water cards, the next Earth card played scores double.
- Reduce the number of rounds; a run only has 3–6 rounds.

## **Pros** 
- Tarot card faces are relatively simple to produce; no need to draw many art assets, and many assets are available.
- No character animation and movement states involved; no need to draw 4-direction/8-direction sprites.
- Numbers and card combinations do not need a second redesign; can directly reference the original, avoiding balance issues.
- Replacing standard playing cards with tarot cards can greatly reduce the buffs to design (only thirteen cards), making production simpler.

## **Possible Challenges**
### 1. Hand scoring algorithm.
  - Detect the card combinations contained in the player's played cards (such as pair, straight, high card, flush, etc.) and calculate the corresponding score. If element reactions are added, consider score multipliers.
### 2. Backend state tracking.
  - Need to calculate the remaining deck count, hand sizes, score, and required score to clear in the backend.
### 3. Random strategy.


# Craft & Life

### Game Type
- Sandbox / Open-World Game

- Life Simulation

- Farming & Crafting

- Light Survival

- Single-player with Optional Co-op

### Game Prototype
- minecraft (Sandbox / Survival)

  1. 3D voxel-based open world

  2. First-person and third-person camera modes
 
  3. Crafting System: Tools, furniture, machines, and upgrades

  4. Life System: Day–night cycle, seasons, weather

- stardewvalley (Life Simulation / Farming)

  1. Farming System: Soil preparation, seasonal crops, animal care

  2. Building System: Free-form block building and interior decoration

  3. Social System: NPC dialogue, gifting, relationship progression

### Game description 

- Craft & Life is an open-world sandbox life simulation game that blends the creative freedom of voxel-based building with the warmth and structure of a farming and social simulation.

- Players begin a new life in this game, a procedurally generated 3D world where every block can be shaped and transformed. Players are free to build their own home, cultivate farmland, explore caves, and interact with villagers who have unique personalities and daily routines.

- The game encourages players to balance creativity, productivity, and relationships. Seasonal changes affect crops, events, and NPC behavior, while progression systems unlock new tools, buildings and content like real life. With a calm pace and cozy atmosphere, the game focuses on long-term development and emotional connection.

### Added Idea Points 
- World Memory System 

  The game world remembers significant player actions over time. Locations gain historical meaning, environments change permanently, and NPCs react to past events, creating a persistent and evolving world shaped by player decisions.

- Behavior-Based Player Identity

  Instead of choosing a predefined role or class, the player’s identity is formed dynamically through gameplay behavior. NPC attitudes, dialogue, and story outcomes adapt based on how the player lives, builds, and interacts with the world.
  
### Possible Challenges
- Accidentally causing damage to the environment may affect subsequent development, and an archive function can be established to address this issue.

- A behavior-based identity system may lead to unexpected interpretations of player intent, potentially reducing players’ sense of control over their in-game identity.

- Persistent world memory and evolving environments increase technical complexity and may impact performance, especially in large, heavily modified worlds.

### Screenshot
- minecraft
<img width="1538" height="812" alt="image" src="https://github.com/user-attachments/assets/55dfae8a-db92-4bfa-862b-72efe1f87520" />

- stardewvalley
<img width="1192" height="704" alt="image" src="https://github.com/user-attachments/assets/9b1670c8-46ad-4ac2-aceb-b382796e8b6f" />


### Website
minecraft
- https://www.minecraft.net/zh-hant
  
stardewvalley
- https://www.stardewvalley.net/


# Layla Pei's Ideas  

## **Tower at the End**  

### **Genre:** 2D Cooperative Puzzle Adventure,   Mechanic-driven Level Progression  
### **Game Prototype:**  
- **Fireboy and Watergirl:** Mandatory two-player cooperation, Asymmetric character abilities, and Precision-based environmental puzzles.  
- **FEZ:** Mechanic-based world perception changes, Puzzle design driven by rule shifts rather than enemies.  
### **Core Gameplay:**    
- **Exploration & Puzzle Solving:** Players explore compact but dense levels filled with interactive elements such as switches, platforms, and environmental hazards.  
- **Asymmetric Cooperation:** Develop relationships with townsfolk, attend festivals, and explore character-driven storylines.  
- **Exploration and Adventure:** Each character has **unique interaction constraints** (similar to Fireboy & Watergirl). Some paths or objects can only be accessed by one player, requiring constant teamwork.  
- **Mechanic-Based Level Design:** each level introduces **one core rule change**, such as:  
  - Gravity inversion zones  
  - Object visibility toggled by position  
  - Platforms that exist only for one player  
  - Temporal switches that affect the other character  
  Mechanics are cumulative but controlled to avoid overwhelming players.  
### **Added Idea Points:**  
- **Rule-Switching Tower Structure:** Each level functions as a **self-contained rule experiment**, making the tower ascent feel like intellectual progression rather than simple difficulty scaling.  
- **Emotional Environmental Storytelling:** The world tells its story through **ruins, lighting, sound, and silence**, rather than dialogue or text-heavy narration.  
### **Potential Challenges:**  
- **Rule State Management:** Managing different rule sets per level requires a robust state-driven architecture. Ensuring clean transitions between mechanics (e.g. gravity logic, collision rules, interaction permissions) is non-trivial.  
- **Two-Player Synchronisation:** Keeping both players’ interactions logically consistent—especially when mechanics affect one another—requires careful event handling and testing.  
### **Feasible Implementation Scope:**   
Focus on local two-player only (keyboard sharing), with fixed camera per level. One new mechanic per level and no combat system.  
### **Screenshot & Website:**  
- ![Fireboy and Watergirl](./LP_Fireboy_and_Watergirl_Screenshot.jpg)  
- Fireboy and Watergirl:  
  - https://fireboyandwatergirl.run/  

- ![FEZ](./LP_FEZ_Screenshot.jpg)  
- FEZ Demo vedio:  
  - https://www.youtube.com/watch?v=JkEKAi2jaaE  



## **The strongest support**  

### **Genre:** 2D Strategy Puzzle Adventure, Indirect Control & AI-Driven Gameplay  
### **Game Prototype:**    
- **Monolith:** Pixel-art action shooting game with Roguelike elements and periodically automatic skill release.  
- **Lemmings:** Indirect player control, problem-solving through positioning rather than direct action, and failure as part of learning.  
### **Core Gameplay:**  
- **Indirect Player Control:** The player does **not** control the main attacking character. Instead, the player controls a **supporting monster entity** whose goal is to protect a hero NPC from incoming threats.  
- **Periodic Skill-Based Interaction:** Each level assigns the player a **different monster**, each with a **unique skill that activates automatically on a fixed cycle** (e.g. every few seconds). Player agency comes from **movement, positioning, and timing awareness**, not button-mashing.  


# Charlotte's Ideas

## Park Street Survivor

### Game Type

- Vertical Scrolling Arcade

- Survival Resource Management

### Game Prototype

- Road Fighter
  - Vertical scrolling and obstacle avoidance

- Crossy Road
  - Grid-based movement and voxel/pixel aesthetic

### Description

- A satirical survival game simulating the daily struggle of a UoB student trying to reach the Merchant Venturers Building before a 9 AM lecture.(Could be any building ->Multiple maps)

- The game features an infinitely scrolling map of Park Street (a steep hill). The player must navigate through traffic and pedestrians while managing three dynamic stats: Stamina, Mood, and Time.

- The Goal: Survive the climb and reach the top before running out of stats.

- The Struggle: The screen constantly scrolls downwards. If the player is too slow (stopped by obstacles or interactions) and falls off the bottom of the screen, they are "Late" (Game Over).

- The Obstacles: Players must dodge speeding First Buses, erratic Voi Scooters, and slow-walking tourists.

- The Choices: Players encounter random events like a homeless person asking for change or a Tesco offering a Meal Deal. They must decide: risk stopping to interact (restoring Mood/Stamina but losing Time) or ignore them to rush forward.

### Added Idea Points

1. Risk-Reward Interaction Mechanic

   - Unlike standard arcade games, interacting with shops (Tesco) or NPCs requires the player to stand still in a specific zone for 2 seconds while the screen continues to scroll.

2. Dynamic Weather Physics

   - The game implements a variable physics engine. When the weather changes to "Bristol Rain", the friction coefficient decreases, causing the player character to slide (inertia) after moving. In "Heavy Wind" mode, a constant lateral force vector pushes the player towards the dangerous road center.

3. The "Bristol Item" System

   - Players can pick up items that change gameplay mechanics using the Strategy Pattern:

     - Voi Scooter: Increases speed by 200% but disables braking (high risk).

     - Broken Umbrella: Provides immunity to "Rain" physics but breaks after 3 hits.

     - Noise-Cancelling Headphones: Automatically ignores negative social events (Promoters/Homeless) but blocks positive audio cues (Car horns).

### Possible Possible Challenges

1. Complex State Management

   - Balancing the player's three stats (Stamina/Mood/Time) alongside the "Hold-to-Interact" logic requires a sophisticated Finite State Machine (FSM). Handling the transition between Running, Sliding (Rain), and Interacting (Shopping) without bugs is critical.

2. UI/UX in a Canvas Environment

   - Since p5.js lacks native UI components, creating a responsive HUD (Heads-up Display) for stats and floating interaction bars (e.g., "Buying... 50%") requires writing a custom UI Manager class from scratch.

### Screenshot

- Road Fighter (NES)
  - ![alt text](<CY_Road_Fighter_Screenshot.png>)

- Crossy Road
  - ![alt text](<CY_Crossy_Road_Screenshot.png>)

### Website

- Road Fighter (NES)
  - https://www.retrogames.cz/play_065-NES.php

- Crossy Road
  - https://crossy-road.io/cross-road

---

## Elemental Grove Defense

### Game Type

- Grid-based Strategy

- Tower Defense

- Synergy Simulation


# Game：Plants vs. Zombies
### Game Type
Tower Defense / Strategy / Casual Puzzle Game
### Game Prototype
- Core Prototype Structure

1.Grid-based lane defense prototype
  
2.Players place plants on a fixed grid

3.Enemies (zombies) advance along predefined lanes

4.Failure condition: zombies reach the house at the end of the lane
- Core Gameplay Loop

1.Collect resources (Sunlight）

2.Place defensive units (Plants)

3.Repel incoming enemies (Zombies)

4.Adapt strategy based on enemy types

5.Survive waves to complete the level
### Game Description
Plants vs. Zombies is a single-player tower defense game in which players defend their home from waves of approaching zombies by strategically placing a variety of plants. Each plant has unique abilities, such as attacking enemies, slowing their movement, generating resources, or blocking paths.
Players must manage limited resources, respond to different zombie types, and adapt their strategies across various environments, including daytime, nighttime, foggy, pool, and rooftop levels. The game emphasizes strategic planning, clear visual feedback, and accessible gameplay suitable for players of all skill levels.
### Added Idea Points – Icefield Mode (New Environment)

- Mode Feature — Polar Day and Polar Night Cycle

1.Resource Rules

Polar Day:
Strong natural light; base sunlight drops more frequently; economic plant production is increased by 20%.

Polar Night:
Natural sunlight is scarce; the economy relies heavily on economic-type plants.
Temperature Rules

Polar Night:
Roads freeze, slightly increasing the movement speed of most zombies
Snow falls randomly from the sky
Zombies hit by snow are slowed
Plants hit by snow gain additional energy

Polar Day:
Ice on roads melts
Snow still falls randomly

2.Event System

Aurora Event:
Green aurora empowers all plants
Pink aurora empowers all zombies

Blizzard Event:
Blizzards appear on random tiles, reducing visibility in surrounding tiles

- New Plant Types

1.Economic Plant
(Base Sunflower removed in this mode)

1.1Frost Pine

Mechanism:
Produces Ice Crystal Sunlight. Each time sunlight is produced, zombies in the same row and column are briefly frozen (slowed for 0.1 seconds).

Balance:
Produces sunlight slightly slower than the standard Sunflower in the base game.

2.Attacking Plants

2.1Glacier Prism Shooter (Polar Day–Favored)

Mechanism:
Fires “light beam peas” that penetrate one target. During Polar Day, the beam additionally refracts into an adjacent tile, allowing it to hit zombies in neighboring lanes.

Suggested Values:
Cost: 175 | Medium attack speed | Refraction active only during Polar Day

Balance:
During Polar Night, the plant only retains basic penetration (no refraction), encouraging players to adjust their lineup.

2.2Aurora Spike Vine

Mechanism:
Continuously pierces the nearest zombie in the same lane. During Polar Night or in fog, each hit applies an Aurora Mark. When fully stacked, it triggers a small burst of damage and briefly reveals and prioritizes the target.

Suggested Values:
Cost: 150 | Fast attack speed | Burst damage has an internal cooldown

3 Defensive Plants

3.1 Frost Barricade

Mechanism:
High durability. Zombies biting it accumulate Frostbite stacks; when fully stacked, their attack speed and movement speed are reduced.

Cost: 75

Balance:
Vulnerable to fire or melting effects; durability decreases faster during Polar Day melting phases.

3.2 Aurora Beacon