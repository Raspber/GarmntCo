import React from 'react'
import { InputMask } from 'primereact/inputmask';

const PrintFormSectionOne = ({ customerInfo }) => {

    return (
        < div >
            {(!customerInfo || customerInfo.length === 0) ?
                <div className='flex justify-center'>
                    <p className='nothinghere-text animate-pulse'>Nothing To Print. Please Submit Products First!</p>
                </div> :
                <div>
                    <section className='form-first-section'>
                        <div className='form-logo-container'>
                            <h1 className='garmnt-logo-text'>GARMNT</h1>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Work Order #</label>
                                <input type="number" value={customerInfo.work_order_number} name="work_order_number" className='form-input-text' placeholder='ex 123546' readOnly />
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Date</label>
                                <input type="date" name="date" value={customerInfo.date} className='form-input-text' readOnly />
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Customer</label>
                                <input type="text" name="customer" value={customerInfo.customer} className='form-input-text' placeholder='John Doe' readOnly />
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Email</label>
                                <input type="email" name="email" value={customerInfo.email} className='form-input-text' placeholder='example@email.com' readOnly />
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Phone</label>
                                <InputMask mask="(999) 999 - 9999" placeholder="(xxx) xxx - xxxx" name="phone" value={customerInfo.phone} className='form-input-text' readOnly />
                            </div>
                        </div>
                    </section>
                    <section className='form-second-section'>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Street Address</label>
                                <input type="text" name="stree_address" value={customerInfo.street_address} className='form-input-text' placeholder='1234 Street NW' readOnly />
                            </div>
                        </div>
                    </section>
                    <section className='form-third-section'>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>City</label>
                                <input type="text" name="city" value={customerInfo.city} className='form-input-text' placeholder='City' readOnly/>
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>State/Province</label>
                                <input type="email" name="state" value={customerInfo.state} className='form-input-text' placeholder='State' readOnly/>
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Zip/Postal Code</label>
                                <InputMask mask="99999" placeholder="xxxxx" name="zip" value={customerInfo.zip} className='form-input-text' readOnly/>
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Expedite Order</label>
                                <div className="gap-2 print-location">
                                    <div className=''>
                                        <p className='print-location-title'>3 day</p>
                                        <input type="checkbox" name="three_day" value={customerInfo?.three_day} checked={customerInfo?.three_day} className="checkbox appearance-none checked:bg-custom-black ..." readOnly/>
                                    </div>
                                    <div className=''>
                                        <p className='print-location-title'>2 day</p>
                                        <input type="checkbox" name="two_day" value={customerInfo?.two_day} checked={customerInfo?.two_day} className="checkbox appearance-none checked:bg-custom-black ..." readOnly/>
                                    </div>
                                    <div className=''>
                                        <p className='print-location-title'>1 Day</p>
                                        <input type="checkbox" name="one_day" value={customerInfo?.one_day} checked={customerInfo?.one_day} className="checkbox appearance-none checked:bg-custom-black ..." readOnly/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>Production Date</label>
                                <input type="date" name="production_date" value={customerInfo.production_date} className='form-input-text-start' readOnly/>
                            </div>
                        </div>
                        <div className='align-center'>
                            <div className='input'>
                                <label htmlFor="" className='form-input-title'>In Hands By</label>
                                <input type="date" name="in_hands_by" value={customerInfo.in_hands_by} className='form-input-text-due' readOnly/>
                            </div>
                        </div>
                    </section>
                </div>

            }
        </div >
    )
}

export default PrintFormSectionOne