import { useState, useEffect } from "react";

const API = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState('');

	const registerUser = async () => {
    try {
      const response = await fetch(`${API}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      setToken(result.data.token)
      alert(result.data.message)
    } catch (err) {
      console.error(err);
    }
  }

	const loginUser = async (token) => {
		try {
			const response = await fetch(`${API}/users/login`, {
				method: "POST",
				headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(
					{ user: {
						username: username,
						password: password
				} })
			});
				const result = await response.json();
				console.log(result);
				alert(result.data.message)

				return result
		} catch (err) {
			console.error(err);
		}
}

	console.log('token:', token)

  return (
		<>
			<form>
				Username: 
				<input value={username} onChange={(event) => setUsername(event.target.value)}/>
			</form>
			<form>
				Password: 
				<input value={password} onChange={(event) => setPassword(event.target.value)}/>
			</form>
			<button onClick={() => loginUser()}>Login</button>
			<button onClick={() => registerUser()}>Sign Up</button>
		</>
	);
};

export default Login;
