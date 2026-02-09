// [Role: Level Systems Developer]

class ObstacleManager {
    constructor() {
        this.obstacles = [];
        this.spawnTimer = 0;
    }

    /**
     * UPDATE LOOP
     * Logic is disabled to prevent obstacle generation as requested.
     */
    update(scrollSpeed, player) {
        // [Logic Disabled] No obstacles will spawn or move.
        // This keeps the road clean for layout verification.
        this.obstacles = []; 
    }

    /**
     * DISPLAY LOOP
     * Renders nothing but remains callable by sketch.js.
     */
    display() {
        // No rendering logic needed for empty road.
    }

    /**
     * COLLISION INTERFACE
     * Kept for future integration by Level Designer.
     */
    checkCollision(player, obs) {
        return false;
    }
}