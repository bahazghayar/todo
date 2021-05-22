import React, { useContext, useState } from 'react';
import { LoginContext } from './context';
import { If, Else, Then } from 'react-if';

const Login = () => {
	const loginContext = useContext(LoginContext);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function handleChangeUsername(e) {
		setUsername(e.target.value);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		loginContext.login(username, password);
	}

	return (
		<If condition={loginContext.loggedIn}>
			<Then>
				<button onClick={loginContext.logout}>Log Out</button>
			</Then>

			<Else>
				<form onSubmit={handleSubmit}>
					<input type="text" name="username" placeholder="UserName" onChange={handleChangeUsername}/>
					<input type="password" name="password" placeholder="password" onChange={handleChangePassword}/>
					<button>Login</button>
				</form>
			</Else>
		</If>
	);
};

export default Login;