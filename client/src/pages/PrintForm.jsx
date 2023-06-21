import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PrintFormSectionOne from '../components/PrintFormSectionOne'
import PrintFormSectionTwo from '../components/PrintFormSectionTwo';

const PrintForm = () => {
    const formInfo = useLocation();
    useEffect(() => {
        window.print();
    }, []);
    return (
        <div className='printform-form-container'>
            <form className='workorder-form'>
                <section className='mb-8 border-2 border-custom-black p-5 rounded-md'>
                    <PrintFormSectionOne customerInfo={formInfo.state[0]} />
                </section>
                <section>
                    <PrintFormSectionTwo formInfo={formInfo.state[1]} />
                </section>
            </form>
        </div>
    )
}

export default PrintForm