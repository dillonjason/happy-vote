class Input extends React.Component {
    render() {
        return(
            <div className="input-component">
                <input type={this.props.type} required />
                <label className="floatingLabel">{this.props.label}</label>
            </div>
        );
    }
}

Input.defaultProps = {};

Input.propTypes = {
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired
};

export default Input;