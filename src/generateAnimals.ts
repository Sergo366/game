import { MAX_ANIMALS, MIN_ANIMALS, white } from "./const.ts";
import {Application, Graphics} from "pixi.js";

export const generateAnimals = (app: Application, circles: Graphics[]) => {
    const circlesNumber = Math.floor(Math.random() * (MAX_ANIMALS - MIN_ANIMALS + 1)) + MIN_ANIMALS;

    generate(circlesNumber, app, circles)

    // used for auto generating animals
    // setInterval(() => {
    //     // Clear previous circles
    //     circles.forEach(circle => {
    //         app.stage.removeChild(circle);
    //         circle.destroy();
    //     });
    //     circles = [];
    //
    //    generate(circlesNumber, app, circles)
    // }, 10_000);
}

function generate (circlesNumber, app, circles) {
    for (let i = 0; i < circlesNumber; i++) {
        const animal = new Graphics();

        const posX = Math.random() * app.screen.width;
        const posY = Math.random() * app.screen.height;

        animal.circle(0, 0, 20);
        animal.position.x = posX
        animal.position.y = posY
        animal.fill(white);

        app.stage.addChild(animal);
        circles.push(animal);
    }
}