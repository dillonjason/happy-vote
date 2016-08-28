class HorizontalDivider extends React.Component {
    render(){
        return(
            <div className="horizontal-divider-component">
                {this.props.label && <span className="secondary">{this.props.label}</span>}
            </div>
        );
    }
}

HorizontalDivider.defaultProps = {
    label: ''
};

HorizontalDivider.propTypes = {
    label: React.PropTypes.string.isRequired
};

export default HorizontalDivider