import { GameBase } from "../../Boilerplate/Classes/GameBase";
import { TextureNames } from "../Enums/TextureNames";

export class Game extends GameBase {
    constructor() {
        super(TextureNames);
    }

    initialize() {

    }

    update() {
        // this.context.resetTransform();
        // this.context.translate((this.windowWidth / 2) - this.guy.rectangle.center().x, (this.windowHeight / 2) - this.guy.rectangle.center().y);
    }

    draw() {

    }
}
