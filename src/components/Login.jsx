import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const API = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/';
	const navigate = useNavigate();
	
	const myData = async (token) => {
		try {
			const response = await fetch(`${API}/users/me`, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
			});
			const result = await response.json();
			console.log('mydata', result);
			return result
		} catch (error) {
			console.error(error);
		}
	}

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
      setToken(result.data.token);
      alert(result.data.message);
    } catch (error) {
      console.error(error);
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
				console.log('loginUser', result);
				alert(result.data.message);
				setToken(result.data.token);
				myData(result.data.token);
				navigate('/home')
				return result
		} catch (error) {
			console.error(error);
		}
}

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
