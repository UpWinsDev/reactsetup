import Image from 'next/image'

export default function ImgExport(props){
    return (
        <Image src={"/img/"+props+"/logo.png"} alt="" width="50" height="150" />
    )
}