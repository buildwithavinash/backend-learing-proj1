import { useState } from "react"

const Feed = () => {
    const [posts, setPosts] = useState([]);

  return (
    <section>

        <h1>Feed</h1>

        <div className="feed__section posts__container">
            {posts.map((post)=> (
                <div key={post.id} className="post__container">
                    <div className="post__img__container">
                        <img src={post.postUrl} alt="" />
                    </div>

                    <p className="post__caption">{post.postCaption}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Feed