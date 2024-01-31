
function Navbar() {
  return (
    <div className='w-full bg-gradient-to-r from-fountain-blue-800 to-fountain-blue-500  text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
        <a href='/' className="text-2xl font-bold">Farmácia</a>
        <div className='flex gap-4'>
          Produtos
          Categorias
          Cadastrar Categoria
        </div>
      </div>
    </div>
  )
}

export default Navbar