// [Role: Core Systems Developer]

class InventorySystem {
    constructor() {
        // Core storage for items collected during the run
        // Contributor: Level Designer (for defining item types)
        this.items = [];
        this.maxSlots = 5;
        
        // UI Visuals (Flat design, no glow)
        this.isVisible = false;
    }

    /**
     * LOGIC: ITEM ACQUISITION
     * Triggered by ObstacleManager when player collides with a "pickup" type.
     */
    addItem(itemData) {
        if (this.items.length < this.maxSlots) {
            this.items.push(itemData);
            console.log(`[Inventory] Item Added: ${itemData.name}`);
            return true;
        }
        console.log("[Inventory] Backpack full.");
        return false;
    }

    /**
     * RENDERING: BACKPACK OVERLAY
     * Contributor: UI/UX + Audio
     * Executed when gameState is STATE_BACKPACK.
     */
    display() {
        push();
        // Dark translucent overlay
        fill(0, 0, 0, 220);
        rectMode(CORNER);
        rect(0, 0, width, height);

        // Header
        textAlign(CENTER, CENTER);
        fill(255, 215, 0);
        textSize(60);
        textStyle(BOLD);
        text("BACKPACK", width / 2, 150);

        // Slots Grid
        this.drawSlots();
        
        // Instructions
        fill(200);
        textSize(20);
        text("Press 'B' to Return to Room", width / 2, height - 100);
        pop();
    }

    drawSlots() {
        let slotSize = 120;
        let startX = width / 2 - (this.maxSlots * (slotSize + 20)) / 2;
        
        for (let i = 0; i < this.maxSlots; i++) {
            let x = startX + i * (slotSize + 20);
            let y = height / 2;

            stroke(255, 215, 0);
            strokeWeight(2);
            fill(30);
            rectMode(CENTER);
            rect(x, y, slotSize, slotSize, 10);

            // If slot is occupied
            if (this.items[i]) {
                noStroke();
                fill(255);
                textAlign(CENTER, CENTER);
                textSize(14);
                text(this.items[i].name, x, y);
            }
        }
    }

    /**
     * INPUT HANDLING
     * Toggles visibility or uses items.
     */
    handleKeyPress(keyCode) {
        // Logic for using items can be implemented here by Gameplay Designer
    }
}