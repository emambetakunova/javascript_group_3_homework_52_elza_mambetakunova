import React, {Component} from 'react';
import './App.css';

import Circle from "./components/RenderComponent/Render";

class App extends Component {

    state = {
        numbers: []
    };

    getSort = (array) => {
        return array.sort((a, b) => a - b);
    };

    getRandomNumbers = () => {
        let array = [];

        while (array.length < 5) {
            let num = Math.floor(Math.random() * (36 - 5) + 5);
            if (!array.find(number => number === num)) array.push(num)
        }

        array = this.getSort(array);
        this.setState({numbers: array})
    };


    changeHandler = async () => {
        await this.getRandomNumbers();
    };


    render() {
        return (
            <div className="container">
                <div className="render">
                    <div>
                        <button onClick={this.changeHandler}>New numbers</button>
                    </div>
                    {this.state.numbers.map((number, key) => {
                        return <Circle number={number} key={key}/>
                    })}
                </div>
            </div>
        )
    }
}

export default App;