# **5. Interface Requirements** _(Written by: UI/UX + Audio)_

- All menu screens support keyboard navigation and mouse input.
    
- Pressing `ESC` returns to the previous menu screen (except Main Menu).
    
- Screen transitions use 0.3s fade-in/fade-out.
	
## **5.1 Menu Screens**

### **5.1.1 Main Menu:**

- Title logo (X:444 Y:210, 1036 × 400)
    
- "Start" button (X:812 Y:663, 300 × 94)
    to Start Screen / Continue Screen
- "Setting" button (X:812 Y:772, 300 × 94)
    to Setting Screen
- "Help" button (X:812 Y:881, 300 × 94)
    to Help Screen
- Background: static Bristol street scene (1920 × 1080)
    

**Help Screen:**

- Control instructions with keyboard icons
    Directional control keys, 按键图+文字说明
- Game mechanics NPCs introduction
    Salesman & Homeless, 人物图+debuff说明
- Game Item introduction
    Backpack, 交互方式+使用规则
    Coffee & Scooter, 物品图+buff说明
- "Back" button (X:22 Y:38, 211 × 124)
    Back to previous screen

**Setting Screen:**

- "Settings" text (X:682 Y:160, 557 × 154)
    
- Volume adjustment
    Bar, left to ight, low to high
    0-100
    Changes take effect immediately
    icon (X:488 Y:453, 107 × 80)
    bar (X:680 Y:469, 680 × 50)
- SFX adjustment
    Same as Volume
    icon (X:488 Y:605, 107 × 80)
    bar (X:680 Y:620, 680 × 50)
- Difficulty Selection (X:474 Y:780, 360 × 92)
    Easy/Normal/Hard (X:984 Y:780, 266 × 92)
    select button (X:1344 Y:780, 78 × 96)
- "Back" button (X:22 Y:38, 211 × 124)
    Back to previous screen

**Continue Screen:**

- Do you want to continue? (X:128 Y:338, 1665 × 154)
    Yes (X:580 Y:632, 162 × 116) → to Time Screen(previous save level)
    No (X:1178 Y:632, 162 × 116) → to Start Screen
    

### **5.1.2 Start Screen:**

- Animation (X:640 Y:152, 640 × 600)
    An animated clip, 5-10s
    Play once
    Automatically proceeds to Time Screen after it finished
- Text (X:390 Y:788, 1140 × 120)
    News report on an accident


### **5.1.3 Time Screen:**

- Background: static Bristol street scene (1920 × 1080)
    
- Time Whell (left)
    Player selects date by rotating the wheel
    Confirm selection with button or key
    A default time option is pre-selected when entering the screen (first day/game win)
- "Back" button (X:22 Y:38, 211 × 124)
    to Main Menu

### **5.1.4 Room Screen:**

- Background (1920 × 1080)
    Room square in the middle
    backpack (on the dest) Interactive, to Backpack Screen
    door (bottom) : Interactive, to Game Screen
- Portrait (X:30 Y:700, 380 × 380)
    main character
- Dialog (X:0 Y:862, 1920 × 218)
    appear when no backpack to the door
- "Pause" button (X:1782 Y:36, 96 × 96)
    to Paused Screen

### **5.1.5 Backpack Screen:**

- level1 (Initial)
    background: static desk picture (1920 × 1080)  
    bag (X:-196 Y:87, 768 × 768)
    basic staff (right)
    Player can select an item to view its description, confirm with buttton or key
    Items cannot be used from this screen
- Item block (X:650 Y:20, 550 × 200)
    include three block
- "Back" button (X:22 Y:38, 211 × 124)
    to Room Screen

### **5.1.6 Paused Screen:**

- Semi-transparent overlay (darkens game)
	Gameplay is frozen
    Timer stops
    Player input disabled
    Background music continues playing while paused.
- Volume & SFX adjustment
	Bar
- "Continue" button
    Back to pervious Screen
- "Restart " button
    to Room Screen
- "Help" button
    to Help Screen
- "Save" button
    save game progres
- "Exit" button
    to Main Menu

### **5.1.7 Game Screen:**

- Background: Game map (1920 × 1080)

-  HUD
    Item icon (X:1782 Y:36, 96 × 96)
    Item-block  (X:1782 Y:36, 96 × 96)
    Health bar (X:1782 Y:36, 96 × 96)
    Progres bar (X:1782 Y:36, 96 × 96)
- "Pause" button (X:1782 Y:36, 96 × 96)
    to Paused Screen

### **5.1.8 Game Over Screen:**

