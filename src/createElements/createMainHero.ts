import {Application, Graphics} from "pixi.js";
import {red} from "../const.ts";

export const createMainHero = (app: Application) => {
    const mainHero = new Graphics();
    mainHero.circle(0, 0, 30);
    mainHero.fill(red);
    mainHero.position.x = 50
    mainHero.position.y = 50
    mainHero._zIndex = 2
    app.stage.addChild(mainHero);

    return mainHero
}