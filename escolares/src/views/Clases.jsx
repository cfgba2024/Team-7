import ActividadesSection from "../components/ActividadesSection";
import SubirArchivoSection from "../components/SubirArchivoSection";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Clases(){
    return(

        <div w-full>
            <Header/>
            <Navbar/>
            <ActividadesSection/>
            <SubirArchivoSection/>

        </div>
    )
}