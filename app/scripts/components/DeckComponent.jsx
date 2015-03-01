var React = require('react');

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

  // _onChange: function() {
  //   this.setState(DataStore.getAll());
  // },

  // componentDidMount: function() {
  //   DataStore.addChangeListener(this._onChange);
  // },

  // componentWillUnmount: function() {
  //   DataStore.removeChangeListener(this._onChange);
  // },

  render: function() {
    return (
      <p>Hello, world!</p>
    );
  }
});

module.exports = DeckComponent;
