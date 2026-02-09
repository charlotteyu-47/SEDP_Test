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
        
        // --- 弧形控制参数 ---
        this.radius = 1200;      // 半径加大，让弧线更平缓高级
        this.angleSpacing = 0.25; // 文字之间的间距
        this.dayNames = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
    }

    display() {
        this.currentIndex = lerp(this.currentIndex, this.targetIndex, 0.12);
        
        let cx = width / 2;
        let cy = height * 1.5; // 圆心压得更低，弧度更优雅

        // 1. 绘制背景淡淡的弧线
        this.drawBackgroundArc(cx, cy);

        // 2. 绘制文字
        for (let i = 0; i < this.totalDays; i++) {
            let diff = i - this.currentIndex;
            let angle = diff * this.angleSpacing;

            // 计算文字在弧线上的位置
            let x = cx + sin(angle) * this.radius;
            let y = cy - cos(angle) * this.radius;

            // 基于距离中心的偏移量计算视觉属性
            let distFromCenter = Math.abs(diff);
            let scaleFactor = map(distFromCenter, 0, 1.2, 1.5, 0.6); // 中心变大
            let alpha = map(distFromCenter, 0, 1.5, 255, 0);         // 两侧淡出
            
            this.drawTextItem(x, y, i + 1, angle, scaleFactor, alpha);
        }
    }

    // 绘制那条“淡淡的弧线”
    drawBackgroundArc(cx, cy) {
        push();
        noFill();
        stroke(255, 30); // 极低的透明度，产生“淡淡”的感觉
        strokeWeight(1);
        // 画一个巨大的圆的一部分
        ellipse(cx, cy, this.radius * 2, this.radius * 2);
        pop();
    }

    drawTextItem(x, y, dayID, angle, s, a) {
        push();
        translate(x, y);
        
        // 核心视觉：文字随弧度旋转
        // 让文字垂直于圆心连线，产生“贴在圆周上”的效果
        rotate(angle); 
        
        scale(constrain(s, 0.5, 2.0));
        textAlign(CENTER, CENTER);

        let isSelected = (dayID === this.selectedDay);
        
        // 渲染星期 (如 MONDAY)
        fill(isSelected ? 255 : 180, a); // 选中的纯白，未选中的灰色
        textStyle(isSelected ? BOLD : NORMAL);
        textSize(40);
        text(this.dayNames[dayID - 1], 0, 0);

        // 渲染 Day 数字 (放在主文字上方，更小一点)
        if (isSelected) {
            fill(255, 215, 0, a); // 只有选中的才显示金色 Day X
            textSize(14);
            text(`DAY ${dayID}`, 0, -45);
        }
        
        pop();
    }

    handleInput(keyCode) {
        // A / D 或 Left / Right 切换
        if ((keyCode === LEFT_ARROW || keyCode === 65) && this.selectedDay > 1) {
            this.selectedDay--;
            this.targetIndex--;
        } else if ((keyCode === RIGHT_ARROW || keyCode === 68) && this.selectedDay < this.totalDays) {
            this.selectedDay++;
            this.targetIndex++;
        }
    }
}