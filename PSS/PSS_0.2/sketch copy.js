// [Role: Core Systems Developer]

let gameState, mainMenu, roomScene, inventory, env, player, obstacleManager;
let currentDayID = 1; 
let assets = { menuBg: null }; // Global asset container

/**
 * ENGINE INITIALISATION
 * Goal: Setup canvas and instantiate cross-departmental modules.
 */
function setup() {
    let cvs = createCanvas(GLOBAL_CONFIG.resolutionW, GLOBAL_CONFIG.resolutionH);
    cvs.parent('canvas-container'); // Put canvas in the middle
    noSmooth(); // Sharp edge -> Pixel vibe

    // [ASSET NEEDED]
    // Place to put background image in container
    loadImage('assets/cbg.png', img => {
        assets.menuBg = img;
        console.log("[Asset] cbg.png loaded successfully.");
    });

    // Initialise core modules
    gameState = new GameState();
    mainMenu = new MainMenu();
    roomScene = new RoomScene();
    inventory = new InventorySystem();
    env = new Environment();
    player = new Player();
    obstacleManager = new ObstacleManager();

    // Entry point
    // Could change it to other state to test specific one
    gameState.currentState = STATE_MENU; 
}

/**
 * MAIN EXECUTION LOOP
 * Goal: Orchestrate rendering based on active game state.
 */
let pauseIndex = 0;
const PAUSE_OPTIONS = ["RESUME", "QUIT TO MENU"];

function draw() {
    background(30); 
    try {
        switch (gameState.currentState) {
            case STATE_MENU:
            case STATE_LEVEL_SELECT:
            case STATE_SETTINGS:
                if (mainMenu) mainMenu.display();
                break;

            case STATE_ROOM:
                if (roomScene) roomScene.display();
                if (player) {
                    player.update(); 
                    player.display();
                }
                drawPauseButton(); // 房间也显示暂停按钮
                break;

            case STATE_DAY_RUN:
                runGameLoop();
                drawPauseButton(); // 跑酷也显示暂停按钮
                break;

            case STATE_PAUSED:
                // 1. 先根据上一个状态画背景，实现“冻结”效果
                if (gameState.previousState === STATE_ROOM) {
                    if (roomScene) roomScene.display();
                    if (player) player.display();
                } else if (gameState.previousState === STATE_DAY_RUN) {
                    if (env) env.display();
                    if (obstacleManager) obstacleManager.display();
                    if (player) player.display();
                }
                // 2. 盖上统一的暂停菜单
                renderPauseOverlay(); 
                break;
                
            case STATE_FAIL:
            case STATE_WIN:
                drawEndScreen();
                break;
        }
    } catch (e) {
        console.error("[Core Systems] Runtime Exception:", e);
    }
}

/**
 * GAMEPLAY LOGIC SYNCHRONISATION
 */
