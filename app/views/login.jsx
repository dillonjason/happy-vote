import Input from '../components/controls/input';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Input label="Email" type="text"/>
                <Input label="Password" type="password"/>
            </div>
        );
    }
}

export default Login;