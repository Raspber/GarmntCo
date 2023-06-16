import React from 'react'
import { InputMask } from 'primereact/inputmask';

const FormSectionOne = () => {
    return (
        <div>
            <section className='form-first-section'>
                                        <div className='form-logo-container'>
                                            <h1 className='garmnt-logo-text'>GARMNT</h1>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Work Order #</label>
                                                <input type="number" className='form-input-text' placeholder='ex 123546' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Date</label>
                                                <input type="date" className='form-input-text' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Customer</label>
                                                <input type="text" className='form-input-text' placeholder='John Doe' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Email</label>
                                                <input type="email" className='form-input-text' placeholder='example@email.com' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Phone</label>
                                                <InputMask mask="(999) 999 - 9999" placeholder="(xxx) xxx - xxxx" className='form-input-text' />
                                            </div>
                                        </div>
                                    </section>
                                    <section className='form-second-section'>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Street Address</label>
                                                <input type="text" className='form-input-text' placeholder='1234 Street NW' />
                                            </div>
                                        </div>
                                    </section>
                                    <section className='form-third-section'>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>City</label>
                                                <input type="text" className='form-input-text' placeholder='City' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>State/Province</label>
                                                <input type="email" className='form-input-text' placeholder='State' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Zip/Postal Code</label>
                                                <InputMask mask="99999" placeholder="xxxxx" className='form-input-text' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Expedite</label>
                                                <input type="text" className='form-input-text' placeholder='John Doe' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>Production Date</label>
                                                <input type="date" className='form-input-text-start' />
                                            </div>
                                        </div>
                                        <div className='align-center'>
                                            <div className='input'>
                                                <label htmlFor="" className='form-input-title'>In Hands By</label>
                                                <input type="date" className='form-input-text-due' />
                                            </div>
                                        </div>
                                    </section>
        </div>
    )
}

export default FormSectionOne