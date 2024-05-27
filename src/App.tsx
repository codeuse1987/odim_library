import { useEffect, useState } from 'react'
import './App.css'
import NewBook from './components/newBook'
import Title from './components/title'
import { Book } from './model/Book';
import { CustomBtnParams } from './components/customBtn';
import Tick from './assets/tick.svg';

function App() {

  const [isOpen, setOpen] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([])
  const [book, setBook] = useState<Book>();

  useEffect(() => { console.log("Refeshed") }, [isOpen, books])


  // function handleAddBook() {
  //   console.log("Add Book")
  //   setOpen(!isOpen);
  //   console.log("Clicked", isOpen)
  // }

  function addBookToLibrary(newBook: Book) {
    console.log("Clicked", newBook)
    const index: number = books.findIndex(book => book.id == newBook.id);
    console.log("INDEX", index)
    index > -1 ? books.splice(index, 1, newBook) : books.push(newBook);

  }

  function handleDelete(target: Book) {
    console.log("Delete", target)
    setBooks(books.filter(book => book.id != target.id))
  }
  function openBook(data?: Book) {
    console.log("Book", data);
    setBook(data ? data : undefined);
    setOpen(!isOpen);
    console.log("Clicked", isOpen)
    // return isOpen ? (<NewBook handleClick={openBook} addNewBook={addBookToLibrary} data={data} />) : null
  }
  return (
    <>
      <Title handleClick={openBook} />
      {/* <NewBook /> */}
      {isOpen ? (<NewBook handleClick={openBook} addNewBook={addBookToLibrary} data={book} />) : null}
      <div className='flex justify-center'>
        {books.length > 0 ?
          <table className="mt-5 text-left w-3/4">
              <tr className="border-b-4 ">
                <th className='text-2xl'>Name</th>
                <th className='text-2xl'>Author</th>
                <th className='text-2xl'>Page</th>
                <th className='text-2xl'>Read</th>
                <th className='text-2xl'></th>
              </tr>
            <tbody className="text-left mt-2">
              {books.map(book => {
                return (
                  <tr key={book.id}>
                    <td className='text-xl'>{book.name}</td>
                    <td className='text-xl'>{book.author}</td>
                    <td className='text-xl'>{book.pages}</td>
                    <td className='text-xl'>{book.read ? <img src={Tick} width="50px"/> : null}</td>
                    <td className='flex flex-row gap-3 justify-end'>
                      <CustomBtnParams handleClick={openBook} label={'Update'} class={'bg-green-600 text-white'} data={book} />
                      <CustomBtnParams handleClick={handleDelete} label={'Delete'} class={'bg-red-600 text-white'} data={book} />
                    </td>
                  </tr>)
              })}
            </tbody>
          </table>
          : <h1 className='text-3xl py-3'>No Book</h1>}
      </div>
    </>
  )
}

export default App
