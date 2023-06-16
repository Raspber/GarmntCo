import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useSnapshot } from 'valtio'
import state from '../store' // Replace '../store' with the path to your state

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const snap = useSnapshot(state); // Get a snapshot of your state
    const [selected, setSelected] = useState(snap.products[0]) // Initialize selected with the first object from your state
    
    return (
        <div className='filepicker-container'>
            <div className='flex-1 flex flex-col w-full'>
            <Listbox value={selected} onChange={setSelected} className="absolute left-full ml-3 text-xs">
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-white text-sm">Products</Listbox.Label>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-black sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <img src={selected.img} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                <span className="ml-3 block truncate text-xs">{selected.name}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                                {snap.products.map((product) => (
                                    <Listbox.Option
                                        key={product.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-custom-black text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={product}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <img src={product.img} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                    <span
                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                        {product.name}
                                                    </span>
                                                </div>
                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-custom-black',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
            </Listbox>
            </div>
        </div>
    )
}