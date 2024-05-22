import { Fragment, useRef, useState } from 'react'
import { Dialog, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Book } from '../model/Book'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function NewBook(promp: { handleClick: () => void, addNewBook: (newBook: Book) => void}) {
    // const [open, setOpen] = useState(true);

    const cancelButtonRef = useRef(null)

    const [formData, setFormData] = useState<Book>({ name: "", author: "", pages:0 });

    function handleSubmit(event: any) {
        console.log("New Book",formData);
        event.preventDefault();
        promp.addNewBook(formData);
        promp.handleClick();
    }

    function handleChange(event: any) {
        console.log("EVENT", event)
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }


    return (
        <Transition.Root show={true} as={Fragment}>
            <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={() => promp.handleClick()}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="">
                                        {/* sm:flex sm:items-start */}
                                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div> */}
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                New Book Information
                                            </DialogTitle>
                                            <div className="mt-2">
                                                {/* <p className="text-sm text-gray-500">
                                                    Are you sure you want to deactivate your account? All of your data will be permanently
                                                    removed. This action cannot be undone.
                                                </p> */}
                                                <form id='my-form' onSubmit={handleSubmit}>
                                                    <div className='flex flex-col'>
                                                        <div className='m-2'>
                                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Name
                                                            </label>
                                                            <input name="name" type="text" className="w-full mt-1 px-2 rounded-md border-1" placeholder="e.g Harry Potter" value={formData?.name} onChange={handleChange} />
                                                        </div>

                                                        <div className='m-2'>
                                                            <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Author
                                                            </label>
                                                            <input name="author" type="text" className="w-full mt-1 px-2 rounded-md border-1" placeholder="e.g J. K. Rowling" value={formData?.author} onChange={handleChange} />
                                                        </div>
                                                        <div className='m-2'>
                                                            <label htmlFor="pages" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Pages
                                                            </label>
                                                            <input name="pages" type="number" className="w-full mt-1 px-2 rounded-md border-1" placeholder="90" value={formData?.pages} onChange={handleChange} />
                                                        </div>
                                                        {/* <input className="m-2" placeholder="Pages" /> */}
                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        form='my-form'
                                        type="submit"
                                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    /* onClick={
                                        // () => setOpen(false)
                                        // () => promp.handleClick()
                                    } */
                                    >
                                        Add Book
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={
                                            // () => setOpen(false)
                                            () => promp.handleClick()
                                        }
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default NewBook;