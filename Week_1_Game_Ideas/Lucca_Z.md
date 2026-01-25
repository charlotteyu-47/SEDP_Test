# 1. Balatro
## **Game Prototype** 
Balatro（小丑牌）

## **Game Description** 
一个基于扑克牌的rougelike游戏。

  主要机制：
  
- 玩家在扑克牌的基础上（对子，高牌，同花，顺子），打出不同的牌组获得分数，分数足够时通关。
- 三个回合组成一个大关卡。大关卡结束时有额外奖励。
- 在回合结算时，使用回合奖励的金币购买增益（即小丑牌）。如：增加特定牌组获得的分数，增加偶数牌打出时的得分。

 ## **Added points**
- 更换游戏包装，减少卡牌数量。将扑克牌替换为塔罗牌。
- 常规手牌用小阿卡纳牌替代，四种元素取代四种花色，即权杖、圣杯、金币、宝剑。
	- 元素效果：当圣杯和金币同时打出对子时，分数翻倍，当权杖和圣杯同时打出时，分数减半。
- 用大阿卡纳牌（即愚人、高塔、审判等）替代游戏中小丑牌提供的增益，如：高塔牌的作用是，打出两张水牌后，下一张打出的土牌得分翻倍。
- 减少回合数，一个流程只做3~6个回合。
  
## **Pros** 
- 塔罗牌面制作较为简单，无需绘制过多美术资源，有大量可用素材。
- 不涉及人物动画和移动状态，无需绘制四向/八向图。
- 数值和牌组无需进行二次设计，可以直接参考原作，避免游戏不平衡等问题。
- 用塔罗牌替代原作的扑克牌可以大量减少需要设计的增益（只有十三张），制作更简单。
  
## **Possible Challenges**
### 1. 手牌分数算法。
	- 检测玩家打出的牌包含的牌组（如对子，顺子，高牌，同花等等），计算对应分数。如加入元素反应后，需要考虑分数的倍数。
### 2. 后台状态追踪。
	- 需要在后台计算剩余的牌堆数量，手牌数量，得分数和通关所需分数等。
### 3. 随机策略。
	- 需要考虑玩家随机获得的手牌顺序，商店刷新的卡牌顺序等。

## **Screenshots:**
游戏开始界面：
<img width="2560" <img width="2560" height="1600" alt="Pasted image 20260125160303" src="https://github.com/user-attachments/assets/6fcfebbe-ebd9-4ee0-83d8-0504ee69999a" />
回合开始界面（共3个小关卡）：
<img width="2560" height="1600" alt="Pasted image 20260125160303" src="https://github.com/user-attachments/assets/0ee4671c-6b51-4104-bdf8-310e50820467" />
游戏进行时的界面：
<img width="2560" height="1600" alt="Pasted image 20260125160313" src="https://github.com/user-attachments/assets/eb22f560-be3a-43ef-8010-1a6d4d3c33f3" />
游戏分数展示（高牌、对子、同花等牌组的得分）：
<img width="2560" height="1600" alt="Pasted image 20260125161619" src="https://github.com/user-attachments/assets/7a8eab76-2581-43d8-8891-efb035171b65" />
商店页面展示：
<img width="2560" height="1600" alt="Pasted image 20260125162249" src="https://github.com/user-attachments/assets/18757e93-6992-42d7-83e7-5d1e5e518bef" />

## **Link：**
https://store.steampowered.com/app/2379780/Balatro/

https://youtu.be/2n9pkiuSZLU?si=ec-42bTwZf4gjbdY

---

# 2. Pico Park
## **Game Type** 
合作解密游戏 Cooperative puzzle-platformer
## **Game Prototype** 
Pico Park
## **Game Description** 
多人合作通关游戏。类似于森林冰火人但是更简单版，跳跳乐，有少量机关。
## **Added Idea Points**
增加角色能力：每个玩家选择的角色具有不同的能力，如：跳得更远，可以推动方块，可以制造临时台阶等等。
## **Pros**
- 美术资源简单，简易画图可以解决关卡所需要的方块、按钮、平台等所有设计。
- 代码更简单，只和角色移动和平台变化有关，无需追踪玩家数值和状态、分数等等。
- 关卡设计样本多，不需要重新构思。
## **Possible Challenges**
1. 多玩家游戏时的同步输入
   - 需要同时检测两个玩家的键盘输入，玩家之间的状态（如一个玩家踩在另一个玩家头上，一个玩家正在推动方块等等），以及多个角色之间的碰撞问题。
2. 关卡系统
   - 需要设计关卡内的互动机制，如左右移动的跳跃平台，可以互动的开关，门，可推动的箱子等等。

## **Screenshot**
开始页面：
<img width="1920" height="1080" alt="Pasted image 20260125165931" src="https://github.com/user-attachments/assets/1368e5ac-bdf8-4258-9712-cae4d5b779bc" />
游玩中的页面：
<img width="1920" height="1080" alt="Pasted image 20260125170006" src="https://github.com/user-attachments/assets/32512808-775d-473b-995c-cc44b173ae34" />
<img width="1920" height="1080" alt="Pasted image 20260125170018" src="https://github.com/user-attachments/assets/0417d97c-bac9-4e42-ab04-39e42f3c2395" />
<img width="1920" height="1080" alt="Pasted image 20260125170057" src="https://github.com/user-attachments/assets/a9b57ce0-0807-471f-b73b-0beeb5dbc91e" />


## **Link**
[PICO PARK](https://picoparkgame.com/pp1/)
