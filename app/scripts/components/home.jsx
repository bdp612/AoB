var React = require('react');

var Deck = require('./deck')
var DeckComp = require('./DeckComponent')

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
        <DeckComp />

      </div>
    );
  }
});

module.exports = Home;
