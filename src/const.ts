import {TextStyle} from "pixi.js";

export const background = '454B1B'
export const white = '0xFFFFFF'
export const red = '0xde3249'
export const yellow = '0xFFFF00'

export const MIN_ANIMALS = 7;
export const MAX_ANIMALS = 15;
export const animationFrames = 60; // number of frames for the animation
export const MAX_COUNT_SELECTED_ANIMALS = 5

// Create a score text
export const scoreStyle = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 24,
    align: 'right'
});
