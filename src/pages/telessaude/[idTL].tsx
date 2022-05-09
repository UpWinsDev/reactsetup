import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'


const Telessaude = () => {
  const router = useRouter()
  const { idTL } = router.query

  return <>
    <Head>
      <title>Plataforma {idTL}</title>
    </Head>
    <body>
      <Link href="/">
        <a>Voltar ao Início</a>
      </Link>
    </body>
  </>
}

export default Telessaude

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    }
  }
}

