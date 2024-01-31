import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerts"
import { RotatingLines } from "react-loader-spinner"

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/categorias")
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`)

      ToastAlerta('Categoria apagada com sucesso', 'sucesso')

    } catch (error) {
      ToastAlerta('Erro ao apagar a Categoria', 'erro')
    }

    retornar()
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar a categoria a seguir?</p>
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header
          className='py-2 px-6 bg-fountain-blue-500 text-white font-bold text-2xl'>
          Categoria
        </header>
        <p className='p-8 text-3xl bg-slate-00 h-full'>{categoria.nome}</p>
        <div className="flex">
          <button
            className='font-bold bg-fountain-blue-500 hover:bg-fountain-blue-800 w-full py-2'
            onClick={retornar}>
            Não
          </button>
          <button
            className='w-full font-bold bg-red-400 hover:bg-red-700 flex items-center justify-center'
            onClick={deletarCategoria}>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
              <span>Sim</span>

            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria