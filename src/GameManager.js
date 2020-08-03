import React from 'react';
import GameSprite from './GameSprite';
import GameContext from './GameContext';

export default class GameManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fps: 10,
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
                <GameSprite />
            </GameContext.Provider>
        )
    }
}