// [Role: UI/UX + Core Systems]
class MainMenu {
    constructor() {
        this.menuState = "HOME"; 
        this.timeWheel = new TimeWheel(DAYS_CONFIG);
        
        // 新增：主页面垂直菜单配置
        this.options = ["START", "SELECT LEVEL", "SETTINGS"];
        this.currentIndex = 0; 
    }

    display() {
        // --- BACKGROUND RENDERING ---
        if (assets.menuBg) {
            image(assets.menuBg, 0, 0, width, height);
        } else {
            background(20); 
        }

        if (this.menuState === "HOME") {
            this.drawHomeScreen();
        } else if (this.menuState === "SELECT") {
            this.drawSelectScreen();
        } else if (this.menuState === "SETTINGS") {
            this.drawSettingsScreen();
        }
    }

    drawHomeScreen() {
        push();
        // 渲染大标题 (复用你原来的位置)
        textAlign(CENTER, CENTER);
        fill(255, 215, 0); textSize(100); textStyle(BOLD);
        text("PARK STREET", width / 2, height / 2 - 120);
        fill(255); textSize(60);
        text("SURVIVOR", width / 2, height / 2 - 30);

        // --- 垂直菜单渲染 ---
        let startY = height / 2 + 100;
        let spacing = 80;
        
        for (let i = 0; i < this.options.length; i++) {
            let isSelected = (i === this.currentIndex);
            
            // 极简风格：选中时纯白加粗，未选中灰色
            fill(isSelected ? 255 : 150);
            textSize(isSelected ? 45 : 35);
            textStyle(isSelected ? BOLD : NORMAL);
            
            // 选中的视觉小标记
            let prefix = isSelected ? "• " : "";
            text(prefix + this.options[i], width / 2, startY + i * spacing);
        }
        pop();
    }

    drawSelectScreen() {
        // 这里就是你那个带有“淡淡弧线”的极简拨盘
        this.timeWheel.display();
        
        // 底部提示
        push();
        textAlign(CENTER, CENTER);
        fill(255, 150); textSize(20);
        text("PRESS ENTER TO START  /  ESC TO BACK", width / 2, height - 80);
        pop();
    }

    drawSettingsScreen() {
        push();
        textAlign(CENTER, CENTER);
        fill(255); textSize(50);
        text("SETTINGS", width / 2, height / 2 - 50);
        textSize(25); fill(150);
        text("VOLUME: 100% (STUB)\nPRESS ESC TO BACK", width / 2, height / 2 + 50);
        pop();
    }

    // 处理回车后的跳转逻辑
    executeAction() {
        let choice = this.options[this.currentIndex];
        if (choice === "START") {
            setupRun(1); // 直接开始第一天
        } else if (choice === "SELECT LEVEL") {
            this.menuState = "SELECT"; // 进入拨盘
        } else if (choice === "SETTINGS") {
            this.menuState = "SETTINGS"; // 进入设置
        }
    }

    handleKeyPress(key, keyCode) {
        if (this.menuState === "HOME") {
            // 垂直菜单上下导航
            if (keyCode === UP_ARROW || keyCode === 87) { // W or UP
                this.currentIndex = (this.currentIndex - 1 + this.options.length) % this.options.length;
            } else if (keyCode === DOWN_ARROW || keyCode === 83) { // S or DOWN
                this.currentIndex = (this.currentIndex + 1) % this.options.length;
            } else if (keyCode === ENTER || keyCode === 13) {
                this.executeAction();
            }
        } 
        else if (this.menuState === "SELECT") {
            if (keyCode === ESCAPE) this.menuState = "HOME";
            this.timeWheel.handleInput(keyCode);
            
            if (keyCode === ENTER || keyCode === 13) {
                setupRun(this.timeWheel.selectedDay);
            }
        }
        else if (this.menuState === "SETTINGS") {
            if (keyCode === ESCAPE) this.menuState = "HOME";
        }
    }

    // 如果你坚持要用鼠标点击，可以保留，但目前的垂直菜单建议主要用键盘
    handleClick(mx, my) {
        // 键盘驱动的菜单可以暂时不写复杂的坐标判断
    }
}