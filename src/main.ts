import {Application, Graphics, Text} from 'pixi.js';
import {background, MAX_COUNT_SELECTED_ANIMALS, red, scoreStyle, yellow} from "./const.ts";
import {handleHeroMove} from "./handleHeroMove.ts";
import {generateAnimals} from "./generateAnimals.ts";
import {handleAnimalsMove} from "./handleAnimalsMove.ts";

(async () => {
    const app = new Application();
    await app.init({ background, resizeTo: window });
    let animals: Graphics[] = []

    const node = document.getElementById('app');
    node.appendChild(app.canvas);

    const mainHero = new Graphics();
    mainHero.circle(0, 0, 30);
    mainHero.fill(red);
    mainHero.position.x = 50
    mainHero.position.y = 50
    mainHero._zIndex = 2
    app.stage.addChild(mainHero);

    generateAnimals(app, animals)

    let score = 0;
    const scoreText = new Text({text: `Score: ${score}`, style: scoreStyle});
    scoreText.anchor.set(1, 0);
    scoreText.x = app.screen.width - 10;
    scoreText.y = 10;
    app.stage.addChild(scoreText);

    const selectedAnimals: Set<Graphics> = new Set([]);

    const handleClick = (event) => {
        const mainHeroPosition = mainHero.getBounds();

        const newMainHeroSquare = {
            top: mainHeroPosition.y + 50,
            bottom: mainHeroPosition.y - 50,
            left: mainHeroPosition.x - 50,
            right: mainHeroPosition.x + 50,
        };

        animals.forEach(el => {
            if (selectedAnimals.size === MAX_COUNT_SELECTED_ANIMALS) return;

            const position = el.getBounds();

            if (position.x > newMainHeroSquare.left && position.x < newMainHeroSquare.right
                && position.y > newMainHeroSquare.bottom && position.y < newMainHeroSquare.top ) {
                selectedAnimals.add(el)
            }
        });

        handleHeroMove(event, mainHero);
        handleAnimalsMove(selectedAnimals, event)
        score += 1;
        scoreText.text = `Score: ${score}`;
    };


    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('pointerdown', handleClick);

    // Create a finish area at the bottom of the screen
    const yellowArea = new Graphics();
    yellowArea.rect(app.screen.width / 2 - 150, app.screen.height - 100, 300, 100);
    yellowArea.fill(yellow);

    app.stage.addChild(yellowArea);
})();