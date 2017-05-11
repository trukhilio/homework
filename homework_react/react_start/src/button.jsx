var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <button className="btn" type="button">
            {this.props.title}
        </button>
    }
});