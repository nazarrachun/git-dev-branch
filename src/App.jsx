import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      kilometers: 0,
      speed: 0
    };

    this.changeKilometers = this.changeKilometers.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
  }
  changeKilometers() {
    this.setState({ kilometers: this.kilometers.value });
  }
  changeSpeed() {
    this.setState({ speed: this.speed.value });
  }

  render() {
    return (
      <div>
        <p><input type="text" value={this.state.kilometers} ref={(node) => { this.kilometers = node; }} onChange={this.changeKilometers} /><br />
        <label>{7 * this.state.kilometers}</label></p>
        <p><input type="text" value={this.state.speed} ref={(nodes) => { this.speed = nodes; }} onChange={this.changeSpeed} /><br />
        <label>{this.state.speed * this.state.kilometers + 7} </label></p>
      </div>
    );
  }
}
export default App;
