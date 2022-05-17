import Image from 'next/image'
import {useAppContext} from './../context/AppContext'

const ImgExport = ({width, height}) => {

    const dataDomain = useAppContext();
    const pathName = dataDomain.pathName

    const nomePasta = pathName == undefined ? 'default' : pathName;

    return (
        <Image src={`/img/${nomePasta}/logo.png`} width={width} height={height} priority
         />
    )
}
export default ImgExport
