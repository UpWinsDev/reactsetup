import React from 'react'
import Head from "next/head"

const Home: React.FC = () => {
  return (
    <div >
      <Head>
        <title>My setup - react</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <h1 >
          Olá mundo, Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home