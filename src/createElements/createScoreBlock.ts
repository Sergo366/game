import {Application, Text} from "pixi.js";
import {scoreStyle} from "../const.ts";

export const createScoreBlock = (app:  Application, score: number) => {
    const scoreNode = new Text({text: `Score: ${score}`, style: scoreStyle});
    scoreNode.anchor.set(1, 0);
    scoreNode.x = app.screen.width - 10;
    scoreNode.y = 10;
    app.stage.addChild(scoreNode);

    return scoreNode
}