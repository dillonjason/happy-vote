import Button from './button'
import GoogleLogo from '../../images/logos/google.svg?name=Logo'

class GoogleButton extends React.Component {
    render() {
        return(
            <div className="text-center">
                <Button className="google">
                    <GoogleLogo />SIGN IN WITH GOOGLE
                </Button>
            </div>
        );
    }
}

export default GoogleButton;