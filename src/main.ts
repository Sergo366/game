import {Application, Graphics, Text} from 'pixi.js';
import {background, red, scoreStyle, yellow} from "./const.ts";
import {handleHeroMove} from "./handleHeroMove.ts";
import {generateAnimals} from "./generateAnimals.ts";

(async () => {
    const app = new Application();
    await app.init({ background, resizeTo: window });
    let animals: Graphics[] = []

    const node = document.getElementById('app');
    node.appendChild(app.canvas);

    const mainHero = new Graphics();
    mainHero.circle(100, 100, 30);
    mainHero.fill(red);
    mainHero._zIndex = 2
    app.stage.addChild(mainHero);

    generateAnimals(app, animals)

    let score = 0;
    const scoreText = new Text({text: `Score: ${score}`, style: scoreStyle});
    scoreText.anchor.set(1, 0);
    scoreText.x = app.screen.width - 10;
    scoreText.y = 10;
    app.stage.addChild(scoreText);

    const handleClick = (event) => {
        handleHeroMove(event, mainHero, animals)
        score += 1
        scoreText.text = `Score: ${score}`
    }

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('pointerdown', handleClick);

    // Create a yellow area at the bottom of the screen
    const yellowArea = new Graphics();
    yellowArea.rect(app.screen.width / 2 - 150, app.screen.height - 100, 300, 100);
    yellowArea.fill(yellow);

    app.stage.addChild(yellowArea);
})();