export default async (req, res) => {
  // revalidar uma página que está com um tempo determinado de revalidação (ex: a cada 5 horas)
  // await res.unstable_revalidate('/loadRepositories')

  return res.status(200).json(
    [
      {
        "nome": "soulmed",
      },
      {
        "nome": "amparo",
      },
      {
        "nome": "mavicard",
      },
      {
        "nome": "mae-de-deus",
      }
    ]
  )
}
