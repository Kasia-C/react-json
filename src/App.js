import React, { Component } from "react";
import ReactDOM from "react-dom";
import carsJson from "./Carss.json";
const jsonCars = carsJson.cars;

class App extends Component {
  state = {
    itemNumber: 0
  };

  showItem = () => {
    if (this.state.itemNumber === 0)
      //dla 0 pobiera wszystkie
      return jsonCars.map(car => this.getItem(car));
    //jeśli this.state.itemNumber jest inne niż 0
    return this.getItem(jsonCars.find(el => el.id === this.state.itemNumber));
  };

  getItem = carObj => {
    return (
      <ul>
        <li>
          <h2>{carObj.title}</h2>
        </li>
        <li>Type:{carObj.type}</li>
        <li>HP:{carObj.hp}</li>
        <li>Color:{carObj.color}</li>
        <li>Fuel type:{carObj.fuel_type}</li>
        <li>Fuel consumption-urban mode:{carObj.fuel1}</li>
        <li>Fuel consumption 90km/h:{carObj.fuel2}</li>
        <li>Automatic air conditioning:{carObj.automatic_air_conditioning}</li>
      </ul>
    );
  };

  setItemNumber = event => {
    this.setState({ itemNumber: parseInt(event.target.value, 10) });
  };

  render() {
    return (
      <div className="App">
        <h1>Cars from Carss.json</h1>
        <form>
          <select value={this.state.itemNumber} onChange={this.setItemNumber}>
            <option key="0" value="0">
              Wszystkie
            </option>
            {jsonCars.map(item => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </form>

        {this.showItem()}
      </div>
    );
  }
}
export default App;

//        <button onClick={this.setItemNumber(2)}>pobierz id = 2 </button>
//<button onClick={this.setItemNumber(0)}>pobierz wszystkie </button>
