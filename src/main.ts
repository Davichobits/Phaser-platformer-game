import { PlayScene } from './scenes/play-scene';
import { AUTO, Game, Scale, Types } from 'phaser';

const WIDTH = 1200;
const HEIGHT = 600;

const SHARED_CONFIG = {
    width: WIDTH,
    height: HEIGHT,
}

const config: Types.Core.GameConfig = {
    type: AUTO,
    ...SHARED_CONFIG,
    parent: 'game-container',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        PlayScene
    ]
};

export default new Game(config);
