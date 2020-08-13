import React from 'react';
import GameGrid from './GameGrid/GameGrid';
import GameContext from './GameContext';

export default class GameManager extends React.Component {

    constructor(props) {
        super(props);
        const gridSize = 7;
        let grid = new Array(gridSize);
        grid.fill(new Array(gridSize));
        grid.forEach(elem => {
            elem.fill(0);
            elem.forEach((_, index) => {
                elem[index] = this.generateSquare();
            })
        })
        console.log(grid);
        this.state = {
            fps: 30,
            time: 0,
            gridSize: gridSize,
            grid: grid
        }
    }

    generateSquare = () => {
        const validNames = ['AddFlow', 'SubtractFlow'];
        const validDirections = ['Up', 'Right', 'Down', 'Left'];
        return {
            name: validNames[Math.floor(validNames.length * Math.random())],
            direction: validDirections[Math.floor(validDirections.length * Math.random())]
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
            </GameContext.Provider>
        )
    }
}