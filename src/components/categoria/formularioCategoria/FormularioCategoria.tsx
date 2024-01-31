import { ChangeEvent, useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerts";
import { RotatingLines } from "react-loader-spinner";

function FormularioCategoria() {

  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {

    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  function retornar() {
    navigate("/categorias")
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)
        ToastAlerta('A categoria foi atualizada com sucesso!', 'sucesso')
      } catch (error: any) {
        ToastAlerta('Erro ao atualizar a categoria.', 'erro')
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)
        ToastAlerta('A categoria foi cadastrada com sucesso!', 'sucesso')
      } catch (error: any) {
        ToastAlerta('Erro ao cadastrar a categoria.', 'erro')


      }
    }
    setIsLoading(false)
    retornar()
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8  font-bold">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className=" font-bold">Categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui sua categoria"
            name='nome'
            className="border-2 border-fountain-blue-500 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-white font-bold bg-fountain-blue-500 hover:bg-fountain-blue-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit">

          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

          }

        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria