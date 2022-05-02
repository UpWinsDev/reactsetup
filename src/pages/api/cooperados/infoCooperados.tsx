export default async (req, res) => {
  // revalidar uma página que está com um tempo determinado de revalidação (ex: a cada 5 horas)
  // await res.unstable_revalidate('/loadRepositories')

  return res.status(200).json(
    [
      {
        "nome": "Soulmed",
        "cnpj": "31.296.400/0001-10",
        "id": "11",
        "plataforma": "app-soulmed",
        "plataformaExclusiva": "44",
        "logo": "imagem_b64",
        "endereco": "Av. Ipiranga 6681 prédio 96 A/ sala 204, Porto Alegre-RS CEP:90619-900",
        "copyright": "Copyright © 2022 - Soulmed Todos os Direitos Reservados"
      }
    ]
  )
}
