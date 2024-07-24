import {Bounds} from "pixi.js";

export function doRectanglesIntersect(rect1: Bounds, rect2: Bounds) {
    return !(rect2.x > rect1.x + rect1.width ||
        rect2.x + rect2.width < rect1.x ||
        rect2.y > rect1.y + rect1.height ||
        rect2.y + rect2.height < rect1.y);
}