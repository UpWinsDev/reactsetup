import Image from 'next/image'
import {useAppContext} from './../context/AppContext'

const ImgLogo = ({height}) => {

    const dataDomain = useAppContext();
    const pathName = dataDomain.pathName

    const nomePasta = pathName == undefined ? 'default' : pathName;

    const localImg = `/img/${nomePasta}/logo.png`

    return (

        <div className="mx-auto" style={{ height: height, position: 'relative'}}>
            <Image src={localImg} layout='fill'/>
        </div>
    )
}
export default ImgLogo
