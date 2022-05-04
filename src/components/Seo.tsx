import Head from 'next/head'

interface Props {
    title:string,
    description?: string
}

//description - não é obrigatorio

const Seo = ({title, description}: Props) => {
    return (
        <Head>
            <title>{title}</title>
            {description && <meta name='description' content={description}/>}
            <link rel='icon' href=''/>
        </Head>
    )
}

export default Seo