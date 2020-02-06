import React from 'react';
import mandalorian from "./mandalorian_pic.jpg";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="twelve column">
          <img className="bio-image" src={mandalorian} alt="bio" />

          <h2>Britney Adams</h2>
          <h5>Supportability Specialist</h5>

          <span>
            <strong>Email:</strong>{" "}
            <a href="adams.britneyr@gmail.com">adams.britneyr@gmail.com</a>
          </span>
          <br />
          <span>
            <strong>Phone:</strong> 208-949-9859
          </span>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="twelve column">
          <h4>Work History</h4>

          <h6>
            <strong>Pied Piper</strong> 2017-Present
          </h6>
          <p>
            Beard twee live-edge, pop-up kogi pabst etsy shoreditch small batch
            vegan. Skateboard brooklyn gochujang 90's ennui pour-over before
            they sold out swag cliche wolf butcher cronut sriracha shoreditch
            bushwick. Activated charcoal jean shorts chillwave four dollar toast
            meggings health goth cornhole.
          </p>

          <h6>
            <strong>Hooli</strong> 2014-2017
          </h6>
          <p>
            Beard twee live-edge, pop-up kogi pabst etsy shoreditch small batch
            vegan. Skateboard brooklyn gochujang 90's ennui pour-over before
            they sold out swag cliche wolf butcher cronut sriracha shoreditch
            bushwick. Activated charcoal jean shorts chillwave four dollar toast
            meggings health goth cornhole.
          </p>

          <h6>
            <strong>Dunder Mifflin</strong> 2010-2014
          </h6>
          <p>
            Beard twee live-edge, pop-up kogi pabst etsy shoreditch small batch
            vegan. Skateboard brooklyn gochujang 90's ennui pour-over before
            they sold out swag cliche wolf butcher cronut sriracha shoreditch
            bushwick. Activated charcoal jean shorts chillwave four dollar toast
            meggings health goth cornhole.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="twelve column">
          <h4>Education</h4>

          <h6>
            <strong>Super Hacker U</strong> 2010
          </h6>
          <p>
            Beard twee live-edge, pop-up kogi pabst etsy shoreditch small batch
            vegan. Skateboard brooklyn gochujang 90's ennui pour-over before
            they sold out swag cliche wolf butcher cronut sriracha shoreditch
            bushwick. Activated charcoal jean shorts chillwave four dollar toast
            meggings health goth cornhole.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
