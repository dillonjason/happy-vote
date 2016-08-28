class Button extends React.Component {
    render() {
        return(
            <button type="button" className={`button ${this.props.className}`}>{this.props.children}</button>
        );
    }
}

Button.propTypes = {
    className: React.PropTypes.string
};

Button.defaultProps = {
    className: ''
};

export default Button;