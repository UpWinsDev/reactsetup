import React from 'react';
import Link from 'next/link'

const ListaClientes: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <h1>
            <Link href="/soultech/soulmed">
              <a>Soulmed</a>
            </Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link href="/soultech/mavicard">
              <a>MaviCard</a>
            </Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link href="/soultech/amparo">
              <a>Amparo</a>
            </Link>
          </h1>
        </li>
      </ul>
      <h3>
        <Link href="/">
          <a>Voltar para o Início</a>
        </Link>
      </h3>
    </div >
  );
}

export default ListaClientes;

