// [Role: Core Systems Developer]

class Player {
    constructor() {
        this.resetStatsToDefault();
        this.distanceRun = 0;
        this.playTimeFrames = 0;
        
        // Visual Constants (No Glow)
        this.width = 60;
        this.height = 100;
        this.color = color(255, 200, 150);

        // Movement Boundaries (2-2-2 Layout)
        // Restricted from 500 (Left Sidewalk) to 1420 (Right Sidewalk)
        this.minX = 500 + this.width / 2;
        this.maxX = 1420 - this.width / 2;
        
        // Initial spawn in Bedroom
        this.x = 500;
        this.y = 540;
    }

    resetStatsToDefault() {
        this.health = PLAYER_DEFAULTS.baseHealth;
        this.maxHealth = PLAYER_DEFAULTS.baseHealth;
        this.healthDecay = PLAYER_DEFAULTS.healthDecay;
        this.baseSpeed = PLAYER_DEFAULTS.baseSpeed;
    }

    applyLevelStats(dayID) {
        this.resetStatsToDefault();
        this.distanceRun = 0;
        this.playTimeFrames = 0;
    }

    /**
     * CORE PHYSICS & STATE MONITORING
     */
    update() {
        if (gameState.currentState === STATE_ROOM) {
            this.handleRoomMovement();
        } 
        else if (gameState.currentState === STATE_DAY_RUN) {
            this.handleRunMovement();
            
            // Progression
            this.distanceRun += 0.5;
            this.playTimeFrames++;
            
            // --- FAIL CONDITION 1: EXHAUSTED ---
            if (this.health > 0) {
                this.health -= this.healthDecay;
            } else {
                this.triggerGameOver("EXHAUSTED");
            }

            // --- FAIL CONDITION 2: LATE (9:00 AM Threshold) ---
            // 8:30 AM to 9:00 AM is 30 mins = 1800 seconds = 108,000 frames @ 60fps
            if (this.playTimeFrames > 108000) {
                this.triggerGameOver("LATE");
            }

            // --- WIN CONDITION ---
            let targetDist = DAYS_CONFIG[currentDayID].totalDistance;
            if (this.distanceRun >= targetDist) {
                gameState.setState(STATE_WIN);
            }
        }
    }

    /**
     * RENDERING ENGINE
     */
    display() {
        if (gameState.currentState === STATE_ROOM) {
            push(); fill(this.color); stroke(0); strokeWeight(2); 
            circle(this.x, this.y, 50); pop();
        } 
        else if (gameState.currentState === STATE_DAY_RUN) {
            // Shadow
            push(); rectMode(CENTER); noStroke();
            fill(0, 50); ellipse(this.x, this.y + 45, 50, 15);
            // Character Body
            fill(this.color); rect(this.x, this.y, this.width, this.height, 8);
            pop();

            this.drawTopBar();
        }
    }

    /**
     * HUD: TOP BAR (08:30:00 START)
     */
    drawTopBar() {
        push();
        fill(20, 20, 30); noStroke(); rect(0, 0, width, 100);

        this.drawClock(width / 2, 50);
        this.drawHealthBar(50, 50);
        this.drawProgressBar(width - 450, 50);
        this.drawPauseIcon(width - 60, 50);
        pop();
    }

    drawClock(x, y) {
        let startSeconds = 8.5 * 3600; // 08:30:00
        let elapsedSeconds = this.playTimeFrames / 60;
        let totalTime = startSeconds + elapsedSeconds;

        let hh = Math.floor(totalTime / 3600);
        let mm = Math.floor((totalTime % 3600) / 60);
        let ss = Math.floor(totalTime % 60);

        textAlign(CENTER, CENTER);
        textSize(44); textStyle(BOLD); fill(255, 215, 0);
        text(`${nf(hh, 2)}:${nf(mm, 2)}:${nf(ss, 2)}`, x, y);
        
        // Visual indicator if it's getting late (near 09:00)
        if (hh >= 9) fill(255, 50, 50); 
        textSize(12); fill(150); textStyle(NORMAL);
        text("BRISTOL TIME", x, y + 32);
    }

    drawHealthBar(x, y) {
        fill(255); textSize(14); textStyle(BOLD); text("ENERGY", x, y - 22);
        fill(50); rect(x, y, 200, 24, 4);
        let pct = constrain(this.health / this.maxHealth, 0, 1);
        fill(0, 255, 100); rect(x + 2, y + 2, (200 - 4) * pct, 20, 3);
    }

    drawProgressBar(x, y) {
        fill(255); textSize(14); textStyle(BOLD); text("PROGRESS", x, y - 22);
        fill(50); rect(x, y, 300, 24, 4);
        let total = DAYS_CONFIG[currentDayID].totalDistance;
        let pct = constrain(this.distanceRun / total, 0, 1);
        fill(50, 150, 255); rect(x + 2, y + 2, (300 - 4) * pct, 20, 3);
    }

    drawPauseIcon(x, y) {
        noFill(); stroke(255); strokeWeight(2); circle(x, y, 50);
        fill(255); noStroke(); rect(x - 8, y, 6, 22); rect(x + 8, y, 6, 22);
    }

    /**
     * INTERACTION: DAMAGE & COLLISION
     * Used by: ObstacleManager
     */
    takeDamage(damage, type) {
        this.health -= damage;
        
        // --- FAIL CONDITION 3: HIT_BUS ---
        if (type === "BUS") {
            this.triggerGameOver("HIT_BUS");
        }
    }

    triggerGameOver(reason) {
        console.log(`[Player] Game Over Reason: ${reason}`);
        gameState.failReason = reason;
        gameState.setState(STATE_FAIL);
    }

    /**
     * MOVEMENT LOGIC
     */
    handleRoomMovement() {
        let s = 15;
        if (keyIsDown(87)) this.y -= s; 
        if (keyIsDown(83)) this.y += s;
        if (keyIsDown(65)) this.x -= s; 
        if (keyIsDown(68)) this.x += s;
        this.x = constrain(this.x, 25, width - 25);
        this.y = constrain(this.y, 50, height - 25);
    }

    handleRunMovement() {
        let s = this.baseSpeed;
        if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) this.x -= s;
        if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) this.x += s;
        this.x = constrain(this.x, this.minX, this.maxX);
    }
}