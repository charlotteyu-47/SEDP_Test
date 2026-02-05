/**
 * PARK STREET SURVIVOR 8-bit - v10.0 (Full Tutorial)
 * ==================================================
 * 教程全面升级：
 * 1. [Full Coverage] 教程涵盖所有 8 种实体：
 * - 躲避：Bus, Car, Rider, Homeless, Promoter
 * - 拾取：Coffee, Tea, Empty Scooter
 * 2. [Scripted Waves] 教程不再是单一生成，而是分波次生成，
 * 确保玩家逐一体验每种机制。
 * 3. [Visuals] 保持 v9.0 的像素画风和 v8.1 的物理尺寸修正。
 */

// --- 资源管理 ---
let assets = {};
let pixelFont;

function preload() {
  try { pixelFont = 'Press Start 2P'; } catch(e) { pixelFont = 'monospace'; }
}

// --- 视觉常量 ---
const FOCAL_LENGTH = 320;
const HORIZON_Y = 280; 
const CAM_HEIGHT = 260; 
const LANE_WIDTH = 110; 
const SIDEWALK_START_X = LANE_WIDTH * 2;

const COLORS = {
  skyTop: '#66CCFF', skyBottom: '#FFCCFF', 
  roadLine: '#FFFFFF', sidewalk: '#E0E0E0',
  shadow: '#00000050',
  uiBg: '#000000DD', uiBorder: '#FFFFFF',
  hpBarBg: '#444444',
  neonGreen: '#55FF55', neonRed: '#FF5555', gold: '#FFFF55'
};

const TARGET_DISTANCE = 1000; 
const SPAWN_DISTANCE = 3000; 

let demoState = {
  gameState: 'START', stamina: 100, distance: 0, worldZOffset: 0,
  isBlinded: false, flyerHealth: 8, 
  isRidingScooter: false, scooterTimer: 0, hasShield: false,
  isDrunk: false, drunkTimer: 0,
  shakeTimer: 0, damageFlash: 0, difficultyMultiplier: 1.0, paperBall: null, particles: [],
  
  // 教程状态机
  enableTutorial: false, 
  tutorialStep: 0,       
  tutorialTimer: 0,
  tutorialText: "" 
};

let player = { x: 0, w: 40, h: 80, speedX: 14, lean: 0 }; 
let entities = [];
let decorations = [];

function setup() {
  createCanvas(800, 800);
  noSmooth(); 
  textFont(pixelFont);
  generatePixelAssets();
  initGame();
  demoState.gameState = 'START';
}

function draw() {
  image(assets.bg, 0, 0, width, height);
  
  push();
  if (demoState.shakeTimer > 0) {
    translate(floor(random(-5, 5)), floor(random(-5, 5))); demoState.shakeTimer--;
  }

  drawDynamicEnvironment(); 
  
  if (demoState.gameState === 'PLAYING') {
    if (demoState.enableTutorial) {
      updateTutorialLogic(); 
    } else {
      updateGameLogic();     
    }
    
    drawGame3D();
    drawPixelHUD();
    
    if (demoState.enableTutorial) drawTutorialOverlay();
    
  } else {
    drawGame3D(); 
    if (demoState.gameState === 'START') drawPixelUI_Start();
    else drawPixelUI_End();
  }
  
  if (demoState.isBlinded && demoState.gameState === 'PLAYING') drawPixelBlindOverlay();
  if (demoState.damageFlash > 0) {
    noStroke(); fill(255, 50, 0, map(demoState.damageFlash, 0, 10, 0, 60));
    rect(0,0,width,height); demoState.damageFlash--;
  }
  
  pop();
}

