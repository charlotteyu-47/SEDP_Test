// [Role: Core Systems Developer]

class GameState {
    constructor() {
        // Initial state
        this.currentState = STATE_MENU;
        
        // Narrative & Logic tracking
        this.failReason = ""; // Types: "HIT_BUS", "EXHAUSTED", "LATE"
        this.isFirstTimeInRoom = true;
    }

    /**
     * STATE TRANSITION INTERFACE
     */
    setState(newState) {
    // 正确：先备份旧的，再更新当前的
    if (newState === STATE_PAUSED) {
        this.previousState = this.currentState; 
    }
    console.log(`[GameState] Switch: ${this.currentState} -> ${newState}`);
    this.currentState = newState;
    }

    /**
     * SESSION RESET
     * Resets failure flags for a new attempt.
     */
    resetFlags() {
        this.failReason = "";
    }
}