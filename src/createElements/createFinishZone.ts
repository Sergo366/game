import {Application, Graphics} from "pixi.js";
import {yellow} from "../const.ts";

// Create a finish area at the bottom of the screen
export function createFinishZone(app: Application) {
    const finishNode = new Graphics();
    finishNode.rect(app.screen.width / 2 - 150, app.screen.height - 100, 300, 100);
    finishNode.fill(yellow);
    app.stage.addChild(finishNode)

    return finishNode
}