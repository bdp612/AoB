var React = require('react');
var Deck = require('./deck')
var DeckComp = require('./DeckComponent')
var Board = require('./board')

function add_risk_board() {
  var src = "http://cf.geekdo-images.com/images/pic365731_md.jpg";
  show_image("http://cf.geekdo-images.com/images/pic365731_md.jpg", 500, 350, "Risk Board");
}

function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
}

var Home = React.createClass({

  render: function() {

    return(

      <div className="hero-unit">

        <Board />
        <Deck />
        <DeckComp />


      </div>
    );
  }
});

module.exports = Home;
