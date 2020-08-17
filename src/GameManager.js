import React from 'react';
import GameGrid from './GameGrid/GameGrid';
import GameContext from './GameContext';
import Sprit from './Sprit';
import GameUtils from './GameUtils';

export default class GameManager extends React.Component {

    //----------------------------------Game Logic-------------------------------------------------------//
    
    /**
     * Sets up the game board
     */
    initializeGrid = () => {
        const gridSize = 7;
        let grid = new Array(gridSize);
        for (let i = 0; i < gridSize; i++) {
            grid[i] = new Array(gridSize);
            for (let k = 0; k < gridSize; k++) {
                grid[i][k] = GameUtils.generateSquare();
            }
        }
        const validDirections = ['Up', 'Right', 'Down', 'Left'];
        grid[3][3] = {
            name: 'Start',
            direction: validDirections[Math.floor(validDirections.length * Math.random())]
        }
        this.setState({
            fps: 30,
            time: 0,
            gridSize: gridSize,
            grid: grid
        });
    }

    /**
     * Wait for a bit, then update game state
     */
    tick = () => {
        setTimeout(this.update, 1000 / this.state.fps);
    }

    /**
     * Update game state
     */
    update = () => {
        const {fps, time} = this.state;
        this.setState({time: time + (1 / fps)});
        this.tick();
    }

    //-----------------------------Life Cycle Methods--------------------------------------------------------//

    constructor(props) {
        super(props);
        this.initializeGrid();
    }

    componentDidMount = () => {
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