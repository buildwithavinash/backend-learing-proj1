
const CreatePost = () => {
  return (
    <section className="create__post__section">
            <h1>Create Post</h1>

            <form>
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