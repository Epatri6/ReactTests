import React from 'react';
import {gridSquare} from '../sprites/index';
import GameSprite from '../GameSprite';
import './GridSquare.css';

export default class GridSquare extends React.Component {

    render() {
        return (
            <GameSprite fps={0} sprites={gridSquare}/>
        );
    }
}