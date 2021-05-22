import React, { useContext, useState } from 'react';
import { LoginContext } from './context';
import { If, Else, Then } from 'react-if';

const SignUp = () => {

	const loginContext = useContext(LoginContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('user');

	function handleChangeUsername(e) {
		setUsername(e.target.value);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}

	function handleChangeRole(e) {
		setRole(e.target.value);
	}

	function handleSubmitSignup(e) {
		e.preventDefault();
		loginContext.signup(email, username, password, role);
	}

	return (
		<If condition={loginContext.loggedIn}>
			<Then>
				<div></div>
			</Then>
			<Else>
				<form onSubmit={handleSubmitSignup}>
					<input type="email" name="email" placeholder="Email" onChange={handleChangeEmail}/>
					<input type="text" name="username" placeholder="UserName" onChange={handleChangeUsername}/>
					<input type="password" name="password" placeholder="Password" onChange={handleChangePassword}/>
					
					<select name="roles" id="roles" onChange={handleChangeRole}>
						<option value="user">User</option>
						<option value="editor">Editor</option>
						<option value="admin">Admin</option>
					</select>	
						
					<button>SignUp</button>
				</form>
			</Else>
		</If>
	);
};

export default SignUp;