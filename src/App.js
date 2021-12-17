import React, { Component } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
import moustly from"./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"Assia ahmad"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div className="navbar">
          <div className="search"><input placeholdor="london" type= "text" /></div>
          <div className="buttons"> <button>FIND WEATHER</button> </div>
        </div>
    
        <div className="website">
          <img className="maining" alt="" src={moustly}/>
          <div className="over">overcast clouds</div>
            <p className="tem"> <strong>tempareture </strong> 10° to 11°C</p>
            <p className=" humi"> <strong> Humidity </strong> 78% <strong>pressure</strong> 100.48</p>
        </div>
        <div className="weather-change">

          <div className="item item1">
         <h3>03:00</h3>
          <img  alt="mostlycloudy icon"src={moustly}  />
          <h3>8°C</h3>
          </div>
          <div className="item item2">
            <h3>06:00</h3>
          <img  alt="mostlycloudy icon"src={moustly}  />
          <h3>9°C</h3>
          </div>
          <div className="item item3">
            <h3> 09:00</h3>
          <img  alt="clear icon"src={clear}  />
          <h3>14°C</h3>
          </div>
          <div className="item item4">
            <h3> 12:00</h3>
          <img  alt="clear icon"src={clear}  />
          <h3>17°C</h3>
          </div>
          <div className="item item5">
            <h3> 15:00</h3>
          <img  alt="clear icon"src={clear}  />
          <h3>18°C</h3>
          </div>
          <div className="item item6">
            <h3> 18:00</h3>
          <img  alt="clear icon"src={clear}  />
          <h3>16°C</h3>
          </div>
          <div className="item item7">
            <h3> 21:00</h3>
          <img  alt="mostlycloudy icon"src={moustly}  />
          <h3>13°C</h3>
          </div>
       
        </div>
      </div>
    );
  
  }
}
export default App;
