import React from 'react'
import { InputMask } from 'primereact/inputmask';

const FormSectionOne = ({ handleChange1 }) => {
    return (
        <div>
            <section className='form-first-section'>
                <div className='form-logo-container'>
                    <h1 className='garmnt-logo-text'>GARMNT</h1>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Work Order #</label>
                        <input type="number" name="work_order_number" onChange={handleChange1} className='form-input-text' placeholder='ex 123546' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Date</label>
                        <input type="date" name="date" onChange={handleChange1} className='form-input-text' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Customer</label>
                        <input type="text" name="customer" onChange={handleChange1} className='form-input-text' placeholder='John Doe' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Email</label>
                        <input type="email" name="email" onChange={handleChange1} className='form-input-text' placeholder='example@email.com' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Phone</label>
                        <InputMask mask="(999) 999 - 9999" placeholder="(xxx) xxx - xxxx" name="phone" onChange={handleChange1} className='form-input-text' />
                    </div>
                </div>
            </section>
            <section className='form-second-section'>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Street Address</label>
                        <input type="text" name="street_address" onChange={handleChange1} className='form-input-text' placeholder='1234 Street NW' />
                    </div>
                </div>
            </section>
            <section className='form-third-section'>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>City</label>
                        <input type="text" name="city" onChange={handleChange1} className='form-input-text' placeholder='City' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>State/Province</label>
                        <input type="email" name="state" onChange={handleChange1} className='form-input-text' placeholder='State' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Zip/Postal Code</label>
                        <InputMask mask="99999" placeholder="xxxxx" name="zip" onChange={handleChange1} className='form-input-text' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Expedite Order</label>
                        <div className="gap-2 print-location">
                            <div className=''>
                                <p className='print-location-title'>3 day</p>
                                <input type="checkbox" name="three_day" onChange={handleChange1} className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                            <div className=''>
                                <p className='print-location-title'>2 day</p>
                                <input type="checkbox" name="two_day" onChange={handleChange1} className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                            <div className=''>
                                <p className='print-location-title'>1 Day</p>
                                <input type="checkbox" name="one_day" onChange={handleChange1} className="checkbox appearance-none checked:bg-custom-black ..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>Production Date</label>
                        <input type="date" name="production_date" onChange={handleChange1} className='form-input-text-start' />
                    </div>
                </div>
                <div className='align-center'>
                    <div className='input'>
                        <label htmlFor="" className='form-input-title'>In Hands By</label>
                        <input type="date" name="in_hands_by" onChange={handleChange1} className='form-input-text-due' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormSectionOne