import {Application, Graphics} from 'pixi.js';
import {background, MAX_COUNT_SELECTED_ANIMALS} from "./const.ts";
import {handleHeroMove} from "./handleHeroMove.ts";
import {generateAnimals} from "./generateAnimals.ts";
import {handleAnimalsMove} from "./handleAnimalsMove.ts";
import {createMainHero} from "./createElements/createMainHero.ts";
import {createScoreBlock} from "./createElements/createScoreBlock.ts";
import {createFinishZone} from "./createElements/createFinishZone.ts";
import {doRectanglesIntersect} from "./utils/doRectanglesIntersect.ts";

(async () => {
    const app = new Application();
    await app.init({ background, resizeTo: window });
    let animals: Graphics[] = []
    const selectedAnimals: Set<Graphics> = new Set([]);

    const node = document.getElementById('app');
    node.appendChild(app.canvas);

    generateAnimals(app, animals)

    let score = 0;
    const mainHero = createMainHero(app)
    const scoreText = createScoreBlock(app, score);
    const finishNode = createFinishZone(app)
    const finishNodeBounds = finishNode.getBounds()

    const handleClick = (event) => {
        const mainHeroBounds = mainHero.getBounds();

        const newMainHeroSquare = {
            top: mainHeroBounds.y + 50,
            bottom: mainHeroBounds.y - 50,
            left: mainHeroBounds.x - 50,
            right: mainHeroBounds.x + 50,
        };

        console.log('selectedAnimals', selectedAnimals)

        animals.forEach(el => {
            if (selectedAnimals.size === MAX_COUNT_SELECTED_ANIMALS) return;
            const position = el.getBounds();

            if (position.x > newMainHeroSquare.left
                && position.x < newMainHeroSquare.right
                && position.y > newMainHeroSquare.bottom
                && position.y < newMainHeroSquare.top) {
                selectedAnimals.add(el)
            }
        });

        handleHeroMove(event, mainHero);
        handleAnimalsMove(selectedAnimals, event)
    };

    app.ticker.add(() => {
        const mainHeroBounds = mainHero.getBounds();

        if (doRectanglesIntersect(mainHeroBounds, finishNodeBounds) && selectedAnimals.size > 0) {
            selectedAnimals.forEach(graphic => {
                app.stage.removeChild(graphic);

                score += 1;
                scoreText.text = `Score: ${score}`;
            });

            selectedAnimals.clear()
        }
    });

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('pointerdown', handleClick);
})();