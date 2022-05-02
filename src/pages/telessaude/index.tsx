import React from 'react'
import Link from 'next/link'

export default function Telessaude({ nomeCooperados }) {
  return (
    <>
      <main>
        <h2>Bem vindo a plataforma de Agendamentos UL</h2>
        <h3>Escolha um de nossos clientes:</h3>
      </main>
      <div>
        <ul>
          {nomeCooperados.map((nome) => (
            <li>
              <h1>
                <Link href={`/telessaude/${nome}`}>
                  <a>{nome}</a>
                </Link>
              </h1>
            </li>
          ))}
        </ul>
        <br />
        <h3>
          <Link href="/">
            <a>Voltar para o Início</a>
          </Link>
        </h3>
      </div >

    </>
  )
}

export async function getStaticProps() {
  const cooperados = await fetch('http://localhost:3000/api/cooperados/listaCooperados')
  const data = await cooperados.json()
  const cooperadosNome = data.map(item => item.nome)

  return {
    props: {
      nomeCooperados: cooperadosNome,
    },
  }
}