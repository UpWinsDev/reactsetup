import { useRouter } from 'next/router'
import Header from '../../components/Header'

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <Header />
      <h1>Slug: {slug}</h1>
    </>
  )
}

export default Comment
