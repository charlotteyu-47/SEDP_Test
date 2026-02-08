// [Role: UI/UX + Audio]
// Project: Park Street Survivor - Main Menu Interface
// Responsibility: Screen orchestration for Home and Level Selection.

class MainMenu {
constructor() {
        this.menuState = "HOME"; 
        this.timeWheel = new TimeWheel(DAYS_CONFIG);
        this.startBtn = new UIButton(width / 2, height / 2 + 100, 280, 70, "START JOURNEY", () => {
            this.menuState = "SELECT";
        });
    }

    display() {
        // --- BACKGROUND RENDERING ---
        // Contributor: Art Integration + Build
        if (assets.menuBg) {
            // Draw the background image to fill the canvas
            image(assets.menuBg, 0, 0, width, height);
        } else {
            // Fallback color if image is still loading
            background(20); 
        }

        if (this.menuState === "HOME") {
            this.drawHomeScreen();
        } else {
            this.drawSelectScreen();
        }
    }

    drawHomeScreen() {
        push();
        textAlign(CENTER, CENTER);
        // Semi-transparent overlay to make text readable over cbg.png
        fill(0, 0, 0, 100);
        rectMode(CENTER);
        rect(width / 2, height / 2 - 80, 800, 300, 20);

        // Title
        fill(255, 215, 0); textSize(100); textStyle(BOLD);
        text("PARK STREET", width / 2, height / 2 - 120);
        fill(255); textSize(60);
        text("SURVIVOR", width / 2, height / 2 - 30);
        
        this.startBtn.display();
        pop();
    }

    drawSelectScreen() {
        this.timeWheel.display();
        
        // Visual indicator for START
        let btnY = height - 120;
        fill(200, 0, 0); stroke(255); strokeWeight(3);
        rectMode(CENTER);
        rect(width / 2, btnY, 200, 60, 30);
        fill(255); noStroke(); textAlign(CENTER, CENTER);
        textSize(24); text("PRESS ENTER", width / 2, btnY);
    }

    handleClick(mx, my) {
        if (this.menuState === "HOME") {
            this.startBtn.handleClick(mx, my);
        }
    }

    handleKeyPress(key, keyCode) {
        if (this.menuState === "SELECT") {
            if (keyCode === ESCAPE) this.menuState = "HOME";
            this.timeWheel.handleInput(keyCode);
            
            if (keyCode === ENTER || keyCode === 13) {
                setupRun(this.timeWheel.selectedDay);
            }
        }
    }
}