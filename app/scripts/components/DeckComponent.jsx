var React = require('react');
var actions = require("../actions/DataActionCreators")
var DeckStore = require('../stores/DeckStore')

var DeckComponent = React.createClass({
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
  },

  // getInitialState: function() {
  //   var data = DataStore.getAll();
  //   return {
  //     tasks: []
  //   }
  // },

  _onChange: function() {
    this.setState(DeckStore.getAll());
  },

  componentDidMount: function() {
    DeckStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DeckStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick: function() {
    actions.drawCard({
      id: 1
    })
  },

  render: function() {
    return (
      <p>Hello, world!</p>
      //<Button onClick={this.handleAddNewClick}>Add New</Button>
    );
  }
});

module.exports = DeckComponent;
