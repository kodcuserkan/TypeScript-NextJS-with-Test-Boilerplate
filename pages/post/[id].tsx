import React from 'react'

interface IPost {
  post: {
    userId: number
    id: number
    title: string
    body: string
  }
}

const Post = ({ post }: IPost) => {
  const { body, id, title, userId } = post

  return (
    <div className="post">
      <h1>
        {title} - {id}
      </h1>
      <h3>User ID: {userId}</h3>
      <p>{body}</p>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query

  let post = null

  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => (post = json))

  return {
    props: {
      post,
    },
  }
}

export default Post
