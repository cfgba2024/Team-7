import ActCards from "./ActCards";
import criadechanchos from "../assets/criadechanchos.jpg"
import abejas from "../assets/abejas.jpg"
import huerta from "../assets/huerta.jpg"
import CustomCard from "./CustomCard";

export default function ActividadesSection(){
    return(
        <>
            <section className="bg-cover bg-center h-screen  flex items-center justify-center">
                <div >
                    <h1 className="text-3xl font-bold underline p-10">Mis Actividades</h1>
                    <div className="gap-10 flex justify-between ">
                        <CustomCard titulo={"Cria de chanchos"} imagen = {criadechanchos}/>
                        <CustomCard titulo={"Cria de abejas"} imagen = {abejas}/>
                        <CustomCard titulo={"Huertas"} imagen = {huerta}/>
                    </div>
                    
                    
                </div>
                


            </section>
        </>
    )
}