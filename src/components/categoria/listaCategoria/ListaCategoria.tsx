import Categoria from "../../../models/Categoria";
import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import { CirclesWithBar } from "react-loader-spinner";
import CardCategoria from "../cardCategoria/CardCategoria";

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias)
    } catch (error: any) {
      console.error(error)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  return (
    <>
      {categorias.length === 0 && (
        <CirclesWithBar
          height="200"
          width="200"
          color="#094a83"
          outerCircleColor="#094a83"
          innerCircleColor="#094a83"
          barColor="#094a83"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass="flex justify-center m-1"
          visible={true}
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <>
              {categorias.map((categoria) => (
                <>
                  <CardCategoria key={categoria.id} categoria={categoria} />
                </>
              ))}
            </>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategoria