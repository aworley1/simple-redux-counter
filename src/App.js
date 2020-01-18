import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {number: 0};
    }

    render() {
        let {number} = this.state;

        const increment = () => {
            this.setState({number: number + 1});
        };

        const decrement = () => {
            this.setState({number: number - 1});
        };

        return (<Counter increment={increment} decrement={decrement} value={number}/>)
    }
}

const Counter = (props) => {
    return (
        <div>
            <div className="counter">
                {props.value}
            </div>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    )
};

export default App;

