import React from 'react'
import { InputTextarea } from 'primereact/inputtextarea'

const FormSectionTwo = ({ previewData }) => {

    return (
        <div>
            {(!previewData || previewData.length === 0) ?
                <div className='flex justify-center'>
                    <p className='nothinghere-text animate-pulse'>Submit your first product to the order...</p>
                </div> :
                previewData.map((data, index) => (
                    <div key={index} className='mb-8 border-2 border-custom-black p-5 rounded-md'>
                        <section className='middle-first-section'>
                            <div className='align-center'>
                                <div className='input'>
                                    <label htmlFor="" className='form-input-title'>Product</label>
                                    <input type="text" className='form-input-text' value={data?.product} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='input'>
                                    <label htmlFor="" className='form-input-title'>Style/SKU</label>
                                    <input type="email" className='form-input-text' value={data?.style} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='input'>
                                    <label htmlFor="" className='form-input-title'>Color</label>
                                    <input type="email" className='form-input-text' value={data?.color} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='input'>
                                    <label htmlFor="" className='form-input-title'>Print Location</label>
                                    <div className="gap-2 print-location">
                                        <div className=''>
                                            <p className='print-location-title'>Front</p>
                                            <input type="checkbox" checked={data?.front} className="checkbox appearance-none checked:bg-custom-black ..." disabled />
                                        </div>
                                        <div className=''>
                                            <p className='print-location-title'>Back</p>
                                            <input type="checkbox" checked={data?.back} className="checkbox appearance-none checked:bg-custom-black ..." disabled />
                                        </div>
                                        <div className=''>
                                            <p className='print-location-title'>R.Sleeve</p>
                                            <input type="checkbox" checked={data?.rightSleeve} className="checkbox appearance-none checked:bg-custom-black ..." disabled />
                                        </div>
                                        <div className=''>
                                            <p className='print-location-title'>L.Sleeve</p>
                                            <input type="checkbox" checked={data?.leftSleeve} className="checkbox appearance-none checked:bg-custom-black ..." disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='middle-second-section'>
                            <div className='align-center'>
                                <div className='sizes'>
                                    <label htmlFor="" className='form-input-title'>S</label>
                                    <input type="text" className='shirt-sizes' value={data?.small} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='sizes'>
                                    <label htmlFor="" className='form-input-title'>M</label>
                                    <input type="text" className='shirt-sizes' value={data?.medium} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='sizes'>
                                    <label htmlFor="" className='form-input-title'>L</label>
                                    <input type="text" className='shirt-sizes' value={data?.large} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='sizes'>
                                    <label htmlFor="" className='form-input-title'>XL</label>
                                    <input type="text" className='shirt-sizes' value={data?.xlarge} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='sizes'>
                                    <label htmlFor="" className='form-input-title'>2XL</label>
                                    <input type="text" className='shirt-sizes' value={data?.two_xlarge} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='sizes'>
                                    <label htmlFor="" className='form-input-title'>3XL</label>
                                    <input type="text" className='shirt-sizes' value={data?.three_xlarge} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='sizes'>
                                    <label htmlFor="" className='form-input-title'>4XL</label>
                                    <input type="text" className='shirt-sizes' value={data?.four_xlarge} disabled />
                                </div>
                            </div>
                            <div className='align-center'>
                                <div className='sizes'>
                                    <label htmlFor="" className='form-input-title'>5XL</label>
                                    <input type="text" className='shirt-sizes' value={data?.five_xlarge} disabled />
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className='align-center'>
                                <div className='input'>
                                    <label htmlFor="" className='form-input-title'>Special Instructions/Requets</label>
                                    <InputTextarea autoResize rows={3} cols={30} value={data?.instructions} disabled className='instructions' />
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
        </div>
    )
}

export default FormSectionTwo