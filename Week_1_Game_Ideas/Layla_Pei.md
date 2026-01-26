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
- **AI-Driven Environment:** The hero NPC autonomously moves and attacks enemies using a simple AI system. Other enemy entities actively target the hero. The player must use their monster’s skill effects to **block, redirect, or mitigate damage**.  
- **Clear Win/Lose Conditions:**   
  - **Win:** The hero survives long enough to eliminate all enemies in the level.  
  - **Lose:** The hero’s health reaches zero.  
### **Added Idea Points:**  
- **Indirect-Control Strategy Loop:** Unlike conventional action games, the player’s influence is delayed and indirect. This encourages **planning, prediction, and spatial reasoning**, aligning strongly with puzzle-oriented game design principles.  
- **Character-as-Mechanic Design:** Each monster is effectively a **living game mechanic**, making character identity inseparable from gameplay rules. This supports strong mechanical clarity and replayability.  
### **Potential Challenges:**    
- **AI Behaviour Coordination:** Designing AI for the hero, enemies, and player-controlled monster requires careful coordination to prevent unpredictable or unfair interactions. Balancing autonomy with readability is a key challenge.  
- **Timed Skill and State Management:** Implementing periodic skill activation demands a reliable timing system. Managing overlapping states (e.g. cooldowns, invulnerability windows, collision changes) requires a clean, event-driven architecture.  
### **Feasible Implementation Scope:**  
One hero NPC, one player-controlled monster, and a small number of enemy types per level. Focus on **AI behaviour, timing systems, and mechanic clarity**, rather than graphical complexity or multiplayer networking.  
### **Screenshot & Website:**  
- ![Monolith](./LP_Monolith_Screenshot.jpg)  
- Monolith:  
  - https://team-d-13.itch.io/monolithdemo  

- ![Lemmings](./LP_Lemmings_Screenshot.jpg)  
- Lemmings vedio:  
  - https://www.youtube.com/watch?v=OjUYW1WBWFI  
