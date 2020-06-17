import Game from "./components/organisms/Game/Game";

import { getWordsData } from "./core/api/getWords/getWords";

import './reset.scss'

window.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('.root');

    const game = new Game(getWordsData);
    console.log(game);

    root.append(game.element);
});
