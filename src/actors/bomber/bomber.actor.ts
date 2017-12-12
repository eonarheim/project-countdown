import { Actor, Color, Input } from 'excalibur';

export class Bomber extends Actor {
    constructor(){
        super()
        this.setWidth(25);
        this.setHeight(25);
        this.x = 150;
        this.y = 150;
        this.color = new Color(255, 255, 255);
    }
    public update(engine, delta) {
        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            this.y -= 1;
        } else if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {
            this.y += 1;
        } else if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            this.x -= 1;
        } else if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            this.x += 1;
        }
    }
}