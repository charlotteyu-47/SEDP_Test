// [Role: Core Systems Developer]
// Project: Park Street Survivor - Global Configuration
// Goal: Centralized constants for all departments.

const GLOBAL_CONFIG = {
    resolutionW: 1920,
    resolutionH: 1080,
    scrollSpeed: 12, // Base world speed
    
    // The 2-2-2 Layout Infrastructure (Strictly follow your requirement)
    layout: {
        leftSceneryEnd: 500,     // Scenery 1
        leftSidewalkEnd: 700,    // Sidewalk 1
        rightLaneEnd: 1220,      // Road (4 lanes inside 700-1220)
        rightSidewalkEnd: 1420   // Sidewalk 2 & Scenery 2
    },
    
    // Lane Centers for spawning and movement
    lanes: {
        lane1: 765,
        lane2: 895,
        lane3: 1025,
        lane4: 1155
    }
};

const PLAYER_DEFAULTS = {
    baseHealth: 100,
    healthDecay: 0.05,
    baseSpeed: 10
};

// Game States (Engine Logic)
const STATE_MENU = 0;
const STATE_LEVEL_SELECT = 1;
const STATE_SETTINGS = 2;
const STATE_ROOM = 3;
const STATE_PAUSED = 4;
const STATE_DAY_RUN = 5;
const STATE_FAIL = 6;
const STATE_WIN = 7;

// Level Data Placeholder
// Contributor: Level Designer
const DAYS_CONFIG = {
    1: {
        description: "Fresh Start",
        totalDistance: 5000,
        realTimeLimit: 120, // 2 minutes
        obstacleSpawnInterval: 60
    },
    2: {
        description: "Running Late",
        totalDistance: 8000,
        realTimeLimit: 90,
        obstacleSpawnInterval: 45
    }
};