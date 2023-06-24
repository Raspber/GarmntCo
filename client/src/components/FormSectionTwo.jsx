import React from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import 'primeicons/primeicons.css';
import CustomButton from './CustomButton'

const FormSectionTwo = ({ previewData, handleProductDelete, handleEdit, handleSave, handleProductChange }) => {

    return (
        <div>
            {(!previewData || previewData.length === 0) ?
                <div className='flex justify-center'>
                    <p className='nothinghere-text animate-pulse'>Submit your first product to the order...</p>
                </div> :
                previewData.map((data, index) => (
                    <div key={index} className='m-4 border-2 border-custom-gray p-5 rounded-md'>

                        {!data.isEditing ? (
                            <div>
                                <div className='flex flex-row justify-end mb-6'>
                                    <CustomButton
                                        handleClick={() => handleEdit(index)}
                                        title="Edit"
                                        icon="./edit.png"
                                        customStyles="w-fit text-custom-black transition ease-in-out bg-none hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-none duration-1000 ...
                                        mr-4 flex flex-col items-center"
                                    />
                                    <CustomButton
                                        handleClick={() => handleProductDelete(index)}
                                        title=" Delete"
                                        icon='./delete.png'
                                        style='text-align: -webkit-center;'
                                        customStyles="w-fit text-red-800 transition ease-in-out bg-none hover:text-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-1000 ... mr-4 flex flex-col items-center"
                                    />
                                </div>
                                <section className='middle-first-section'>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Product</label>
                                            <input type="text" className='form-input-text' value={data?.product} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Style/SKU</label>
                                            <input type="text" className='form-input-text' value={data?.style} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Color</label>
                                            <input type="text" className='form-input-text' value={data?.color} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Print Location</label>
                                            <div className="gap-2 print-location">
                                                <div className=''>
                                                    <p className='print-location-title'>Front</p>
                                                    <input type="checkbox" checked={data?.front} className="checkbox appearance-none checked:bg-custom-black ..." readOnly />
                                                </div>
                                                <div className=''>
                                                    <p className='print-location-title'>Back</p>
                                                    <input type="checkbox" checked={data?.back} className="checkbox appearance-none checked:bg-custom-black ..." readOnly />
                                                </div>
                                                <div className=''>
                                                    <p className='print-location-title'>R.Sleeve</p>
                                                    <input type="checkbox" checked={data?.right_sleeve} className="checkbox appearance-none checked:bg-custom-black ..." readOnly />
                                                </div>
                                                <div className=''>
                                                    <p className='print-location-title'>L.Sleeve</p>
                                                    <input type="checkbox" checked={data?.left_sleeve} className="checkbox appearance-none checked:bg-custom-black ..." readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='middle-second-section'>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>S</label>
                                            <input type="text" className='shirt-sizes' value={data?.small} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>M</label>
                                            <input type="text" className='shirt-sizes' value={data?.medium} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>L</label>
                                            <input type="text" className='shirt-sizes' value={data?.large} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>XL</label>
                                            <input type="text" className='shirt-sizes' value={data?.xlarge} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>2XL</label>
                                            <input type="text" className='shirt-sizes' value={data?.two_xlarge} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>3XL</label>
                                            <input type="text" className='shirt-sizes' value={data?.three_xlarge} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>4XL</label>
                                            <input type="text" className='shirt-sizes' value={data?.four_xlarge} readOnly />
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>5XL</label>
                                            <input type="text" className='shirt-sizes' value={data?.five_xlarge} readOnly />
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Special Instructions/Requets</label>
                                            <InputTextarea autoResize rows={3} cols={30} value={data?.instructions} className='instructions' readOnly />
                                        </div>
                                    </div>
                                </section></div>
                        ) : (
                            <div>
                                <div className='flex flex-row justify-end mb-6'>
                                    <CustomButton
                                        handleClick={() => handleSave(index)}
                                        title=" Save"
                                        icon="./save.png"
                                        customStyles="w-fit text-lime-800 transition ease-in-out bg-none hover:-translate-y-1 hover:scale-110 hover:text-lime-600 hover:bg-none duration-1000 ...flex flex-col items-center"
                                    />
                                </div>
                                <section className='middle-first-section'>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Product</label>
                                            <input type="text" className='form-input-text' defaultValue={data?.product} onChange={(e) => handleProductChange(index, 'product', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Style/SKU</label>
                                            <input type="text" className='form-input-text' defaultValue={data?.style} onChange={(e) => handleProductChange(index, 'style', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Color</label>
                                            <input type="text" className='form-input-text' defaultValue={data?.color} onChange={(e) => handleProductChange(index, 'color', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Print Location</label>
                                            <div className="gap-2 print-location">
                                                <div className=''>
                                                    <p className='print-location-title'>Front</p>
                                                    <input type="checkbox" defaultChecked={data?.front} className="checkbox appearance-none checked:bg-custom-black ..." onChange={(e) => handleProductChange(index, 'front', e.target.checked)}/>
                                                </div>
                                                <div className=''>
                                                    <p className='print-location-title'>Back</p>
                                                    <input type="checkbox" defaultChecked={data?.back} className="checkbox appearance-none defaultChecked:bg-custom-black ..." onChange={(e) => handleProductChange(index, 'back', e.target.checked)}/>
                                                </div>
                                                <div className=''>
                                                    <p className='print-location-title'>R.Sleeve</p>
                                                    <input type="checkbox" defaultChecked={data?.right_sleeve} className="checkbox appearance-none defaultChecked:bg-custom-black ..." onChange={(e) => handleProductChange(index, 'right_sleeve', e.target.checked)}/>
                                                </div>
                                                <div className=''>
                                                    <p className='print-location-title'>L.Sleeve</p>
                                                    <input type="checkbox" checked={data?.left_sleeve} className="checkbox appearance-none checked:bg-custom-black ..." onChange={(e) => handleProductChange(index, 'left_sleeve', e.target.checked)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='middle-second-section'>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>S</label>
                                            <input type="text" className='shirt-sizes' defaultValue={data?.small} onChange={(e) => handleProductChange(index, 'small', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>M</label>
                                            <input type="text" className='shirt-sizes' defaultValue={data?.medium} onChange={(e) => handleProductChange(index, 'medium', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>L</label>
                                            <input type="text" className='shirt-sizes' defaultValue={data?.large} onChange={(e) => handleProductChange(index, 'large', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>XL</label>
                                            <input type="text" className='shirt-sizes' defaultValue={data?.xlarge} onChange={(e) => handleProductChange(index, 'xlarge', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>2XL</label>
                                            <input type="text" className='shirt-sizes' defaultValue={data?.two_xlarge} onChange={(e) => handleProductChange(index, 'two_xlarge', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>3XL</label>
                                            <input type="text" className='shirt-sizes' defaultValue={data?.three_xlarge} onChange={(e) => handleProductChange(index, 'three_xlarge', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>4XL</label>
                                            <input type="text" className='shirt-sizes' defaultValue={data?.four_xlarge} onChange={(e) => handleProductChange(index, 'four_xlarge', e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='align-center'>
                                        <div className='sizes'>
                                            <label htmlFor="" className='form-input-title'>5XL</label>
                                            <input type="text" className='shirt-sizes' defaultValue={data?.five_xlarge} onChange={(e) => handleProductChange(index, 'five_xlarge', e.target.value)}/>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className='align-center'>
                                        <div className='input'>
                                            <label htmlFor="" className='form-input-title'>Special Instructions/Requets</label>
                                            <InputTextarea autoResize rows={3} cols={30} defaultValue={data?.instructions} className='instructions' onChange={(e) => handleProductChange(index, 'instructions', e.target.value)}/>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    )
}

export default FormSectionTwo