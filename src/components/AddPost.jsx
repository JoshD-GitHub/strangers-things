import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = ({ token }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');

	const API = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/';
	const navigate = useNavigate();
	
	const makePost = async () => {

    try {
      const response = await fetch(`${API}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
          }
        })
      });
      const result = await response.json();
      console.log(result);
			alert('Item Added!');
			navigate('/home')
      return result
    } catch (error) {
			alert('You must be logged in!')
      console.error(error);
    }
  }

  return (
		<>
			<h1>Add Listing</h1>
			<form>
				Title:
				<input value={title} onChange={(event) => setTitle(event.target.value)}/>
			</form>
			<form>
				Description:
				<input value={description} onChange={(event) => setDescription(event.target.value)}/>
			</form>
			<form>
				Price:
				<input value={price} onChange={(event) => setPrice(event.target.value)}/>
			</form>
			<form>
				Location:
				<input />
			</form>
			<button onClick={() => makePost()}>Add Post</button>
		</>
  )
};

export default AddPost;