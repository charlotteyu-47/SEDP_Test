# 1. Balatro
## **Game Prototype**
Balatro (Jester Cards)

## **Game Description**
A roguelike game based on playing cards.

Main mechanics:

- Players play different card combinations based on poker hands (pair, high card, flush, straight, etc.) to earn points; when points reach the required amount, the stage is cleared.
- Three rounds make up a major stage. At the end of a major stage there is an extra reward.
- At the end of each round, use the round reward coins to buy buffs (i.e., jester cards). For example: increase the points earned by a specific hand type, or increase points when even-numbered cards are played.

## **Additional Ideas**
- Re-skin the game and reduce the number of cards by replacing the standard deck with tarot cards.
- Use the Minor Arcana for regular hands; replace the four suits with four elements: Wands, Cups, Coins (Pentacles), and Swords.
  - Element effects: when Cups and Coins both form a pair, points are doubled; when Wands and Cups are both played together, points are halved.
- Use Major Arcana cards (e.g., The Fool, The Tower, Judgment) to replace the in-game jester-card buffs. Example: The Tower card’s effect — after playing two Water cards, the next Earth card played scores double points.
- Reduce the number of rounds per run to 3–6.

## **Pros**
- Tarot card faces are relatively simple to produce and there are many available assets.
- No character animations or movement required, so no need to draw 4- or 8-direction sprites.
- Scoring and card-combination rules can largely reference existing poker mechanics, reducing the need for a full redesign and lowering the risk of balance issues.
- Replacing the standard deck with tarot can greatly reduce the number of unique buffs to design (each suit has only thirteen ranks), simplifying development.

## **Possible Challenges**
### 1. Hand scoring algorithm
- Detect the card combinations the player plays (e.g., pair, straight, high card, flush, etc.) and calculate the corresponding score. If element reactions are added, you must handle score multipliers.

### 2. Backend state tracking
- Track deck remaining, hand sizes, current score, and the score required to clear the stage, etc., on the backend.

### 3. Randomness strategy
- Handle randomness for the order of cards dealt to players and the order in which the shop refreshes its cards.

## **Screenshots:**
Game start screen:
<img width="2560" <img width="2560" height="1600" alt="Game start screen" src="https://github.com/user-attachments/assets/6fcfebbe-ebd9-4ee0-83d8-0504ee69999a" />
Round start screen (3 sub-levels):
<img width="2560" height="1600" alt="Round start screen (3 sub-levels)" src="https://github.com/user-attachments/assets/0ee4671c-6b51-4104-bdf8-310e50820467" />
In-game screen:
<img width="2560" height="1600" alt="In-game screen" src="https://github.com/user-attachments/assets/eb22f560-be3a-43ef-8010-1a6d4d3c33f3" />
Score display (points for high card, pair, flush, etc.):
<img width="2560" height="1600" alt="Score display (high card, pair, flush, etc.)" src="https://github.com/user-attachments/assets/7a8eab76-2581-43d8-8891-efb035171b65" />
Shop page:
<img width="2560" height="1600" alt="Shop page" src="https://github.com/user-attachments/assets/18757e93-6992-42d7-83e7-5d1e5e518bef" />

## **Links**
https://store.steampowered.com/app/2379780/Balatro/

https://youtu.be/2n9pkiuSZLU?si=ec-42bTwZf4gjbdY

---

# 2. Pico Park
## **Game Type**
Cooperative puzzle-platformer

## **Game Prototype**
Pico Park

## **Game Description**
A multiplayer cooperative clearance game. Similar to Fireboy and Watergirl but a simpler version — primarily a jumping/platforming game with a few mechanisms.

## **Additional Idea**
Add character abilities: each player’s chosen character has a different ability, such as jumping farther, being able to push blocks, creating temporary steps, etc.

## **Pros**
- Art resources are simple; basic drawings can cover all required elements like blocks, buttons, platforms, and switches.
- Code is simpler — mainly character movement and platform changes — no need to track player stats or scores.
- Plenty of existing level design samples to reference; less need for original mechanic invention.

## **Possible Challenges**
1. Input synchronization in multiplayer
   - Must handle simultaneous keyboard inputs from multiple players, interactions between players (e.g., one player standing on another’s head, a player pushing a block), and collisions between characters.

2. Level system
   - Design interactive level elements such as moving jumping platforms, interactive switches, doors, and pushable boxes.

## **Screenshots**
Start page:
<img width="1920" height="1080" alt="Start page" src="https://github.com/user-attachments/assets/1368e5ac-bdf8-4258-9712-cae4d5b779bc" />
In-game screens:
<img width="1920" height="1080" alt="In-game screenshot 1" src="https://github.com/user-attachments/assets/32512808-775d-473b-995c-cc44b173ae34" />
<img width="1920" height="1080" alt="In-game screenshot 2" src="https://github.com/user-attachments/assets/0417d97c-bac9-4e42-ab04-39e42f3c2395" />
<img width="1920" height="1080" alt="In-game screenshot 3" src="https://github.com/user-attachments/assets/a9b57ce0-0807-471f-b73b-0beeb5dbc91e" />

## **Link**
[PICO PARK](https://picoparkgame.com/pp1/)
