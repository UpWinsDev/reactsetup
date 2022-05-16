import Image from 'next/image'

const ImgExport = ({nomePasta, width, height}) => {

    nomePasta = nomePasta == undefined ? 'default' : nomePasta;

    return (
        <Image src={`/img/${nomePasta}/logo.png`} width={width} height={height} priority
         />
    )
}
export default ImgExport
