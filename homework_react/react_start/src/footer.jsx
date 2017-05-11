var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <footer className="footerEl" style={this.props.imageFooterUrl}>
                <address className="footerEl__addr">
                    <img src={this.props.imagePhone} alt='phone number' className={[this.props.classImage, this.props.classItem].join(' ')}/>
                    <p className={this.props.classItem}>
                        {this.props.tel}
                    </p>
                    <img src={this.props.imageMail} alt='phone number' className={[this.props.classImage, this.props.classItem].join(' ')}/>
                    <a href={this.props.address} className={this.props.classItem}>
                        {this.props.addressMail}
                    </a>
                </address>
            </footer>
    }
});