import React from 'react';
import {spritSprites} from './sprites';
import GameContext from './GameContext';

export default class GameSprite extends React.Component {

    static contextType = GameContext;

    renderSprite = () => {
        const {time, fps} = this.context;
        return <img src={spritSprites[Math.floor(fps * time % spritSprites.length)]} alt=''/>
    }

    render = () => {
        return (
            <>
                {spritSprites.length > 0 && this.renderSprite()}
            </>
        )
    }
}