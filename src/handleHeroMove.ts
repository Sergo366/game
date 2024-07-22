import {FederatedPointerEvent, Graphics, Ticker} from "pixi.js";

export const handleHeroMove = (event: FederatedPointerEvent, mainHero: Graphics, circles: Graphics[]) => {
    const newPos = event.global;

    // Animation variables
    const duration = 60; // number of frames for the animation
    let frame = 0;
    const startX = mainHero.x + 100;
    const startY = mainHero.y + 100;
    const deltaX = (newPos.x - startX) / duration;
    const deltaY = (newPos.y - startY) / duration;

    const ticker = new Ticker();
    ticker.add(() => {
        if (frame < duration) {
            mainHero.x += deltaX;
            mainHero.y += deltaY;
            frame++;
        } else {
            ticker.stop();
        }
    });
    ticker.start();
}