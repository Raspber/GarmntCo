import React from 'react'
import CustomButton from './CustomButton'



const OrderForm = () => {
    const currentDate = new Date();

    return (
        <div className=''>
            <form className=' w-2/3 h-3/5 rounded-md px-2 mx-11 py-2 shadow-lg glassmorphism   overflow-y-auto ...'>
                <div className="border-b border-gray-900/10">
                    <h2 className='  font-bold italic text-custom-black pb-3'>Create A Work Order</h2>
                    <hr />
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border- border-custom-black-light rounded-md">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-xs  font-bold leading-6 text-custom-black">
                                Work Order #:
                            </label>
                            <div>
                                <input
                                    min= "1"
                                    placeholder="Work Order Number"
                                    type="number"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-xs font-bold leading-6 text-custom-black">
                                Date :
                            </label>
                            <div className="">
                                <input
                                    disabled
                                    value={currentDate.toDateString()}
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-xs font-bold leading-6 text-custom-black">
                                Customer Name/Business :
                            </label>
                            <div >
                                <input
                                    placeholder='Full Name or Business'
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label className="block text-xs font-bold leading-6 text-custom-black">
                                Customer Email :
                            </label>
                            <div>
                                <input
                                    placeholder='Customer Email'
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label className="block text-xs font-bold leading-6 text-custom-black">
                                Customer Phone Number :
                            </label>
                            <div>
                                <input
                                    placeholder='ex. (000) 000-000'
                                    max={10}
                                    min={10}
                                    id="number"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="street-address" className="block text-xs font-bold leading-6 text-custom-black">
                                Street Address :
                            </label>
                            <div>
                                <input
                                    placeholder='ex. Cherry Street Rd SE'
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-xs font-bold leading-6 text-custom-black">
                                City :
                            </label>
                            <div>
                                <input
                                    placeholder='ex. Salem'
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-xs font-bold leading-6 text-custom-black">
                                State / Province :
                            </label>
                            <div>
                                <input
                                    placeholder='ex. Oregon'
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-xs font-bold leading-6 text-custom-black">
                                ZIP / Postal code :
                            </label>
                            <div>
                                <input

                                    min={5}
                                    max={5}
                                    placeholder='ex. 97317'
                                    type="number"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label className="block text-xs font-bold leading-6 text-custom-black">
                                Production Date :
                            </label>
                            <div>
                                <input
                                    placeholder='ex. (000) 000-000'
                                    max={10}
                                    min={10}
                                    id="number"
                                    name="email"
                                    type="date"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset hover:custom-gray focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="street-address" className="block text-xs font-bold leading-6 text-custom-black">
                                In Hands By :
                            </label>
                            <div>
                                <input
                                    placeholder='ex. Cherry Street Rd SE'
                                    type="date"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr/>
                    <div className="mt-2 gap-x-4 gap-y-8 sm:grid-cols-6 border-4 p-4 border-custom-black-light rounded-md">
                        <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className="sm:col-span-2 sm:col-start-1 pb-3">
                            <label htmlFor="city" className="block text-xs font-bold leading-6 text-custom-black">
                                Product:
                            </label>
                            <div>
                                <input
                                    placeholder='ex. T-Shirt'
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-xs font-bold leading-6 text-custom-black">
                                Style/SKU:
                            </label>
                            <div>
                                <input
                                    placeholder='ex. G2000'
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-xs font-bold leading-6 text-custom-black">
                                Color:
                            </label>
                            <div>
                                <input
                                    placeholder='ex. Black'
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        </div>
                        <div className='flex text-center'>
                        <div className="sm:col-span-2 p-1">
                            <label htmlFor="postal-code" className="block text-xs font-bold leading-6 text-custom-black">
                                S
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 p-1">
                            <label htmlFor="postal-code" className="block text-xs font-bold leading-6 text-custom-black">
                                M
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 p-1">
                            <label htmlFor="postal-code" className="block text-xs font-bold leading-6 text-custom-black">
                                L
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 p-1">
                            <label htmlFor="postal-code" className="block text-xs font-bold leading-6 text-custom-black">
                                XL
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 p-1">
                            <label htmlFor="postal-code" className="block text-xs font-bold leading-6 text-custom-black">
                                2XL
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 p-1">
                            <label htmlFor="postal-code" className="block text-xs font-bold leading-6 text-custom-black">
                                3XL
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-custom-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-black-light sm:text-xs sm:leading-6"
                                />
                            </div>
                        </div>
                        </div>
                        <CustomButton
                        title="➕ Row"
                        handleClick={() => [state.customizer = false, state.workorder = true]}
                        customStyles="w-fit mt-5 mb-4 px-3 text-xs transition ease-in-out delay-50 bg-custom-black hover:bg-custom-gray hover:text-custom-black duration-500 ..."
                    />
                    </div>
                    <CustomButton
                        type="outline"
                        title="Create Work Order"
                        handleClick={() => [state.customizer = false, state.workorder = true]}
                        customStyles="w-fit mt-5 mb-4 px-3 text-xs transition ease-in-out delay-50 bg-custom-black hover:bg-custom-gray hover:text-custom-black duration-500 ..."
                    />
                </div>
            </form>

        </div>
    )
}

export default OrderForm