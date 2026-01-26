# Game 1: Balatro (Tarot Edition)
## Game Type: Roguelike Card Game
## Game Prototype: Balatro
## Game Description:
A roguelike game based on poker cards. Players play different card combinations (pairs, high cards, flushes, straights) to earn points and pass levels when the score is sufficient. Three rounds form one major stage with extra rewards at completion. Players use coins earned from rounds to purchase buffs (Joker cards) that increase scores for specific combinations.

**Added Ideas:**
- Replace poker cards with Tarot cards, reducing card quantity
- Use Minor Arcana for regular hands (four suits: Wands, Cups, Coins, Swords representing elements)
- Element effects: Cups + Coins pair doubles score; Wands + Cups together halves score
- Major Arcana cards replace Joker buffs (e.g., The Tower card: after playing two water cards, the next earth card's score doubles)
- Reduce rounds to 3-6 per playthrough

## Screenshots:
Game start interface, round start interface, gameplay interface, scoring display, shop page (images referenced in original)

## Possible Challenges:
1. Hand score algorithm - detecting card combinations and calculating scores with element reactions
2. Backend state tracking - tracking remaining deck, hand count, scores, and target scores
3. Random strategy - managing random hand order and shop card refresh order

## Links:
- https://store.steampowered.com/app/2379780/Balatro/
- https://youtu.be/2n9pkiuSZLU

---

# Game 2: Pico Park
## Game Type: Cooperative Puzzle-Platformer
## Game Prototype: Pico Park
## Game Description:
A multiplayer cooperative game similar to a simpler version of Fireboy and Watergirl - platforming with minimal mechanisms.

**Added Ideas:**
- Add character abilities: each player's character has unique abilities such as jumping farther, pushing blocks, or creating temporary platforms

## Screenshots:
Start page and gameplay pages (images referenced in original)

## Possible Challenges:
1. Multi-player synchronized input - detecting two players' keyboard inputs simultaneously, managing player states (one player standing on another's head, pushing blocks), and collision between characters
2. Level system - designing interactive mechanisms like moving platforms, switches, doors, and pushable boxes

## Links:
- https://picoparkgame.com/pp1/

---

# Game 3: Tower at the End
## Game Type: 2D Cooperative Puzzle Adventure, Mechanic-driven Level Progression
## Game Prototype: Fireboy and Watergirl, FEZ
## Game Description:
Players explore compact but dense levels with interactive elements (switches, platforms, environmental hazards). Features asymmetric cooperation where each character has unique interaction constraints requiring constant teamwork. Each level introduces one core rule change (gravity inversion zones, object visibility toggled by position, platforms existing only for one player, temporal switches affecting the other character).

**Added Ideas:**
- Rule-Switching Tower Structure: each level is a self-contained rule experiment
- Emotional Environmental Storytelling: world tells its story through ruins, lighting, sound, and silence

## Screenshots:
Fireboy and Watergirl screenshot, FEZ screenshot (images referenced in original)

## Possible Challenges:
1. Rule State Management - managing different rule sets per level with clean transitions between mechanics
2. Two-Player Synchronization - keeping both players' interactions logically consistent

## Links:
- https://fireboyandwatergirl.run/
- https://www.youtube.com/watch?v=JkEKAi2jaaE

---

# Game 4: The Strongest Support
## Game Type: 2D Strategy Puzzle Adventure, Indirect Control & AI-Driven Gameplay
## Game Prototype: Monolith, Lemmings
## Game Description:
Player does not control the main attacking character but controls a supporting monster entity to protect a hero NPC from threats. Each level assigns a different monster with a unique skill that activates automatically on a fixed cycle. Player agency comes from movement, positioning, and timing awareness. The hero NPC autonomously moves and attacks using simple AI while enemies target the hero.

**Win condition:** Hero survives long enough to eliminate all enemies
**Lose condition:** Hero's health reaches zero

