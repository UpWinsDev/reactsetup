import React from 'react'
// import Head from 'next/head'
import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export default function Soultech({ cliente }) {
  const router = useRouter()
  const { idST } = router.query
  // console.log(cliente.nome)
  // console.log(id)

  return (
    <body>
      <h1>
        Bem vindo {idST}
      </h1>
      <h1>Meu Nome é: {cliente.nome}</h1>
      <h1>Meu id é: {cliente.id}</h1>
      <h1>Meu CNPJ é: {cliente.cnpj}</h1>
      <h1>Meu Endereço é: {cliente.endereco}</h1>
      <h1>Meu Copyright é: {cliente.copyright}</h1>
      <h1>Minha Logo é: {cliente.logo}</h1>
      <h1>Minha exclusividade é: {cliente.plataformaExclusiva}</h1>
      <h1>O Nome da minha plataforma é: {cliente.plataforma}</h1> <br />

      <h2>
        <Link href="/soultech">
          <a>Voltar</a>
        </Link>
      </h2>
    </body>
  )
}

export async function getStaticProps({ params }) {
  console.log(params)
  const cliente = await fetch(`http://localhost:3000/api/cooperados/${params.idST}`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json()
      }

      throw new Error('Deu Problema')
    })
    .then((respostaEmObjeto) => respostaEmObjeto)

  return {
    props: {
      cliente
    }
  }
}

export async function getStaticPaths() {
  // rodar código aqui
  const req = await fetch('http://localhost:3000/api/cooperados/listaCooperados')
  const data = await req.json()

  const paths = data.map(cliente => {
    return { params: { idST: cliente.nome } }
  })

  return {
    paths,
    fallback: true
  }
}