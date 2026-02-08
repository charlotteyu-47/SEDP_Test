// [Role: UI/UX + Audio]
// Project: Park Street Survivor - Reusable UI Components
// Responsibility: Interactive elements for menus and selection screens.

class UIButton {
    constructor(x, y, w, h, label, onClick) {
        this.x = x; this.y = y;
        this.w = w; this.h = h;
        this.label = label;
        this.onClick = onClick;
        this.isHovered = false;
    }

    display() {
        // Mouse hover detection logic
        this.isHovered = (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2 &&
                          mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2);

        push();
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        
        // Visual logic - No glow, high contrast
        if (this.isHovered) {
            fill(255, 215, 0); // Gold
            stroke(255);
            cursor(HAND);
        } else {
            fill(0, 0, 0, 180); // Semi-transparent black
            stroke(255, 215, 0);
            cursor(ARROW);
        }

        strokeWeight(3);
        rect(this.x, this.y, this.w, this.h, 10);

        // Text rendering
        noStroke();
        fill(this.isHovered ? 0 : 255);
        textSize(22); textStyle(BOLD);
        text(this.label, this.x, this.y);
        pop();
    }

    handleClick(mx, my) {
        if (this.isHovered && this.onClick) {
            this.onClick();
        }
    }
}

class TimeWheel {
    constructor(config) {
        this.config = config;
        this.selectedDay = 1;
        this.totalDays = Object.keys(config).length;
        this.targetIndex = 0;
        this.currentIndex = 0;
    }

    display() {
        this.currentIndex = lerp(this.currentIndex, this.targetIndex, 0.15);
        let cx = width / 2;
        let cy = height / 2;
        let spacing = 450;

        for (let i = 0; i < this.totalDays; i++) {
            let dayID = i + 1;
            let diff = i - this.currentIndex;
            let scaleFactor = map(Math.abs(diff), 0, 1, 1.2, 0.7);
            let alpha = map(Math.abs(diff), 0, 1, 255, 100);

            this.drawCard(cx + diff * spacing, cy, dayID, scaleFactor, alpha);
        }
    }

    drawCard(x, y, dayID, s, a) {
        push();
        translate(x, y);
        scale(constrain(s, 0.5, 1.5));
        rectMode(CENTER);
        
        let isSelected = (dayID === this.selectedDay);
        stroke(255, 215, 0, a);
        strokeWeight(isSelected ? 5 : 2);
        fill(0, 0, 0, a);
        rect(0, 0, 300, 400, 20);

        noStroke();
        fill(255, 215, 0, a);
        textSize(40); textStyle(BOLD);
        text(`DAY ${dayID}`, 0, -50);
        
        fill(255, a);
        textSize(18); textStyle(NORMAL);
        let desc = this.config[dayID].description;
        text(desc, 0, 20);
        pop();
    }

    handleInput(keyCode) {
        if (keyCode === LEFT_ARROW || keyCode === 65) {
            if (this.selectedDay > 1) {
                this.selectedDay--;
                this.targetIndex--;
            }
        } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
            if (this.selectedDay < this.totalDays) {
                this.selectedDay++;
                this.targetIndex++;
            }
        }
    }
}