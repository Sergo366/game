import {FederatedPointerEvent, Graphics, Ticker} from "pixi.js";
import {animationFrames} from "./const.ts";

export const handleHeroMove = (event: FederatedPointerEvent, mainHero: Graphics) => {
    const newPos = event.global;

    // Animation variables
    let frame = 0;
    const startX = mainHero.x;
    const startY = mainHero.y;
    const deltaX = (newPos.x - startX) / animationFrames;
    const deltaY = (newPos.y - startY) / animationFrames;

    const ticker = new Ticker();
    ticker.add(() => {
        if (frame < animationFrames) {
            mainHero.x += deltaX;
            mainHero.y += deltaY;
            frame++;
        } else {
            ticker.stop();
        }
    });
    ticker.start();
}