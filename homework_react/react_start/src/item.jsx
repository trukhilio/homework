var React = require('react');
var Content = require('./content');
var Header = require('./header');
var Footer = require('./footer');

module.exports = React.createClass({
    render: function() {
        var list = this.props.itemData.map(function(contentProps){
            return <Content {...contentProps} />
        });

        var headerCont = this.props.constData.map(function(headerProps){
            return <Header {...headerProps} />
        });

        var footerCont = this.props.constData.map(function(footerProps){
            return <Footer {...footerProps} />
        });

        return <div>
            {headerCont}
            {list}
            {footerCont}
        </div>
    }
});