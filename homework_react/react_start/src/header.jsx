var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <header className="headerEl">
                <img src={this.props.imageHeaderUrl} alt="headerImage" className="headerEl__banner"/>
            </header>
    }
});