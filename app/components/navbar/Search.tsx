const Search = () => {
  return (
    <div className=' hidden md:flex flex-1'>
      <input
        className='py-2 px-3 rounded-tl-md rounded-bl-md border-none outline-none flex flex-1'
        type='text'
        placeholder='Arama Yap...'
      />
      <button className='p-2 rounded-tr-md rounded-br-md bg-orange-800 text-sm border-transparent'>
        Ara
      </button>
    </div>
  )
}
export default Search
