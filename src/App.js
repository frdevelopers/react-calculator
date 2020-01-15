import React from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { create, all } from 'mathjs'

const config = {}
const math = create(all, config)
// let calDone = false;
let result = 0;


class MyHeader extends React.Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}
class InputPanel extends React.Component {
  render() {
    return <div>
                <input id="mScreen" className="mScreen" />
                <input id="rScreen" className="rScreen" />
          </div>
  }
}

class ButtonsPanel extends React.Component {

  shoot = (e) => {
    let valueToCal = document.getElementById('mScreen').value

    // if (calDone === true) {
    //   document.getElementById('mScreen').value = ""
    //   calDone = false
    // }

    switch (e.target.innerHTML) {
      case "Clear":
        document.getElementById('mScreen').value = ""
        document.getElementById('rScreen').value = ""
        break;
      case "=":
        result = math.evaluate(valueToCal)
        document.getElementById('rScreen').value = result
        document.getElementById('mScreen').value = result

        // calDone = true
        break;
      case "Bspace":
        document.getElementById('mScreen').value = valueToCal.slice(0, -1)
        break;
      default:
        document.getElementById('mScreen').value += e.target.innerHTML
    }
  }
  render() {
    return <div className="buttonsPanel">
      <button onClick={this.shoot}>1</button>
      <button onClick={this.shoot}>2</button>
      <button onClick={this.shoot}>3</button>
      <button onClick={this.shoot}>4</button>
      <button onClick={this.shoot}>5</button>
      <button onClick={this.shoot}>6</button>
      <button onClick={this.shoot}>7</button>
      <button onClick={this.shoot}>8</button>
      <button onClick={this.shoot}>9</button>
      <button onClick={this.shoot}>0</button>
      <button onClick={this.shoot}>+</button>
      <button onClick={this.shoot}>-</button>
      <button onClick={this.shoot}>*</button>
      <button onClick={this.shoot}>/</button>
      <button onClick={this.shoot}>=</button>
      <button onClick={this.shoot}>00</button>
      <button onClick={this.shoot}>.</button>
      <button onClick={this.shoot}>Clear</button>
      <button onClick={this.shoot}>Bspace</button>
    </div>
  }
}

export default class myApp extends React.Component {
  render = () => {
    return <div className="mainContainer">
      <MyHeader title="Calculator"></MyHeader>
      <InputPanel></InputPanel>
      <ButtonsPanel></ButtonsPanel>
    </div>;
  }

}
