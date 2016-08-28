import View from '../libs/view'
import { Link } from 'react-router'

class Master extends React.Component {
    render() {
        return (
            <View>
                <div className="pure-menu pure-menu-horizontal">
                    <h1>Happy Vote</h1>
                </div>

                <div className="content-wrapper">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </View>
        );
    }
}

export default Master;