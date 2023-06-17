import React from 'react'
import { InputMask } from 'primereact/inputmask';


const FormSectionTwo = () => {
    return (
        <div>
            <section className='middle-first-section'>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Product</label>
                        <input type="text" className='form-input-text' placeholder='api info here' disabled />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Style/SKU</label>
                        <input type="email" className='form-input-text' placeholder='api info here' disabled />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Color</label>
                        <input type="email" className='form-input-text' placeholder='api info here' disabled />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Print Location</label>
                        <div className="gap-2 print-location">
                            <div className=''>
                                <p className='print-location-title'>Front</p>
                                <input type="checkbox" className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                            <div className=''>
                                <p className='print-location-title'>Back</p>
                                <input type="checkbox" className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                            <div className=''>
                                <p className='print-location-title'>R.Sleeve</p>
                                <input type="checkbox" className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                            <div className=''>
                                <p className='print-location-title'>L.Sleeve</p>
                                <input type="checkbox" className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='middle-second-section'>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>S</label>
                        <input type="text" className='shirt-sizes' placeholder='api info'/>
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>M</label>
                        <input type="text" className='shirt-sizes' placeholder='api info'/>
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>L</label>
                        <input type="text" className='shirt-sizes' placeholder='api info'/>
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>XL</label>
                        <input type="text" className='shirt-sizes' placeholder='api info'/>
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>2XL</label>
                        <input type="text" className='shirt-sizes' placeholder='api info'/>
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>3XL</label>
                        <input type="text" className='shirt-sizes' placeholder='api info'/>
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>4XL</label>
                        <input type="text" className='shirt-sizes' placeholder='api info'/>
                    </div>
                </div>
                <div className='align-center'>
                    <div className='sizes'>
                        <label htmlFor="" className='form-input-title'>5XL</label>
                        <input type="text" className='shirt-sizes' placeholder='api info'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormSectionTwo