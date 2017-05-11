var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
    render: function() {
        return <section className="content">
                <div className="content__image">
                    <img src={this.props.imageSrc}/>
                </div>
                <div className="content__info">
                    <h2>
                        {this.props.topic}
                    </h2>
                    <p>
                        {this.props.text}
                    </p>
                    <Button title={this.props.title}/>
                </div>
            </section>
    }
});