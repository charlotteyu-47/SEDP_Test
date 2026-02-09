// [Role: Core Systems Developer]
// Project: Park Street Survivor - Precision 2-2-2 Road System
// Responsibilities: Implementation of exact layout coordinates and smooth scrolling.

class Environment {
    constructor() {
        // Normalized scroll position to prevent floating-point jitter
        this.scrollPos = 0;
        
        // [STRICT LAYOUT CONFIGURATION]
        // Symmetry: 500 (Scenery) | 200 (Sidewalk) | 260 (Lane) | 260 (Lane) | 200 (Sidewalk) | 500 (Scenery)
        this.layout = {
            sceneryW: 500,
            sidewalkW: 200,
            laneW: 260,
            roadStart: 700, // 500 + 200
            roadEnd: 1220   // 700 + (260 * 2)
        };

        // Flat Visual Palette (No Glow)
        this.colors = {
            scenery: color(40, 70, 40),    // Deep Grass Green
            sidewalk: color(160, 160, 165), // Concrete Grey
            road: color(45, 45, 50),       // Asphalt Dark Grey
            marking: color(255)            // Pure White
        };
    }

    /**
     * LOGIC: MOVEMENT CALCULATION
     * Syncs background speed with the global scroll speed.
     */
    update(speed) {
        this.scrollPos += speed;
        // Loop the position based on dash + gap length (60 + 60 = 120)
        if (this.scrollPos > 120) {
            this.scrollPos -= 120;
        }
    }

    /**
     * RENDERING: SCROLL
     * [ASSET NEEDED]
     */
    display() {
        noStroke();
        rectMode(CORNER);

        // 1. LAYER: SCENERY (The outer "2" - 500px each)
        fill(this.colors.scenery);
        rect(0, 0, 500, height); 
        rect(1420, 0, 500, height);

        // 2. LAYER: SIDEWALKS (The middle "2" - 200px each)
        fill(this.colors.sidewalk);
        rect(500, 0, 200, height); 
        rect(1220, 0, 200, height);

        // 3. LAYER: ROAD (The inner "2" - 260px lanes, 520px total)
        fill(this.colors.road);
        rect(700, 0, 520, height);

        // 4. LAYER: CENTER LINE DIVIDER
        this.drawCenterLine();
    }

    /**
     * GEOMETRY: CENTER LINE
     * Placed exactly at X=960 to separate the two 260px lanes.
     */
    drawCenterLine() {
        push();
        stroke(this.colors.marking);
        strokeWeight(6); 
        
        let centerX = 960; // Exact center of the 1920px canvas
        let segment = 120; // Dash (60) + Gap (60)

        for (let y = this.scrollPos - segment; y < height; y += segment) {
            line(centerX, y, centerX, y + 60);
        }
        pop();
    }
}