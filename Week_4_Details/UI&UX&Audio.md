# **5. Interface Requirements** _(Written by: UI/UX + Audio)_

- All menu screens support keyboard navigation and mouse input.
    
- Pressing `ESC` returns to the previous menu screen (except Main Menu).
    
- Screen transitions use 0.3s fade-in/fade-out.
	
## **5.1 Menu Screens**

### **5.1.1 Main Menu:**

- Title logo (centered at the top, 800 × 400)
    
- "Start" button (256 × 96)
    to Start Screen / Continue Screen
- "Help" button (256 × 96)
    to Help Screen
- "Setting" button (256 × 96)
    to Setting Screen
- Background: static Bristol street scene (1920 × 1080)
    

**Help Screen:**

- Control instructions with keyboard icons
    Directional control keys, 按键图+文字说明
- Game mechanics NPCs introduction
    Salesman & Homeless, 人物图+debuff说明
- Game Item introduction
    Backpack, 交互方式+使用规则
    Coffee & Scooter, 物品图+buff说明
- "Back" button (top left)
    Back to previous screen

**Setting Screen:**

- Volume adjustment
    Bar, left to ight, low to high
    0-100
    Changes take effect immediately
- SFX adjustment
    Same as Volume
- "Back" button(top left)
    Back to previous screen

**Continue Screen:**

- Do you want to continue?
    No → to Start Screen
    Yes → to previous save

### **5.1.2 Start Screen:**

- Animation (centered, 800 × 400)
    An animated clip (news report on an accident), 5-10s
    Play once
    Automatically proceeds to Time Screen after it finished

### **5.1.3 Time Screen:**

- Background: static Bristol street scene (1920 × 1080)
    参考Ray提供的例图
- Time Whell (bottom, 800 × 400)
    Player selects date by rotating the wheel
    Confirm selection with button or key
    A default time option is pre-selected when entering the screen (first day/game win)
- "Back" button(top left)
    to Main Menu

### **5.1.4 Room Screen:**

- Background (black)
    a square room in the middle
- Room (centered, 800 × 800)
    bed (top right, 800 × 400)
    window (top centered, 800 × 400)
    desk (top left, 800 × 400)  
    backpack (250 × 200): on the dest (Interactive), to Backpack Screen
    door (bottom, 800 × 400) : Interactive, to Game Screen
- "Pause" button(top right)
    to Paused Screen

### **5.1.5 Backpack Screen:**

- level1 (Initial)
    background: static desk picture
    bag(left)， basic staff(right)
- level2-5
    bag(left)， basic staff(right), item obtained in levels
    Player can select an item to view its description, confirm with buttton or key
    Items cannot be used from this screen
- "Back" button(top left)
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

- Background: Game map
	character
	vehicles
	npc
	item
- "Pause" button(top right)
    to Paused Screen
-  HUD
    见5.2

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

- **Backpack icon:** Top-left corner
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
