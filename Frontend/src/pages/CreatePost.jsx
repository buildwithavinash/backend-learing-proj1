import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target);

    axios.post('http://localhost:3000/create-post', formData)
    .then(()=> {
        navigate('/feed')
    })
  } 
  return (
    <section className="create__post__section">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
              <div className="image__inp__container">
                <input type="file" name="image" accept="image/*"/>
              </div>
                <input type="text" name="caption" id="post__caption" placeholder="Enter Caption" required/>

                <button type="submit">Submit</button>
            </form>
    </section>
  )
}

export default CreatePost