import React from 'react';
import Sprit from './Sprit';
import GameContext from './GameContext';

export default class GameManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fps: 30,
            time: 0
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
        let a = ''
        for(let i = 0; i < 10000; i++) {
            a += 'a';
        }
        this.setState({time: time + (1000 / fps / 1000)});
        this.tick();
    }

    render = () => {
        const contextValue = {
            time: this.state.time,
            fps: this.state.fps
        }
        return (
            <GameContext.Provider value={contextValue}>
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
                <Sprit />
            </GameContext.Provider>
        )
    }
}