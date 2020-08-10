import React from 'react';
import GridSquare from './GridSquare';
import GameContext from './GameContext';

export default class GameGrid extends React.Component {

    static contextType = GameContext;

    renderGrid = () => {
        const {grid} = this.context;
        return grid.map((row, outerIndex) => {
            return row.map((col, index) => {
                return <GridSquare key={(outerIndex * grid.length) + index}/>
            })
        });
    }

    render() {
        return (
            <>
            {this.renderGrid()}
            </>
        );
    };
}