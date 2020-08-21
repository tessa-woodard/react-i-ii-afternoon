import React, { Component } from 'react'
import "./App.css"
import UserInfo from "./PersonInfo"

class Background extends Component {
    constructor() {
        super()

        this.state = {
            userId: 0
        };
    }


    increase = () => {
        if (this.state.userId < 24)
            this.setState({ userId: this.state.userId + 1 })
    };


    decrease = () => {
        if (this.state.userId > 0)
            this.setState({ userId: this.state.userId - 1 })
    };

    render() {
        return (
            <div>
                <header id='home'>
                    <h1>Home</h1>
                </header>
                <footer>
                    <div className="buttons">
                        <UserInfo info={this.state.userId} />
                    </div>

                    <div>
                        <button onClick={this.decrease} className="buttonl">
                            {'< previous'}
                        </button>
                        <button className="button">edit</button>
                        <button className="button">delete</button>
                        <button className="button">new</button>
                        <button onClick={this.increase} className="buttonr">
                            {'next >'}
                        </button>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Background