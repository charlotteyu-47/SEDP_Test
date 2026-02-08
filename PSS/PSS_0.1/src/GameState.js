// [Role: Core Systems Developer]
// Project: Park Street Survivor - Game State Controller
// Responsibility: Managing global transitions and session-specific flags.

class GameState {
    constructor() {
        // Initial state on boot
        this.currentState = STATE_MENU;
        
        // Narrative & Logic tracking
        this.failReason = ""; // Types: "HIT_BUS", "EXHAUSTED", "LATE"
        this.isFirstTimeInRoom = true;
    }

    /**
     * STATE TRANSITION INTERFACE
     * Used by: All departments to trigger scene changes.
     */
    setState(newState) {
        console.log(`[GameState] Logic Switch: ${this.currentState} -> ${newState}`);
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