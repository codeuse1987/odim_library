import { useEffect, useState } from 'react'
import './App.css'
import NewBook from './components/newBook'
import Title from './components/title'
import { Book } from './model/Book';

function App() {

  const [isOpen, setOpen] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => { console.log("Refeshed") }, [isOpen])


  function handleClick() {
    setOpen(!isOpen);
    console.log("Clicked", isOpen)
  }

  function addBookToLibrary(newBook: Book) {
    console.log("Clicked", newBook)

    books.push(newBook);
  }

  return (
    <>
      <Title handleClick={handleClick} />
      {isOpen ? <NewBook handleClick={handleClick} addNewBook={addBookToLibrary} /> : null};
      {/* <NewBook /> */}
      <div className='flex justify-center'>
        <table className="mt-5 text-left w-3/4 table-auto">
          <thead>
            <tr className="border-b-4">
              <th className='text-2xl'>Name</th>
              <th className='text-2xl'>Author</th>
              <th className='text-2xl'>Page</th>
              <th className='text-2xl'></th>
            </tr>
          </thead>
          <tbody className="text-left mt-2">
            {/* <tr className=''>
              <td className='text-xl'>Name</td>
              <td className='text-xl'>Author</td>
              <td className='text-xl'>90</td>
              <td ></td>
            </tr> */}
            {books.map(book => {
              return (
                <tr className=''>
                  <td className='text-xl'>{book.name}</td>
                  <td className='text-xl'>{book.author}</td>
                  <td className='text-xl'>{book.pages}</td>
                  <td ></td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