// ==========================================
// 【核心】全要素教程逻辑
// ==========================================
function updateTutorialLogic() {
  updatePlayerMovement();
  updateEnvironmentScroll(18); // 恒定低速

  // 状态机
  // Step 0: 移动教学
  if (demoState.tutorialStep === 0) {
    demoState.tutorialText = "PRESS [A] / [D] TO MOVE";
    if (keyIsDown(65) || keyIsDown(68)) {
      demoState.tutorialTimer++;
      if (demoState.tutorialTimer > 60) { 
        demoState.tutorialStep = 1; demoState.tutorialTimer = 0;
        // 生成交通工具：Bus (Lane 1), Car (Lane 2)
        spawnScriptedEntity('BUS', -LANE_WIDTH * 0.5, 2000);
        spawnScriptedEntity('CAR', LANE_WIDTH * 0.5, 2800); // 错开一点
      }
    }
  }
  // Step 1: 躲避车辆
  else if (demoState.tutorialStep === 1) {
    demoState.tutorialText = "DODGE TRAFFIC (BUS & CAR)!";
    if (entities.length === 0) { // 等都过去了
       demoState.tutorialStep = 2;
       // 生成补给：Coffee (Lane 0), Tea (Lane 3)
       spawnScriptedEntity('COFFEE', -LANE_WIDTH * 1.5, 2000);
       spawnScriptedEntity('TEA', LANE_WIDTH * 1.5, 2500);
    }
  }
  // Step 2: 拾取饮料
  else if (demoState.tutorialStep === 2) {
    demoState.tutorialText = "GET DRINKS FOR ENERGY!";
    if (entities.length === 0) {
       demoState.tutorialStep = 3;
       // 生成讨厌的人：Homeless (Lane 0), Promoter (Lane 3)
       spawnScriptedEntity('HOMELESS', -LANE_WIDTH * 1.5, 2000);
       spawnScriptedEntity('PROMOTER', LANE_WIDTH * 1.5, 2800);
    }
  }
  // Step 3: 躲避行人
  else if (demoState.tutorialStep === 3) {
    demoState.tutorialText = "AVOID PEOPLE! (DRUNK/BLIND)";
    if (entities.length === 0) {
       demoState.tutorialStep = 4;
       // 生成骑手 (Lane 1) - 注意 Rider 需要 startX
       spawnScriptedEntity('RIDER', -LANE_WIDTH * 0.5, 2000);
    }
  }
  // Step 4: 躲避骑手
  else if (demoState.tutorialStep === 4) {
    demoState.tutorialText = "WATCH OUT! RIDERS WEAVE!";
    if (entities.length === 0) {
       demoState.tutorialStep = 5;
       // 生成滑板车 (Lane 2)
       spawnScriptedEntity('EMPTY_SCOOTER', LANE_WIDTH * 0.5, 2000);
    }
  }
  // Step 5: 获取载具
  else if (demoState.tutorialStep === 5) {
    demoState.tutorialText = "GET THE SCOOTER FOR SHIELD!";
    if (entities.length === 0) {
       // 无论吃到没吃到，都结束
       demoState.tutorialTimer++;
       if (demoState.tutorialTimer > 60) endTutorial();
    }
  }

  updateEntities(18); 
  updateParticles();
}

function spawnScriptedEntity(type, x, z) {
  let e = { type: type, x: x, z: z, w: 0, h: 0, active: true, startX: x };
  // 设置尺寸
  if (type === 'BUS') { e.w = 100; e.h = 140; }
  else if (type === 'CAR') { e.w = 80; e.h = 60; }
  else if (type === 'RIDER') { e.w = 60; e.h = 100; }
  else if (type === 'EMPTY_SCOOTER') { e.w = 50; e.h = 80; }
  else if (type === 'HOMELESS') { e.w = 60; e.h = 60; }
  else if (type === 'PROMOTER') { e.w = 60; e.h = 80; }
  // 修正咖啡奶茶大小
  else if (type === 'COFFEE' || type === 'TEA') { e.w = 30; e.h = 45; }
  entities.push(e);
}

function drawTutorialOverlay() {
  drawPixelBox(width/2 - 250, 150, 500, 60, COLORS.uiBg, COLORS.neonGreen);
  fill(255); textAlign(CENTER, CENTER); textSize(15);
  text(demoState.tutorialText, width/2, 180);
}

function endTutorial() {
  demoState.enableTutorial = false;
  demoState.stamina = 100; 
  demoState.distance = 0; // 重置距离开始正式游戏
  // 生成一波随机敌人开始游戏
  for(let i=0; i<8; i++) { 
     let e = { type: 'CAR', x: 0, z: -1000, w: 50, h: 50, active: false };
     entities.push(e); 
     respawnEntity(e); 
     e.z = SPAWN_DISTANCE + i * 400; 
  }
}

