var React = require('react');

var Deck = require('./deck')

var Home = React.createClass({

  render: function() {

    return (
      <div className="hero-unit">
        <h1>'Go Knicks!</h1>
        <p>You now have</p>
        <ul>
            <li>ReactJS Reflux Boilerplate</li>
        </ul>
        <Deck />
      </div>
    );
  }
});

module.exports = Home;
