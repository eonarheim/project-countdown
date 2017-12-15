import { Actor, Color, Timer, CollisionType } from 'excalibur';

export class Bomb extends Actor {
    constructor(bomberPos: any){
        super()
        this.setWidth(10);
        this.setHeight(10);
        this.x = bomberPos.xPos;
        this.y = bomberPos.yPos;
        this.color = new Color(0, 0, 0);
        this.collisionType = CollisionType.Fixed;
    }
    public update(engine, delta) {
    }

    public onInitialize(engine) {
        this.startFuse(engine);
    }

    private checkForHits(engine) {
        const players = engine.currentScene.actors;
        for( var i = 0; i < players.length; i++) {
            if (this.within(players[i], 20)){
                players[i].kill();
            };
        };
    }

    private startFuse(engine) {
        const fuse = new Timer( () => {
            this.checkForHits(engine);
            this.kill();
        }, 3000);
        engine.addTimer(fuse);
    }
}