// 正常游戏逻辑
function updateGameLogic() {
  updatePlayerMovement();
  
  let baseSpeed = 24; 
  if (demoState.isRidingScooter) { baseSpeed = 40; demoState.scooterTimer--; if(demoState.scooterTimer <= 0) { demoState.isRidingScooter = false; demoState.hasShield = false; } }
  demoState.difficultyMultiplier = 1 + (demoState.distance / 2000); 
  let currentSpeed = baseSpeed * demoState.difficultyMultiplier;
  
  updateEnvironmentScroll(currentSpeed);
  
  demoState.stamina -= 0.06; 
  if (demoState.stamina <= 0) demoState.gameState = 'GAMEOVER';
  if (demoState.distance >= TARGET_DISTANCE) demoState.gameState = 'WIN';
  
  updateEntities(currentSpeed, true); 
  updateParticles();
}

function updatePlayerMovement() {
  player.lean = lerp(player.lean, 0, 0.2);
  let finalSpeed = player.speedX; if (demoState.isRidingScooter) finalSpeed *= 1.3;
  let dir = 1; if (demoState.isDrunk) { dir = -1; demoState.drunkTimer--; if (demoState.drunkTimer <= 0) demoState.isDrunk = false; }
  if (keyIsDown(65)) { player.x -= finalSpeed * dir; player.lean = -15 * dir; }
  if (keyIsDown(68)) { player.x += finalSpeed * dir; player.lean = 15 * dir; }
  let limit = LANE_WIDTH * 2 + 20; player.x = constrain(player.x, -limit, limit);
}

function updateEnvironmentScroll(speed) {
  demoState.distance += speed / 100; demoState.worldZOffset -= speed; if (demoState.worldZOffset < -320) demoState.worldZOffset += 320; 
}

function updateEntities(speed, enableRespawn = false) {
  for (let i = entities.length - 1; i >= 0; i--) {
    let e = entities[i]; 
    let perspectiveSpeedMap = map(e.z, 0, SPAWN_DISTANCE, 1, 0.9); 
    e.z -= speed * perspectiveSpeedMap;
    if (e.type === 'RIDER') e.x = e.startX + Math.sin(frameCount * 0.05 + e.z * 0.005) * (LANE_WIDTH * 0.6); 
    if (e.active && e.z < 50 && e.z > -50) { if (abs(e.x - player.x) < (player.w/2 + e.w*0.4)) handleCollision(e); }
    
    if (e.z < -300) {
      if (enableRespawn) respawnEntity(e);
      else entities.splice(i, 1);
    }
  }
  for (let i = decorations.length - 1; i >= 0; i--) { let d = decorations[i]; d.z -= speed; if (d.z < -300) respawnDecoration(d); }
  
  if (demoState.paperBall) { demoState.paperBall.z += 50; for (let e of entities) { if (e.active && e.z > 0 && e.z < demoState.paperBall.z && abs(e.x - player.x) < e.w + 30) { if(['CAR','RIDER','BUS','PROMOTER','HOMELESS'].includes(e.type)) { e.active = false; demoState.paperBall = null; createExplosion(e.x, 0, e.z); break; } } } if (demoState.paperBall && demoState.paperBall.z > 2000) demoState.paperBall = null; }
}

// ==========================================
// 键盘输入 (Start Menu 逻辑)
// ==========================================
function keyPressed() {
  if (demoState.gameState === 'START') {
    if (key === 't' || key === 'T') {
      initGame();
      demoState.gameState = 'PLAYING';
      demoState.enableTutorial = true;
      demoState.tutorialStep = 0;
      demoState.tutorialTimer = 0;
      entities = []; 
    } else if (key === ' ' || key === 'Enter') {
      initGame();
      demoState.gameState = 'PLAYING';
      demoState.enableTutorial = false; 
    }
  } 
  else if (demoState.gameState !== 'PLAYING' && (key === ' ' || key === 'Enter')) {
      initGame(); demoState.gameState = 'START';
  }
  else if (demoState.isBlinded && key === ' ') {
    demoState.flyerHealth--; if (demoState.flyerHealth <= 0) { demoState.isBlinded = false; demoState.paperBall = { z: 0, active: true }; } 
  }
}

