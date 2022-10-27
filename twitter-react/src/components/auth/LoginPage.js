import {useState} from 'react';
import Button from '../common/Button.js';

const LoginPage = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUserName = event => setUserName(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userName, password)
    }

    return (
        <div>
            <h1>Log in to Twitter</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={handleChangeUserName}/>
                <input type="password" name="password" onChange={handleChangePassword}/>
                <Button type="submit" variant="primary">Log in</Button>
            </form>
        </div>
    )

};

export default LoginPage;