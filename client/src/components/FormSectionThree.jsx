import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea'

const FormSectionThree = ({ handleChange2, productSection }) => {
    return (
        <div>
            <section className='middle-first-section'>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Product</label>
                        <input type="text" name="product" value={productSection.product} onChange={handleChange2} className='form-input-text' placeholder='Insert Product Name' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Style/SKU</label>
                        <input type="text" name="style" value={productSection.style} onChange={handleChange2} className='form-input-text' placeholder='Insert Style/SKU' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Color</label>
                        <input type="text" name="color" value={productSection.color} onChange={handleChange2} className='form-input-text' placeholder='Insert Product Color' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Print Location</label>
                        <div className="gap-2 print-location">
                            <div className=''>
                                <p className='print-location-title'>Front</p>
                                <input type="checkbox" name="front" checked={productSection.front} onChange={handleChange2} className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                            <div className=''>
                                <p className='print-location-title'>Back</p>
                                <input type="checkbox" name="back" checked={productSection.back} onChange={handleChange2} className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                            <div className=''>
                                <p className='print-location-title'>R.Sleeve</p>
                                <input type="checkbox" name="rightSleeve" checked={productSection.rightSleeve} onChange={handleChange2} className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                            <div className=''>
                                <p className='print-location-title'>L.Sleeve</p>
                                <input type="checkbox" name="leftSleeve" checked={productSection.leftSleeve} onChange={handleChange2} className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='middle-second-section'>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>S</label>
                        <input type="text" name="small" onChange={handleChange2} value={productSection.small} className='shirt-sizes' placeholder='0' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>M</label>
                        <input type="text" name="medium" onChange={handleChange2} value={productSection.medium} className='shirt-sizes' placeholder='0' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>L</label>
                        <input type="text" name="large" onChange={handleChange2} value={productSection.large} className='shirt-sizes' placeholder='0' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>XL</label>
                        <input type="text" name="xlarge" onChange={handleChange2} value={productSection.xlarge} className='shirt-sizes' placeholder='0' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>2XL</label>
                        <input type="text" name="two_xlarge" onChange={handleChange2} value={productSection.two_xlarge} className='shirt-sizes' placeholder='0' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>3XL</label>
                        <input type="text" name="three_xlarge" onChange={handleChange2} value={productSection.three_xlarge} className='shirt-sizes' placeholder='0' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>4XL</label>
                        <input type="text" name="four_xlarge" onChange={handleChange2} value={productSection.four_xlarge} className='shirt-sizes' placeholder='0' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>5XL</label>
                        <input type="text" name="five_xlarge" onChange={handleChange2} value={productSection.five_xlarge} className='shirt-sizes' placeholder='0' />
                    </div>
                </div>
            </section>
            <section>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Special Instructions/Requets</label>
                        <InputTextarea autoResize rows={3} cols={30} name="instructions" onChange={handleChange2} value={productSection.instructions} className='instructions' placeholder='Ex. Please dont print (4-S) (9-L) (1-3xl) with the back print, ' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormSectionThree