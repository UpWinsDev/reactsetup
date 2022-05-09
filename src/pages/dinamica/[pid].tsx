import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'

const Post = ({ context }) => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <p>Post: {pid}</p>
      <p>Agora são: {context}</p>
      <Link href='/'>
        <a>Voltar ao Início</a>
      </Link>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { context: new Date().toISOString() }, // will be passed to the page component as props
  }
}