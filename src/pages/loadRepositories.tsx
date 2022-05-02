import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'

export default function loadRepositories({ repositories, date }) {
  return (
    <>
      <h1>{date}</h1>
      <div>
        <ul>
          {repositories.map((repo) => (
            <li key={repo}>{repo}</li>
          ))}
        </ul>
        <Link href="/">
          <a>Voltar ao Início</a>
        </Link>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/viniciusdlx/repos')

  const data = await response.json()
  const repositoryNames = data.map(item => item.name)

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString()
    },
    revalidate: 60 * 60 * 4,
  }
}


