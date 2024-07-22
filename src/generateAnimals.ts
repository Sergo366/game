import { MAX_ANIMALS, MIN_ANIMALS, white } from "./const.ts";
import {Application, Graphics} from "pixi.js";

// Random number of circles from 5 to 20 with random position
export const generateAnimals = (app: Application, circles: Graphics[]) => {
    const circlesNumber = Math.floor(Math.random() * (MAX_ANIMALS - MIN_ANIMALS + 1)) + MIN_ANIMALS;

    generate(circlesNumber, app, circles)

    setInterval(() => {
        // Clear previous circles
        circles.forEach(circle => {
            app.stage.removeChild(circle);
            circle.destroy();
        });
        circles = [];

       generate(circlesNumber, app, circles)
    }, 10_000);
}

function generate (circlesNumber, app, circles) {
    for (let i = 0; i < circlesNumber; i++) {
        const circle = new Graphics();

        const posX = Math.random() * app.screen.width;
        const posY = Math.random() * app.screen.height;

        circle.circle(posX, posY, 20);
        circle.fill(white);

        app.stage.addChild(circle);
        circles.push(circle);
    }
}