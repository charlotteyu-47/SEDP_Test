// [Role: Core Systems Developer]
// Project: Park Street Survivor - Main Central Controller
// Responsible for: State management, Input routing, and Module Synchronization.

let gameState, mainMenu, roomScene, inventory, env, player, obstacleManager;
let currentDayID = 1; 
let assets = { menuBg: null }; // Global asset container

/**
 * ENGINE INITIALIZATION
 * Contributor: Core Systems Developer
 * Goal: Setup canvas and instantiate cross-departmental modules.
 */
function setup() {
    let cvs = createCanvas(GLOBAL_CONFIG.resolutionW, GLOBAL_CONFIG.resolutionH);
    cvs.parent('canvas-container');
    noSmooth(); 

    // [ASSET INTEGRATION]
    // Contributor: Art Integration + Build
    // Loading the background image from assets folder
    loadImage('assets/cbg.png', img => {
        assets.menuBg = img;
        console.log("[Asset] cbg.png loaded successfully.");
    });

    // Initialize core modules
    gameState = new GameState();
    mainMenu = new MainMenu();
    roomScene = new RoomScene();
    inventory = new InventorySystem();
    env = new Environment();
    player = new Player();
    obstacleManager = new ObstacleManager();

    gameState.currentState = STATE_MENU;
}

/**
 * MAIN EXECUTION LOOP
 * Contributor: Core Systems Developer
 * Goal: Orchestrate rendering based on active game state.
 */
function draw() {
    background(30); 

    try {
        switch (gameState.currentState) {
            case STATE_MENU:
            case STATE_LEVEL_SELECT:
            case STATE_SETTINGS:
                // UI Management
                if (mainMenu) mainMenu.display();
                break;

            case STATE_ROOM:
                // Narrative & Transition Phase
                // Player movement logic within the room
                if (player) player.update(); 
                if (roomScene) roomScene.display();
                if (player) player.display();
                break;

            case STATE_DAY_RUN:
                // Main Gameplay Execution
                runGameLoop();
                break;

            case STATE_PAUSED:
                // Freeze frame with UI overlay
                drawPausedScreen();
                break;
                
            case STATE_FAIL:
            case STATE_WIN:
                // Game Over / Victory Logic
                drawEndScreen();
                break;
        }
    } catch (e) {
        console.error("[Core Systems] Runtime Exception in Draw Loop:", e);
    }
}

/**
 * GAMEPLAY LOGIC SYNCHRONIZATION
 * Contributor: Core Systems Developer
 */
function runGameLoop() {
    // 1. World Rendering (Lanes, Sidewalks, Scenery)
    if (env) {
        env.update(GLOBAL_CONFIG.scrollSpeed);
        env.display();
    }
    
    // 2. NPC & Obstacle Processing
    // Hook for: Level Designer (Obstacle placement/pacing)
    if (obstacleManager) {
        obstacleManager.update(GLOBAL_CONFIG.scrollSpeed, player);
        obstacleManager.display();
    }

    // 3. Player Physics & HUD
    if (player) {
        player.update();
        player.display();
    }
}

/**
 * HARDWARE INPUT ROUTING: KEYBOARD
 * Contributor: Core Systems Developer
 */
function keyPressed() {
    // Global Pause Toggle
    if (key === 'p' || key === 'P') { 
        togglePause(); 
        return; 
    }

    let state = gameState.currentState;
    
    if (state === STATE_MENU || state === STATE_LEVEL_SELECT) {
        if (mainMenu) mainMenu.handleKeyPress(key, keyCode);
    } 
    else if (state === STATE_ROOM) {
        // Handles Narrative interaction and Door Exit
        if (roomScene) roomScene.handleKeyPress(keyCode);
    }
    else if (state === STATE_DAY_RUN) {
        // Core Gameplay Input: Lane switching / Ability usage
        if (player && typeof player.handleInput === 'function') {
            player.handleInput(keyCode);
        }
    }
    else if (state === STATE_FAIL || state === STATE_WIN) {
        // State Reset Logic
        if (keyCode === ENTER || keyCode === 13) {
            setupRun(currentDayID);
        }
    }
}

/**
 * HARDWARE INPUT ROUTING: MOUSE
 * Contributor: Core Systems Developer
 */
function mousePressed() {
    let state = gameState.currentState;

    if (state === STATE_MENU || state === STATE_LEVEL_SELECT) {
        if (mainMenu) mainMenu.handleClick(mouseX, mouseY);
    }
    else if (state === STATE_DAY_RUN) {
        // UI Hitbox Detection for Pause Button
        let d = dist(mouseX, mouseY, width - 60, 50);
        if (d < 25) togglePause();
    }
    else if (state === STATE_PAUSED) {
        togglePause(); // Quick resume
    }
}

/**
 * UTILITY: PAUSE MANAGEMENT
 */
function togglePause() {
    if (gameState.currentState === STATE_DAY_RUN) {
        gameState.setState(STATE_PAUSED);
    } else if (gameState.currentState === STATE_PAUSED) {
        gameState.setState(STATE_DAY_RUN);
    }
}

/**
 * CONTEXT INITIALIZATION (LEVEL LOAD)
 * Contributor: Core Systems Developer
 */
function setupRun(dayID) {
    console.log(`[Core Systems] Resetting Session Context for Day ${dayID}`);
    currentDayID = dayID;
    
    // Sync level parameters from Level Designer's config
    player.applyLevelStats(dayID);
    
    // Initial Position: Bedroom (Right side of the bed)
    player.x = 500; 
    player.y = height / 2; 

    roomScene.reset();
    obstacleManager = new ObstacleManager(); // Purge entities
    gameState.setState(STATE_ROOM);
}

/**
 * UI OVERLAYS
 * Contributor: UI/UX + Audio
 */
function drawPausedScreen() {
    if (env) env.display();
    if (player) player.display(); 
    fill(0, 0, 0, 200); 
    rectMode(CORNER);
    rect(0, 0, width, height);
    fill(255); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(60); 
    text("PAUSED", width/2, height/2);
}

function drawEndScreen() {
    background(20); 
    textAlign(CENTER, CENTER);
    let state = gameState.currentState;
    
    if (state === STATE_WIN) {
        fill(100, 255, 100); textSize(80); textStyle(BOLD);
        text("SUCCESS", width/2, height/2 - 50);
    } else {
        fill(255, 50, 50); textSize(80); textStyle(BOLD);
        text("FAILED", width/2, height/2 - 50);
    }
    
    fill(255); textStyle(NORMAL); textSize(24);
    text("Press ENTER to return to Room", width/2, height/2 + 50);
}