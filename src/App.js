import React, {Component} from 'react';
import Render from "./components/RenderComponent/Render";
import './App.css';

class App extends Component {
    state = {
        numbers: [Math.floor(Math.random() * 36 + 1)]
    };

    changeNumber = () => {

    };

    render() {
        return (
            <div className="container">
                <div className="render">
                    <div>
                        <button onClick={this.changeNumber}>New numbers</button>
                        <Render></Render>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;