-  "Game Over" text (large font)
    death reason icon, with a humour sentence
- Final score display (below text)
	Final progress percentage is displayed with bar
	xx% right on the bar
- "Retry" button (256 × 96)
    to Room Screen
- "Exit" button (256 × 96)
    to Time Screen
- "Save" button
    save game progres

### **5.1.9 Game Victory Screen:**

- "Game Victory" text (large font)
    victory icon, with a congratulation text
- Final score display (below text)
	how many coffee/scooter you got
	how many homeless you met
	how many vehicles you hit
	...
- "Continue" button
    to Time Screen
- "Retry" button (256 × 96)
    to Room Screen
- "Exit" button (256 × 96)
    to Time Screen
- "Save" button
    save game progres

### **5.1.10 Game Victory Animation:**

- "Walk form End Line to the Building" part (part1)
    Background: T-shaped road section, building at the top centered
    character walk to the front of the building
    black screen → to part 2
- "Conversation" part (part2)
    Background: Wills library
    character and npc
    dialog box on the bottom, people image on the left
    black screen → to Game Victory Screen


## **5.2 HUD (Head-Up Display)**

**During Gameplay:**

- **Item icon:** Top-left corner
    shows item in the backpack
    If no item is stored, an empty backpack icon is shown
- **Health bar:** Top-left, horizontal, beside the backpack icon
    Health decreases per second over time and is additionally reduced by collisions
    when 0: to Game Over Screen
- **Progress bar:** left, vertical
    percentage of map completion progress, increase based on player distance along the level(pixel)

**Visual Feedback:**

- Scooter obtained: Screen flash effect + SFX
    A shield effect appears on the character, fades until it invalid
    Map scrolling down rapidly
    Disappear from the map after being picked up
- Coffee obtained: Screen flash effect + SFX
    Health bar increase
    Disappear from the map after being picked up
- Homeless hit: Bounce effect + SFX
    
- Leaflet obstacle: SFX
    Block all lanes, Pressing space repeatedly to make it smaller until it disappears
    Can still move left and right when it is blocked
    The number of words increases with each level: 12233, Floating effect
- Car crash (small): Impact effect + SFX + Health bar decreased
    
- Car crash (big): Impact effect+ SFX + Game over Screen pop up
    
- Near-miss: Brief screen shake when obstacle barely avoided
    Game over feedback overrides all other visual feedback


## **5.3 Audio Requirements**

**Sound Effects (SFX):**

- Button click: Soft click (0.1s)
    
- Lane switch: Subtle whoosh (0.2s)
    
- Power-up collect: Triumphant jingle (0.5s)
    
- Item activation: Bright ding/chime (0.1s)
    
- Collision: Heavy thud + breaking sound (0.8s)
    
- Dialogue text: Rapid keyboard sounds (0.1s)
    

**Background Music:**

- **Main Menu:** Calm, upbeat instrumental loop (60-90 seconds)
	also applied to Help/Setting/Continue Screen
- **Start Screen:** Noisy voices and the sound of ambulances (5-10 seconds)
    
- **Time Screen:** Calm, upbeat instrumental loop (60-90 seconds)
    
- **Room Screen:** Calm, upbeat instrumental loop (60-90 seconds)
    
- **Level 1-2:** Light electronic music, moderate tempo (120 BPM)
    
- **Level 3-4:** Increasing intensity, faster tempo (140 BPM)
    
- **Level 5:** High-energy, chaotic peak (160 BPM)
    
- **Game Victory Animation:** Calm, upbeat instrumental loop (60-90 seconds)
    
- **Game Over:** Sad trombone or deflating sound (3 seconds)
    
- **Game Victory:** Passionate horns or cheers(3 seconds)
    

**Audio Behavior:**

- Music loops seamlessly without gaps
    
- Music fades between levels (1 second crossfade)
    
- SFX volume: 70% of music volume (don't overpower)
    
- All audio mutable via settings (toggle on/off)
    

## **5.4 Accessibility**

- Minimum font size: 24px for body text, 48px for headings
    
- High contrast text: white text on dark backgrounds
    
- Color-blind friendly: don't rely solely on color for obstacle differentiation (use shapes)
    
- Audio cues optional but enhance experience
    

## **5.5 Visual Feedback Systems**

- **Screen shake on collision:** 5-pixel random offset for 0.3s
    triggered when a collision occurs
- **Speed lines when speed boost active:** Horizontal lines from sides
    appear when scooter is active
- **Glow effect on power-ups:** Pulsing brightness animation
    when itm obtained
