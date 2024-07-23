import {FederatedPointerEvent, Graphics, Ticker} from "pixi.js";

export function handleAnimalsMove(selectedAnimals: Set<Graphics>, event: FederatedPointerEvent) {
    selectedAnimals.forEach((el) => {
        const newPos = event.global;

        let frame = 0;
        const duration = 60;

        const startX = el.x + 50;
        const startY = el.y + 50;
        const deltaX = (newPos.x - startX) / duration;
        const deltaY = (newPos.y - startY) / duration;

        const ticker = new Ticker();
        ticker.add(() => {
            if (frame < duration) {
                el.x += deltaX;
                el.y += deltaY;
                frame++;
            } else {
                ticker.stop();
            }
        });
        ticker.start();
    })
}