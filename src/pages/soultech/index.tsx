import Link from 'next/link'

import { GetStaticProps } from 'next'

export default function SoultechList({ nomeCooperados, date }) {
  return (
    <div>
      <main>
        <h1>{date}</h1>
        <br />
        <br />
        <h4>Bem vindo ao Soultech</h4>
        <h5>Escolha um de nossos clientes:</h5>
        <ul>
          {nomeCooperados.map((nome) => (
            <li>
              <h1>
                <Link href={`/soultech/${nome}`}>
                  <a>{nome[0].toUpperCase()}{nome.slice(1)}</a>
                </Link>
              </h1>
              <h2>{
                nome.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase() })
              }</h2 >
            </li>
          ))}
        </ul>
        <br />
        <h3>
          <Link href="/">
            <a>Voltar para o Início</a>
          </Link>
        </h3>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cooperados = await fetch('http://localhost:3000/api/cooperados/listaCooperados')
  const data = await cooperados.json()
  const cooperadosNome = data.map(item => item.nome)

  return {
    props: {
      nomeCooperados: cooperadosNome,
      date: new Date().toISOString()
    },
  }
}