import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
    render() {
        return (
            <div className="container">
                <div className="calculator">
                    <input className="calculator__display-result" id="display"/>
                    <br/>
                    <input className="calculator__display-input"/>
                    <br/>
                    <button className="calculator__clear" id="clear">AC</button>
                    <button className="math calculator__divide" id="divide">/</button>
                    <button className="math calculator__multiply" id="multiply">x</button>
                    <br/>
                    <button className="btn calculator__number-seven" id="seven">7</button>
                    <button className="btn calculator__number-eight" id="eight">8</button>
                    <button className="btn calculator__number-nine" id="nine">9</button>
                    <button className="math calculator__operator-minus" id="subtract">-</button>
                    <br/>
                    <button className="btn calculator__number-four" id="four">4</button>
                    <button className="btn calculator__number-five" id="five">5</button>
                    <button className="btn calculator__number-six" id="six">6</button>
                    <button className="math calculator__operator-minus" id="add">+</button>
                    <br/>
                    <button className="btn calculator__number-one" id="one">1</button>
                    <button className="btn calculator__number-two" id="two">2</button>
                    <button className="btn calculator__number-three" id="three">3</button>
                    <button className="calculator__operator-equal" id="equals">=</button>
                    <br/>
                    <button className="calculator__number-zero" id="zero">0</button>
                    <button className="btn calculator__symbol" id="decimal">.</button>
                </div>
            </div>
        )
    };
}
export default Calculator;