function runGameLoop() {
    // 1. World Rendering (Lanes, Sidewalks, Scenery)
    if (env) {
        env.update(GLOBAL_CONFIG.scrollSpeed);
        env.display();
    }
    
    // 2. NPC & Obstacle Processing
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
/**
 * HARDWARE INPUT ROUTING: KEYBOARD
 * 修正版：确保变量作用域正确，防止逻辑中断
 */
function keyPressed() {
    // 1. 【关键修改】必须先获取当前状态，否则后续判断会崩溃
    let state = gameState.currentState;

    // 2. 全局暂停控制 (P 或 ESC)
    if (key === 'p' || key === 'P' || keyCode === ESCAPE) {
        // 只有在非菜单状态下才允许进入暂停
        if (state !== STATE_MENU && state !== STATE_LEVEL_SELECT && state !== STATE_SETTINGS) {
            togglePause();
            pauseIndex = 0; 
            return; // 拦截，不执行后续逻辑
        }
    }

    // 3. 暂停态下的独立按键逻辑
    if (state === STATE_PAUSED) {
        if (keyCode === UP_ARROW || keyCode === 87) {
            pauseIndex = (pauseIndex - 1 + PAUSE_OPTIONS.length) % PAUSE_OPTIONS.length;
        } else if (keyCode === DOWN_ARROW || keyCode === 83) {
            pauseIndex = (pauseIndex + 1) % PAUSE_OPTIONS.length;
        } else if (keyCode === ENTER || keyCode === 13) {
            handlePauseSelection();
        }
        return; // 暂停时完全拦截其他按键
    }

    // 4. 正常状态下的按键分发
    if (state === STATE_MENU || state === STATE_LEVEL_SELECT || state === STATE_SETTINGS) {
        if (mainMenu) mainMenu.handleKeyPress(key, keyCode);
    } 
    else if (state === STATE_ROOM) {
        if (roomScene) roomScene.handleKeyPress(keyCode);
    }
    else if (state === STATE_DAY_RUN) {
        if (player && typeof player.handleInput === 'function') {
            player.handleInput(keyCode);
        }
    }
    else if (state === STATE_FAIL || state === STATE_WIN) {
        if (keyCode === ENTER || keyCode === 13) {
            setupRun(currentDayID);
        }
    }
}

function handlePauseSelection() {
    if (PAUSE_OPTIONS[pauseIndex] === "RESUME") {
        togglePause();
    } else if (PAUSE_OPTIONS[pauseIndex] === "QUIT TO MENU") {
        gameState.setState(STATE_MENU);
        mainMenu.menuState = "HOME"; 
    }
}

/**
 * HARDWARE INPUT ROUTING: MOUSE
 */
function mousePressed() {
    let state = gameState.currentState;

    if (state === STATE_MENU || state === STATE_LEVEL_SELECT) {
        if (mainMenu) mainMenu.handleClick(mouseX, mouseY);
    }
    else if (state === STATE_ROOM || state === STATE_DAY_RUN) {
        let d = dist(mouseX, mouseY, width - 60, 50); // Right top stop button
        if (d < 25) togglePause();
        if (dist(mouseX, mouseY, width - 60, 50) < 25) {
            togglePause();
            pauseIndex = 0;
        }
    } else if (state === STATE_PAUSED) {
        // 暂停时点击任意处恢复，或此处可保持逻辑不写，只靠键盘
    }
}

/**
 * UTILITY: PAUSE MANAGEMENT(RUN)
 */
function togglePause() {
    if (gameState.currentState === STATE_PAUSED) {
        // 恢复到之前的状态 (从哪里暂停回哪里去)
        gameState.setState(gameState.previousState);
    } else {
        gameState.setState(STATE_PAUSED);
    }
}

/**
 * CONTEXT INITIALISATION (LEVEL LOAD)
 */
function setupRun(dayID) {
    console.log(`[Core Systems] Resetting Session Context for Day ${dayID}`);
    currentDayID = dayID;
    
    // Sync level parameters
    player.applyLevelStats(dayID);
    
    // Initial Position: Bedroom (Right side of the bed)
    player.x = 500; 
    player.y = height / 2; 

    roomScene.reset();
    obstacleManager = new ObstacleManager();
    gameState.setState(STATE_ROOM);
}

function drawEndScreen() {
    if (assets.menuBg) {
        image(assets.menuBg, 0, 0, width, height);
    } else {
        background(20); 
    }

    textAlign(CENTER, CENTER);
    let state = gameState.currentState;
    
    if (state === STATE_WIN) {
        fill(100, 255, 100); textSize(80); textStyle(BOLD);
        text("SUCCESS", width/2, height/2 - 50);
    } else {
        fill(255, 50, 50); textSize(80); textStyle(BOLD);
        text("FAILED", width/2, height/2 - 50);

        fill(255); textSize(45); textStyle(NORMAL);

        let displayMessage = "";
        switch (gameState.failReason) {
            case "HIT_BUS":
                displayMessage = "You were hit by a speeding bus.";
                break;
            case "EXHAUSTED":
                displayMessage = "You ran out of energy and collapsed.";
                break;
            case "LATE":
                displayMessage = "The clock hit 09:00. You are fired!";
                break;
            default:
                displayMessage = "You didn't make it to work today.";
        }
        text(displayMessage, width / 2, height / 2);
    }
    
    fill(255); textStyle(NORMAL); textSize(24);
    text("Press ENTER to return to Room", width/2, height/2 + 50);
}

function drawPauseButton() {
    push();
    let bx = width - 60;
    let by = 50;
    // 扁平化极简风格
    noFill();
    stroke(255, 150);
    strokeWeight(2);
    ellipse(bx, by, 40, 40);
    fill(255, 150);
    noStroke();
    rectMode(CENTER);
    rect(bx - 5, by, 4, 15);
    rect(bx + 5, by, 4, 15);
    pop();
}

// 统一的暂停菜单渲染 (合并后的版本)
function renderPauseOverlay() {
    push();
    fill(0, 0, 0, 150);
    rectMode(CORNER);
    rect(0, 0, width, height);

    textAlign(CENTER, CENTER);
    fill(255); textSize(80); textStyle(BOLD);
    text("PAUSED", width / 2, height / 2 - 100);

    for (let i = 0; i < PAUSE_OPTIONS.length; i++) {
        let isSelected = (i === pauseIndex);
        fill(isSelected ? 255 : 150);
        textSize(isSelected ? 40 : 30);
        textStyle(isSelected ? BOLD : NORMAL);
        let txt = isSelected ? `> ${PAUSE_OPTIONS[i]} <` : PAUSE_OPTIONS[i];
        text(txt, width / 2, height / 2 + 20 + i * 60);
    }
    pop();
}