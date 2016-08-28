import Input from '../components/controls/input';
import HorizontalDivider from '../components/general/horizontal-divider';
import Button from '../components/controls/button';
import GoogleButton from '../components/controls/google-button';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Input label="Email" type="text"/>
                <Input label="Password" type="password"/>
                <HorizontalDivider label="Or"/>
                <GoogleButton />
            </div>
        );
    }
}

export default Login;