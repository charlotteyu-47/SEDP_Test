# SEDP_Test(Group 7)

## Members

- Charlotte Yu, fe22207@bristol.ac.uk, charlotteyu-47
- Lucca Zhou, pn25381@bristol.ac.uk, hikorido
- Ray wang, nz25771@bristol.ac.uk , Raykwan24
- Layla Pei, jj25661@bristol.ac.uk, ploading1017

## Idea

| Game Type | Game Prototype | Game Description | Added Idea Points | Possible Challenges | Screenshot | Website |
|------|------|------|------|------|------|------|
| 休闲 / 街机 / 策略 | Bomberman | 玩家控制一只小动物，在基于网格的水域地图中行动。玩家通过放置炸弹清理水草并炸鱼来获得积分。炸弹数量有限，但会随时间自动恢复。鱼会在固定刷新点生成，并且地图中存在数量上限。破坏水草后可能掉落道具，例如增加炸弹数量上限、缩短冷却时间、恢复生命值，或者什么都不掉。玩家需要在限定时间内达到目标分数才能通关。 | （1）炸弹采用冷却机制，使用后会自动恢复，而不是一次性消耗。<br>（2）鱼在固定刷新点生成，并设置数量上限，引导玩家进行策略性放置炸弹。（3）可破坏水草在被炸毁后有概率掉落道具或什么都不掉，引入可控的随机性。（4）以积分达标作为主要通关条件，而非传统的消灭所有敌人。 | （1）设计一个支持炸弹冷却与连锁爆炸的事件驱动爆炸系统。（2）在同一游戏循环中同时更新炸弹、爆炸效果、地图变化和积分系统，保证游戏状态的一致性。（3）在道具掉落、鱼的刷新等随机因素与玩家操作难度之间取得平衡。（4）在保证玩法完整性的前提下，防止项目范围失控（scope creep）。 |<img width="1110" height="1042" alt="image" src="https://github.com/user-attachments/assets/86eaaa45-5bcc-4fdb-8f5c-b90b865de6e7" />|[link]|

