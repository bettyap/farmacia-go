import ListaCategoria from "../../components/categoria/listaCategoria/ListaCategoria"

function Home() {
  return (
    <>
      <div id="container" className="flex justify-center bg-gradient-to-r from-fountain-blue-400 to-fountain-blue-200">
        <div id="subcontainer" className="container grid grid-cols-2 text-white">
          <div id="texto" className="flex flex-col gap-4 justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">
              Busque os produtos na farmácia para encontrar o que precisa, com categorias como medicamentos
              sem receita, cuidados pessoais e suplementos disponíveis.
            </p>
          </div>

          <div id="imagem" className="flex justify-center">
            <img
              src="https://imgur.com/sdZluVn.png"
              alt="Imagem da Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListaCategoria />
    </>
  )
}

export default Home