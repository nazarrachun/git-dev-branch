import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      kilometers: 0
    };

    this.changeKilometers = this.changeKilometers.bind(this);
  }
  changeKilometers() {
    this.setState({ kilometers: this.kilometers.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.kilometers} ref={(node) => { this.kilometers = node; }} onChange={this.changeKilometers} /><br />
        <label>{7 * this.state.kilometers}</label>
      </div>
    );
  }
}
export default App;123
