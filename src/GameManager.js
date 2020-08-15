import React from 'react';
import GameGrid from './GameGrid/GameGrid';
import GameContext from './GameContext';
import Sprit from './Sprit';

export default class GameManager extends React.Component {

    constructor(props) {
        super(props);
        const gridSize = 7;
        let grid = new Array(gridSize);
        for (let i = 0; i < gridSize; i++) {
            grid[i] = new Array(gridSize);
            for (let k = 0; k < gridSize; k++) {
                grid[i][k] = this.generateSquare();
            }
        }
        const validDirections = ['Up', 'Right', 'Down', 'Left'];
        grid[3][3] = {
            name: 'Start',
            direction: validDirections[Math.floor(validDirections.length * Math.random())]
        }
        this.state = {
            fps: 30,
            time: 0,
            gridSize: gridSize,
            grid: grid
        }
    }

    generateSquare = () => {
        const validNames = ['AddFlow', 'SubtractFlow', 'Empty'];
        const validDirections = ['Up', 'Right', 'Down', 'Left', 'None', 'None', 'None', 'None'];
        const name = validNames[Math.floor(validNames.length * Math.random())];
        return {
            name: name,
            direction: (name === 'Empty') ? '' : validDirections[Math.floor(validDirections.length * Math.random())]
        }
    }

    componentDidMount = () => {
        this.tick();
    }

    tick = () => {
        setTimeout(this.update, 1000 / this.state.fps);
    }

    update = () => {
        const {fps, time} = this.state;
        this.setState({time: time + (1000 / fps / 1000)});
        this.tick();
    }

    render() {
        const contextValue = {
            time: this.state.time,
            fps: this.state.fps,
            gridSize: this.state.gridSize,
            grid: this.state.grid
        }
        return (
            <GameContext.Provider value={contextValue}>
                <GameGrid />
                <Sprit />
            </GameContext.Provider>
        )
    }
}