**Added Ideas:**
- Indirect-Control Strategy Loop: encourages planning, prediction, and spatial reasoning
- Character-as-Mechanic Design: each monster is a living game mechanic

## Screenshots:
Monolith screenshot, Lemmings screenshot (images referenced in original)

## Possible Challenges:
1. AI Behaviour Coordination - designing AI for hero, enemies, and player-controlled monster
2. Timed Skill and State Management - implementing periodic skill activation with reliable timing system

## Links:
- https://team-d-13.itch.io/monolithdemo
- https://www.youtube.com/watch?v=OjUYW1WBWFI

---

# Game 5: Park Street Survivor
## Game Type: Vertical Scrolling Arcade, Survival Resource Management
## Game Prototype: Road Fighter, Crossy Road
## Game Description:
A satirical survival game simulating a UoB student trying to reach the Merchant Venturers Building before a 9 AM lecture. Features an infinitely scrolling map of Park Street (a steep hill). Players navigate traffic and pedestrians while managing three stats: Stamina, Mood, and Time. The screen constantly scrolls downwards - if too slow, the player is "Late" (Game Over). Players dodge First Buses, Voi Scooters, and slow-walking tourists, while encountering random events (homeless person asking for change, Tesco Meal Deal).

**Added Ideas:**
- Risk-Reward Interaction Mechanic: interacting requires standing still for 2 seconds while screen scrolls
- Dynamic Weather Physics: Bristol Rain reduces friction causing sliding; Heavy Wind pushes player laterally
- Bristol Item System: Voi Scooter (200% speed, no braking), Broken Umbrella (rain immunity, breaks after 3 hits), Noise-Cancelling Headphones (ignores negative events, blocks audio cues)

## Screenshots:
Road Fighter (NES), Crossy Road screenshots (images referenced in original)

## Possible Challenges:
1. Complex State Management - balancing three stats with "Hold-to-Interact" logic requiring sophisticated FSM
2. UI/UX in Canvas Environment - creating responsive HUD without native UI components

## Links:
- https://www.retrogames.cz/play_065-NES.php
- https://crossy-road.io/cross-road

---

# Game 6: Elemental Grove Defense
## Game Type: Grid-based Strategy, Tower Defense, Synergy Simulation
## Game Prototype: Carrot Fantasy, Genshin Impact
## Game Description:
Set in a "Cyber-Forest" invaded by a "Mechanical Virus." Players plant "Elemental Flora" (Towers) on a grid to stop mechanical bugs from reaching the "Life Tree." Focus is on Placement Strategy and Synergy rather than upgrading single towers. Basic towers: Narcissus (Water/Slow), Sunflower (Fire/Burn), Thunder-Grass (Lightning/High Single Damage). Towers interact with neighbors - Fire + Water triggers "Vaporize" reaction dealing AoE steam damage.

**Added Ideas:**
- Adjacency Synergy System: towers function as nodes in a graph with dynamic attack strategy changes
- Interactive Terrain Modification: destroying "Old Tech Junk" grants currency and alters terrain properties

## Screenshots:
Carrot Fantasy, Genshin Impact screenshots (images referenced in original)

## Possible Challenges:
1. Complexity of Interaction Rules - managing elemental combination rules
2. Graph Traversal for Chain Reactions - implementing "Chain Lightning" with optimized recursive search

## Links:
(Not provided in original)

---

# Game 7: Plants vs. Zombies - Icefield Mode
## Game Type: Tower Defense / Strategy / Casual Puzzle Game
## Game Prototype: Plants vs. Zombies
## Game Description:
Grid-based lane defense where players place plants to repel zombies. Core loop: collect sunlight, place plants, repel zombies, adapt strategy, survive waves.

