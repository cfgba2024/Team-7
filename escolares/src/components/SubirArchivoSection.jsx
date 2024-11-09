import { useNavigate } from "react-router-dom"

export default function SubirArchivoSection() {
    const navigate = useNavigate()

    const handleResultados = () => {
        navigate("/formulario")
      }
    


    return(
        <section className="py-10 px-8 text-center bg-lime-200 text-black">
            <h2 className="text-3xl font-semibold mb-4">CARGA LOS RESULTADOS DE TU ACTIVIDAD</h2>
            <button className="px-6 py-3 bg-yellow-300 text-white font-bold rounded hover:bg-yellow-400"
            onClick={handleResultados}>
                Sube tus resultados
            </button>
        </section>
    )
}