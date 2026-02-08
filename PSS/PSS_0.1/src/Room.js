// [Role: Core Systems Developer]
// Project: Park Street Survivor - Starting Bedroom Scene
// Responsibilities: Visualizing the room layout and managing the transition to gameplay.

class RoomScene {
    constructor() {
        // [Spatial Anchors]
        // Door is positioned at the top-center to align with forward movement.
        this.doorX = width / 2;
        this.doorY = 50;
        this.doorW = 200;
        this.doorH = 30;

        // Visual Interaction Flag
        this.isPlayerNearDoor = false;
    }

    /**
     * INITIALIZATION
     * Triggered every time the player returns to the room.
     */
    reset() {
        console.log("[RoomScene] Context Reset: Bedroom prepared.");
        this.isPlayerNearDoor = false;
    }

    /**
     * MAIN RENDERING LOOP
     * Executed by sketch.js when gameState is STATE_ROOM.
     */
    display() {
        // 1. Foundation: Solid floor color for high contrast
        background(45, 35, 25);

        // 2. Proximity Detection
        // Check if player is close enough to interact with the door.
        this.checkInteraction();

        // 3. Environmental Rendering
        this.drawEnvironment();
    }

    /**
     * GEOMETRY: ENVIRONMENT LAYOUT
     * Contributor: Art Integration + Build
     */
    drawEnvironment() {
        push();
        rectMode(CENTER);
        noStroke();

        // --- A. THE BED (Left Side) ---
        // Represents the spawn area and narrative starting point.
        fill(70, 70, 140); 
        rect(300, height / 2, 160, 280, 10); // Main Frame
        fill(240); 
        rect(300, height / 2 - 100, 140, 60, 5); // Pillow (Flat Color)

        // --- B. THE DESK (Right Side) ---
        // Future interaction point for Narrative Designer.
        fill(90, 55, 30); 
        rect(width - 300, height / 2, 140, 220, 5); // Desk Surface
        fill(20); 
        rect(width - 300, height / 2, 110, 80); // Laptop Placeholder

        // --- C. THE EXIT DOOR (Top Center) ---
        // The trigger point for state transition.
        if (this.isPlayerNearDoor) {
            stroke(255, 215, 0); // Solid Gold highlight
            strokeWeight(5);
        } else {
            fill(20);
            noStroke();
        }
        rect(this.doorX, this.doorY, this.doorW, this.doorH);

        // --- D. INTERACTION PROMPT ---
        // UI/UX instruction for the player.
        if (this.isPlayerNearDoor) {
            noStroke();
            fill(255, 215, 0);
            textAlign(CENTER);
            textSize(28);
            textStyle(BOLD);
            text("PRESS ENTER TO LEAVE", width / 2, 130);
        }
        pop();
    }

    /**
     * LOGIC: INTERACTION SENSING
     * Measures distance between player entity and scene objects.
     */
    checkInteraction() {
        if (typeof player !== 'undefined') {
            let distance = dist(player.x, player.y, this.doorX, this.doorY);
            // Threshold for interaction: 150 pixels
            this.isPlayerNearDoor = (distance < 150);
        }
    }

    /**
     * INPUT HANDLING
     * Triggered by sketch.js when a key event occurs in STATE_ROOM.
     */
    handleKeyPress(keyCode) {
        // Confirm transition if player is near the exit
        if (this.isPlayerNearDoor && (keyCode === ENTER || keyCode === 13)) {
            console.log("[RoomScene] Transitioning to: STATE_DAY_RUN");
            
            // Reposition player for the running phase
            player.x = width / 2;
            player.y = height - 200;
            
            // Switch Game State
            gameState.setState(STATE_DAY_RUN);
        }
    }
}