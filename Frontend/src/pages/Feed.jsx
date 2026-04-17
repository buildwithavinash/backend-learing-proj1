import { useEffect, useState } from "react"
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data.posts);
    })
    }, [])

  return (
    <section>

        <h1>Feed</h1>

        <div className="feed__section posts__container">
            {posts.map((post)=> (
                <div key={post.id} className="post__container">
                    <div className="post__img__container">
                        <img src={post.postImgUrl} className="post__img" alt="" />
                    </div>

                    <p className="post__caption">{post.postCaption}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Feed