**Added Ideas - Icefield Mode:**
- Polar Day/Night Cycle with different resource and temperature rules
- Polar Day: frequent sunlight, 20% increased production
- Polar Night: scarce sunlight, frozen roads increase zombie speed, random snow falls (slows zombies, energizes plants hit by snow)
- Aurora Event: Green aurora empowers plants, Pink aurora empowers zombies
- Blizzard Event: reduces visibility on random tiles
- New Plants: Frost Pine (produces Ice Crystal Sunlight, briefly freezes zombies), Glacier Prism Shooter (light beam peas with Polar Day refraction), Aurora Spike Vine (continuous pierce with Aurora Mark), Frost Barricade (high durability with Frostbite stacks), Aurora Beacon (illuminates area, marks zombies)
- New Zombies: Studded Sled Zombie (accelerates on ice), Aurora Beacon Carrier (disrupts lighting plants)

## Screenshots:
Plants vs. Zombies screenshot (image referenced in original)

## Possible Challenges:
1. Multi-System Coupling - day-night cycles, terrain states, visibility, plants, and zombies all interact
2. Complex State Systems - single unit affected by multiple simultaneous states

## Links:
- https://www.ea.com/games/plants-vs-zombies

---

# Game 8: Flappy Bird (Enhanced)
## Game Type: Arcade
## Game Prototype: Flappy Bird
## Game Description:
Players control a bird moving vertically along the screen, navigating through gaps between horizontally scrolling trees.

**Added Ideas:**
- 360-degree freedom with X and Y axis movement and acceleration system (dash mechanics)
- Structured levels with Metroidvania-style traversal through vertical shafts and horizontal tunnels
- Health and resilience system replacing instant death - collisions deplete HP but allow recovery frames

## Screenshots:
Flappy Bird screenshot (image referenced in original)

## Possible Challenges:
1. Camera System and Coordinate Transformation
2. Modularity in Scoring and Level Evaluation

## Links:
(Not provided in original)

---

# Game 9: Tableturf Battle
## Game Type: Turn-based Strategy / Puzzle / Deck-building
## Game Prototype: Tableturf Battle (from Splatoon 3)
## Game Description:
On a grid map, both sides compete to fill areas with color by placing blocks of different shapes (similar to Tetris). Each block must connect to existing areas of their own color. The player controlling the largest contiguous territory at the end wins.

**Added Ideas:**
(None specified)

## Screenshots:
Tableturf Battle screenshot (image referenced in original)

## Possible Challenges:
1. Intelligent AI Opponent
2. Complex decision rules including boundary conditions, requiring extensive graph algorithms

## Links:
- https://www.youtube.com/watch?v=a3UmoODEjis

---

# Game 10: Super Mario Bros
## Game Type: 2D Platformer
## Game Prototype: Super Mario Bros
## Game Description:
Players leap between platforms, collect items, stomp on enemies, and reach the finish line.

**Added Ideas:**
(None specified)

## Screenshots:
Super Mario Bros screenshots (images referenced in original)

## Possible Challenges:
(Not specified in original)

## Links:
(Not provided in original)

---

# Game 11: Craft & Life
## Game Type: Sandbox / Open-World, Life Simulation, Farming & Crafting, Light Survival
## Game Prototype: Minecraft, Stardew Valley
## Game Description:
An open-world sandbox life simulation blending voxel-based building with farming and social simulation. Players begin a new life in a procedurally generated 3D world where every block can be shaped. Players build homes, cultivate farmland, explore caves, and interact with villagers who have unique personalities and daily routines. Seasonal changes affect crops, events, and NPC behavior.

**Added Ideas:**
- World Memory System: game world remembers significant player actions; locations gain historical meaning; NPCs react to past events
- Behavior-Based Player Identity: identity formed dynamically through gameplay behavior; NPC attitudes and story outcomes adapt based on how player lives and interacts

## Screenshots:
Minecraft screenshot, Stardew Valley screenshot (images referenced in original)

## Possible Challenges:
1. Environmental damage affecting subsequent development (mitigated by save function)
2. Behavior-based identity system may reduce players' sense of control over their identity
3. Persistent world memory increases technical complexity and may impact performance

## Links:
- https://www.minecraft.net/
- https://www.stardewvalley.net/
