import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();

    this.state = {
      kilometers: 0,
      speed: 0,
      secondSlider: 0
    };

    this.changeKilometers = this.changeKilometers.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
  }
  handleSecondSlider = (event, value) => {
      this.setState({secondSlider: value});
  }
  changeKilometers() {
    this.setState({ kilometers: this.kilometers.value });
  }
  changeSpeed() {
    this.setState({ speed: this.speed.value });
  };

  render() {
    return (
      <div>
        <p>Kilometers <input type="number" value={this.state.secondSlider} ref={(node) => { this.kilometers = node; }} onChange={this.changeKilometers} /><br />
        <label>{7 * this.state.secondSlider}  Calories</label></p>
          <MuiThemeProvider>
            <Slider
          min={0}
          max={100}
          step={1}
          value={this.state.kilometers}
          onChange={this.handleSecondSlider}
        />
          </MuiThemeProvider>
        <p>Speed <input type="number" value={this.state.speed} ref={(nodes) => { this.speed = nodes; }} onChange={this.changeSpeed} /><br />
        <label>{this.state.speed * this.state.secondSlider + 7}  Calories</label></p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.secondSlider}</span>
          <span>{' kilometers'}</span>
      </div>
    );
  }
}
export default App;
