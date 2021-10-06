import React from 'react'
import Link from 'next/link'

const Posts = (): JSX.Element => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])

  return (
    <div className="posts">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`post/${post.id}`}>
              <a>Post ID: {post.id}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