// ==========================================
// 辅助函数 (保持 v9.0/v8.1)
// ==========================================
function drawPixelBlock(g, x, y, w, h, c) { g.fill(c); g.stroke(0); g.strokeWeight(2); g.rect(x, y, w, h); }
function drawPixelBox(x, y, w, h, bgC, borderC) { fill(borderC); noStroke(); rect(x, y, w, h); fill(bgC); rect(x+4, y+4, w-8, h-8); }
function project(x, y, z) { let scale = FOCAL_LENGTH / (FOCAL_LENGTH + z); let sx = width/2 + x * scale; let sy = HORIZON_Y + y * scale; return { x: sx, y: sy, scale: scale }; }
function generatePixelAssets() { 
  let bg = createGraphics(800, 800); bg.noSmooth(); for(let y=0; y<=HORIZON_Y; y+=4){ let inter = map(y, 0, HORIZON_Y, 0, 1); let c = lerpColor(color(COLORS.skyTop), color(COLORS.skyBottom), inter); bg.fill(c); bg.noStroke(); bg.rect(0, y, 800, 4); } drawPixelBlock(bg, 360, HORIZON_Y-140, 80, 140, '#8B4513'); drawPixelBlock(bg, 380, HORIZON_Y-180, 40, 40, '#A0522D'); drawPixelBlock(bg, 395, HORIZON_Y-110, 10, 10, '#FFFF55'); bg.fill(COLORS.sidewalk); bg.noStroke(); bg.rect(0, HORIZON_Y, 800, 800-HORIZON_Y); assets.bg = bg;
  let bus = createGraphics(100, 140); bus.noSmooth(); drawPixelBlock(bus, 0, 0, 100, 140, '#FF3333'); drawPixelBlock(bus, 10, 20, 80, 40, '#66CCFF'); drawPixelBlock(bus, 10, 70, 80, 50, '#66CCFF'); bus.fill(0); bus.noStroke(); bus.textSize(10); bus.textAlign(CENTER); bus.text("U1 BUS", 50, 60); drawPixelBlock(bus, 5, 125, 20, 10, '#FFFF55'); drawPixelBlock(bus, 75, 125, 20, 10, '#FFFF55'); assets.bus = bus;
  let car = createGraphics(80, 60); car.noSmooth(); drawPixelBlock(car, 0, 20, 80, 40, '#3366FF'); drawPixelBlock(car, 10, 0, 60, 20, '#66CCFF'); drawPixelBlock(car, 5, 45, 15, 10, '#FF3333'); drawPixelBlock(car, 60, 45, 15, 10, '#FF3333'); assets.car = car;
  let rider = createGraphics(60, 100); rider.noSmooth(); drawPixelBlock(rider, 15, 0, 30, 30, '#FFFF55'); drawPixelBlock(rider, 10, 30, 40, 50, '#33CC33'); drawPixelBlock(rider, 0, 80, 60, 20, '#CCCCCC'); assets.rider = rider;
  // 小咖啡
  let coffee = createGraphics(30, 45); coffee.noSmooth(); drawPixelBlock(coffee, 3, 0, 24, 8, '#FFFFFF'); drawPixelBlock(coffee, 0, 8, 30, 37, '#996633'); coffee.fill('#FF3333'); coffee.noStroke(); coffee.rect(10, 20, 10, 10); assets.coffee = coffee;
  // 小奶茶
  let tea = createGraphics(30, 45); tea.noSmooth(); drawPixelBlock(tea, 3, 0, 24, 5, '#FFCCFF'); drawPixelBlock(tea, 0, 5, 30, 40, '#FFDD99'); tea.fill(0); tea.noStroke(); tea.rect(8, 30, 4, 4); tea.rect(18, 30, 4, 4); tea.rect(13, 36, 4, 4); assets.tea = tea;
  let pro = createGraphics(60, 80); pro.noSmooth(); drawPixelBlock(pro, 10, 0, 40, 40, '#FF99CC'); drawPixelBlock(pro, 15, 40, 30, 40, '#FF6699'); drawPixelBlock(pro, 40, 50, 15, 20, '#FFFFFF'); assets.promoter = pro;
  let home = createGraphics(60, 60); home.noSmooth(); drawPixelBlock(home, 0, 40, 60, 20, '#C2B280'); drawPixelBlock(home, 15, 10, 30, 30, '#8B4513'); drawPixelBlock(home, 20, 0, 20, 15, '#555555'); assets.homeless = home;
  let sco = createGraphics(50, 80); sco.noSmooth(); drawPixelBlock(sco, 20, 0, 10, 70, '#FF7F50'); drawPixelBlock(sco, 5, 70, 40, 10, '#FF7F50'); drawPixelBlock(sco, 10, 0, 30, 5, '#FF7F50'); assets.scooter = sco;
  let tree = createGraphics(80, 120); tree.noSmooth(); drawPixelBlock(tree, 30, 80, 20, 40, '#8B4513'); drawPixelBlock(tree, 0, 0, 80, 80, '#228B22'); drawPixelBlock(tree, 10, 10, 60, 60, '#32CD32'); assets.tree = tree;
}
function drawDynamicEnvironment() { stroke(200); strokeWeight(4); let pL_far = project(-SIDEWALK_START_X, CAM_HEIGHT, 3000); let pL_near = project(-SIDEWALK_START_X, CAM_HEIGHT, 0); line(pL_far.x, pL_far.y, pL_near.x, pL_near.y); let pR_far = project(SIDEWALK_START_X, CAM_HEIGHT, 3000); let pR_near = project(SIDEWALK_START_X, CAM_HEIGHT, 0); line(pR_far.x, pR_far.y, pR_near.x, pR_near.y); noStroke(); fill(COLORS.sidewalk); for (let z = demoState.worldZOffset; z < 3000; z+=320) { if(z < 10) continue; let pL1 = project(-SIDEWALK_START_X, CAM_HEIGHT, z); let pL2 = project(-SIDEWALK_START_X - 150, CAM_HEIGHT, z); rect(pL2.x, pL1.y, pL1.x - pL2.x, 8 * pL1.scale); let pR1 = project(SIDEWALK_START_X, CAM_HEIGHT, z); let pR2 = project(SIDEWALK_START_X + 150, CAM_HEIGHT, z); rect(pR1.x, pR1.y, pR2.x - pR1.x, 8 * pR1.scale); } stroke(COLORS.roadLine); strokeWeight(4); for (let z = demoState.worldZOffset; z < 3000; z+=320) { if(z<10) continue; let p1 = project(0, CAM_HEIGHT, z); let p2 = project(0, CAM_HEIGHT, z+160); line(p1.x, p1.y, p2.x, p2.y); } drawLaneLine(-LANE_WIDTH); drawLaneLine(LANE_WIDTH); }
function drawLaneLine(worldX) { stroke(COLORS.roadLine); strokeWeight(2); for (let z = demoState.worldZOffset; z < 3000; z+=320) { if(z<10) continue; let p1 = project(worldX, CAM_HEIGHT, z); let p2 = project(worldX, CAM_HEIGHT, z+160); line(p1.x, p1.y, p2.x, p2.y); } }
function drawGame3D() { decorations.sort((a, b) => b.z - a.z); for (let d of decorations) drawEntity3D(d); entities.sort((a, b) => b.z - a.z); for (let e of entities) { if(e.active) drawEntity3D(e); } if (demoState.paperBall) { let p = project(player.x, CAM_HEIGHT - 60, demoState.paperBall.z); fill(255); noStroke(); rect(p.x-10*p.scale, p.y-10*p.scale, 20*p.scale, 20*p.scale); } for(let p of demoState.particles) { let proj = project(p.x, p.y, p.z); fill(p.c); noStroke(); rect(proj.x, proj.y, p.size * proj.scale, p.size * proj.scale); } drawPlayer3D(); }
function drawEntity3D(e) { let worldY = CAM_HEIGHT; let screenPos = project(e.x, worldY, e.z); let scale = screenPos.scale; let sw = e.w * scale; let sh = e.h * scale; fill(COLORS.shadow); noStroke(); rect(screenPos.x - sw/2, screenPos.y-5*scale, sw, 10*scale); let img = null; switch(e.type) { case 'BUS': img = assets.bus; break; case 'CAR': img = assets.car; break; case 'RIDER': img = assets.rider; break; case 'EMPTY_SCOOTER': img = assets.scooter; break; case 'COFFEE': img = assets.coffee; break; case 'TEA': img = assets.tea; break; case 'HOMELESS': img = assets.homeless; break; case 'PROMOTER': img = assets.promoter; break; case 'TREE': img = assets.tree; break; } if (img) { let floatY = 0; if(['COFFEE','TEA','EMPTY_SCOOTER'].includes(e.type)) floatY = sin(frameCount * 0.1) * 8 * scale; image(img, screenPos.x - sw/2, screenPos.y - sh - floatY, sw, sh); if(e.type === 'EMPTY_SCOOTER') { textAlign(CENTER); textSize(10*scale); fill(COLORS.gold); text("GET!", screenPos.x, screenPos.y - sh - 15*scale); } } }
function drawPlayer3D() { let screenPos = project(player.x, CAM_HEIGHT, 0); let scale = screenPos.scale; let sw = player.w * scale; let sh = player.h * scale; push(); translate(screenPos.x, screenPos.y); rotate(radians(player.lean)); if (demoState.isRidingScooter) { let sW = sw * 1.5; let sH = sh * 0.8; image(assets.scooter, -sW/2, -sH + 10*scale, sW, sH); noFill(); stroke(COLORS.neonGreen); strokeWeight(4*scale); rect(-sh*0.7, -sh*1.4, sh*1.4, sh*1.4); translate(0, -20 * scale); } stroke(0); strokeWeight(2*scale); fill('#3333FF'); rect(-sw/2, -sh*0.6, sw, sh*0.6); fill('#FFCC99'); rect(-sw/2 + 5*scale, -sh, sw - 10*scale, sh*0.4); fill(0); rect(-sw/4, -sh*0.8, 5*scale, 5*scale); rect(sw/4-5*scale, -sh*0.8, 5*scale, 5*scale); if (demoState.isDrunk) { fill(COLORS.gold); textAlign(CENTER); textSize(30*scale); text("???", 0, -sh - 20*scale); } pop(); }
function drawPixelHUD() { drawPixelBox(20, 20, 220, 40, COLORS.hpBarBg, COLORS.uiBorder); fill(255); textSize(12); textAlign(LEFT); text("HP", 35, 45); let barW = map(demoState.stamina, 0, 100, 0, 150); fill(demoState.stamina > 30 ? COLORS.neonGreen : COLORS.neonRed); noStroke(); rect(70, 30, barW, 20); drawPixelBox(width - 200, 20, 180, 40, COLORS.hpBarBg, COLORS.uiBorder); textAlign(RIGHT); fill(255); text(floor(TARGET_DISTANCE - demoState.distance) + "m", width-40, 45); if(demoState.isRidingScooter) { fill(COLORS.gold); textAlign(CENTER); textSize(20); text("BOOST! " + ceil(demoState.scooterTimer/60), width/2, 50); } }
function drawPixelBlindOverlay() { fill(COLORS.uiBg); rect(40, 80, width-80, height-160); stroke(COLORS.neonRed); strokeWeight(4); noFill(); rect(50, 90, width-100, height-180); fill(COLORS.neonRed); textAlign(CENTER); textSize(30); text("PROMO ATTACK!", width/2, height/2 - 20); fill(255); textSize(15); text("MASH [SPACE]!", width/2, height/2 + 20); noStroke(); fill(COLORS.hpBarBg); rect(width/2 - 100, height/2 + 50, 200, 30); fill(COLORS.neonRed); rect(width/2 - 95, height/2 + 55, map(demoState.flyerHealth, 0, 8, 190, 0), 20); }
function drawPixelUI_Start() { fill(COLORS.uiBg); noStroke(); rect(0, 0, width, height); textAlign(CENTER); fill(COLORS.gold); textSize(50); text("PARK ST.", width/2, 200); fill(255); text("SURVIVOR", width/2, 270); textSize(20); text("8-BIT EDITION", width/2, 320); if (frameCount % 60 < 40) { fill(COLORS.neonGreen); textSize(24); text("[T] TUTORIAL", width/2, 500); fill(255); text("[SPACE] SKIP", width/2, 550); } textSize(12); fill(150); text("Use A/D Keys", width/2, 700); }
function drawPixelUI_End() { fill(COLORS.uiBg); noStroke(); rect(0, 0, width, height); textAlign(CENTER); let isWin = demoState.gameState === 'WIN'; fill(isWin ? COLORS.neonGreen : COLORS.neonRed); textSize(50); text(isWin ? "CLEARED!" : "GAME OVER", width/2, 300); fill(255); textSize(15); text(isWin ? "Nice Pixel Moves!" : "Try Again?", width/2, 380); fill(255); textSize(20); if (frameCount % 60 < 30) text("PRESS SPACE", width/2, 500); }
function respawnEntity(e) { let targetZ = SPAWN_DISTANCE + random(0, 500); let spawnLocation = random(); if (spawnLocation < 0.45) { let lanes = [-1.8, 1.8]; e.x = random(lanes) * LANE_WIDTH; e.startX = e.x; let r = random(); if (r < 0.25) e.type = 'HOMELESS'; else if (r < 0.5) e.type = 'PROMOTER'; else if (r < 0.75) e.type = 'COFFEE'; else e.type = 'TEA'; if (e.type === 'COFFEE' || e.type === 'TEA') { e.w = 30; e.h = 45; } else { e.w = 60; e.h = (e.type==='HOMELESS')?60:80; } } else { let lanes = [-0.5, 0.5]; let lane = random(lanes); e.x = lane * LANE_WIDTH; e.startX = e.x; let r = random(); let intendedType = 'CAR'; if (r < 0.3) intendedType = 'BUS'; else if (r < 0.7) intendedType = 'CAR'; else if (r < 0.9) intendedType = 'RIDER'; else intendedType = 'EMPTY_SCOOTER'; if (intendedType === 'BUS' || intendedType === 'CAR') { if (isLaneCrowded(e.x, SPAWN_DISTANCE - 200, SPAWN_DISTANCE + 600)) { if(random() < 0.5) intendedType = 'RIDER'; else targetZ += 800; } } e.type = intendedType; e.w = (e.type==='BUS')?100:(e.type==='CAR'?80:60); e.h = (e.type==='BUS')?140:(e.type==='CAR'?60:100); if(e.type==='EMPTY_SCOOTER') { e.w = 50; e.h = 80; } } e.z = targetZ; e.active = true; }
function handleCollision(e) { let isHarmful = ['BUS','CAR','RIDER','PROMOTER','HOMELESS'].includes(e.type); if (demoState.hasShield && isHarmful) { demoState.isRidingScooter = false; demoState.hasShield = false; demoState.scooterTimer = 0; e.active = false; demoState.shakeTimer = 15; createExplosion(e.x, 0, e.z); return; } if (e.type === 'BUS') { demoState.gameState = 'GAMEOVER'; } else if (e.type === 'CAR') { demoState.stamina -= 30; demoState.damageFlash = 10; e.active = false; } else if (e.type === 'RIDER') { demoState.stamina -= 20; e.active = false; } else if (e.type === 'HOMELESS') { demoState.stamina -= 15; demoState.isDrunk = true; demoState.drunkTimer = 120; e.active = false; demoState.damageFlash = 10; } else if (e.type === 'COFFEE' || e.type === 'TEA') { demoState.stamina = min(100, demoState.stamina + 25); e.active = false; } else if (e.type === 'PROMOTER') { demoState.isBlinded = true; demoState.flyerHealth = 8; e.active = false; } else if (e.type === 'EMPTY_SCOOTER') { demoState.isRidingScooter = true; demoState.hasShield = true; demoState.scooterTimer = 300; e.active = false; } }
function createExplosion(x, y, z) { for(let i=0; i<10; i++) demoState.particles.push({ x: x, y: CAM_HEIGHT - 60, z: z, vx: random(-5,5), vy: random(-5,5), vz: random(-5,5), life: 60, size: random(8,20), c: color('#FF5555') }); }
function updateParticles() { for(let i=demoState.particles.length-1; i>=0; i--) { let p = demoState.particles[i]; p.x += p.vx; p.y += p.vy; p.z += p.vz; p.life--; if (p.life<=0) demoState.particles.splice(i,1); }}
function isLaneCrowded(laneX, checkZStart, checkZEnd) { for (let e of entities) { if (!e.active || (e.type !== 'BUS' && e.type !== 'CAR')) continue; if (abs(e.x - laneX) < 10 && e.z > checkZStart && e.z < checkZEnd) { return true; } } return false; }
function respawnDecoration(d) { d.z = SPAWN_DISTANCE + random(0, 1000); let side = random() < 0.5 ? -1 : 1; d.x = side * (SIDEWALK_START_X + random(100, 200)); d.type = 'TREE'; d.w = 80; d.h = 120; }
function initGame() { demoState.gameState = 'START'; demoState.stamina = 100; demoState.distance = 0; demoState.isRidingScooter = false; demoState.hasShield = false; demoState.isDrunk = false; demoState.enableTutorial = false; player.x = 0; entities = []; for(let i=0; i<10; i++) { entities.push({ type: 'CAR', x: 0, z: -1000, w: 50, h: 50, active: false }); respawnEntity(entities[i]); entities[i].z = 1500 + i * 500; } decorations = []; for(let i=0; i<8; i++) { decorations.push({type:'TREE', x:0, z:0, w:0, h:0}); respawnDecoration(decorations[i]); decorations[i].z = i * 600; } }