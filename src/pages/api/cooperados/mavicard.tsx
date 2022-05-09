export default async (req, res) => {
  // revalidar uma página que está com um tempo determinado de revalidação (ex: a cada 5 horas)
  // await res.unstable_revalidate('/loadRepositories')

  return res.status(200).json(
    {
      "nome": "Mavicard",
      "cnpj": "31.296.400/0001-10",
      "id": "3",
      "plataforma": "app-mavicard",
      "plataformaExclusiva": "89",
      "logo": "imagem_b64",
      "endereco": "Recife-PE",
      "copyright": "Copyright © 2022 - Mavicard Todos os Direitos Reservados"
    }
  )
}