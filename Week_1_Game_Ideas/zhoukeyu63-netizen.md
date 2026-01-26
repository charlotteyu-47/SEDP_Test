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

Mechanism:
Illuminates a 3×3 area or an entire lane within fog. Illuminated zombies are marked, making them easier for plants to target (e.g., higher targeting priority).
The beacon has moderate health and releases an Aurora Flash when bitten, briefly stunning or slowing nearby zombies.

Cost: 50

Balance:
During Polar Day, it only provides marking effects and does not stun, preventing it from becoming overpowered.

- New Zombie Types

1.Studded Sled Zombie

Mechanism:
Accelerates while sliding on frozen tiles. Upon colliding with the first plant, it deals a high-impact charge attack, then stops and continues biting normally.

Day/Night Differences:
Polar Day: shorter sliding distance, stronger impact damage
Polar Night: longer sliding distance

Counter:
Heavy front-line defenses such as the Frost Barricade

2.Aurora Beacon Carrier

Type: Support / Utility Zombie

Mechanism:
Carries an Aurora Disruptor. During Polar Night, it creates reverse illumination in - -nearby areas；
Reduces the effective range of player lighting plants
Zombies illuminated by player lights may no longer be highlighted
Grants a small shield to nearby zombies (Aurora Shield)

Counter:
Priority elimination using high burst damage, penetration or splash attacks, and control effects (stun, knockback)
### Possible Challenges
- System Design Challenges：Multi-System Coupling and Exponential Design Complexity

Challenge：
Day–night cycles, terrain states, visibility, plants, and zombies do not function independently; instead, they interact with and modify each other.

Examples:
Polar Night → reduced visibility → reliance on lighting plants
Lighting plants → countered by aurora-based zombies
Frozen terrain → destroyed by heavy stomping zombies

Risks：
Difficult to predict whether all mechanic combinations are solvable
High risk of “unsolvable levels” or a single dominant optimal strategy
Mitigation Strategies
Use an Interaction Matrix during design to document system dependencies
Ensure each new unit has at least two viable counter-strategies

- Implementation Challenges：Complex State Systems and Code Architecture

Challenge：
A single unit may simultaneously be affected by:
Day/Night state
Freeze/Melt state
Visibility modifiers
Buffs and debuffs

Risks：
State conflicts and unclear priority handling
Bugs that are difficult to reproduce and debug

Mitigation Strategies：
Adopt a state-driven architecture (e.g., State Machines or ECS)
Make all states visualized and debuggable
Define clear state priorities (e.g., Terrain > Time > Unit State)

### Screenshot
<img width="2048" height="1536" alt="2" src="https://github.com/user-attachments/assets/e223efe4-71bc-4cb5-9fbe-9b26cc3fa5cd" />

### website
https://www.ea.com/games/plants-vs-zombies
