import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { headContainerAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components';
import FormSectionOne from '../components/FormSectionOne';
import FormSectionTwo from '../components/FormSectionTwo';
import FormSectionThree from '../components/FormSectionThree';
import WorkOrderCustomerSection from '../components/WorkorderCustomerSection';
import WorkOrderProductSection from '../components/WorkOrderProductSection';

import 'primeicons/primeicons.css';

const WorkOrder = () => {

    const [customerSection, setCustomerSection] = useState(WorkOrderCustomerSection);
    const [productSection, setProductSection] = useState(WorkOrderProductSection);
    const [previewData, setPreviewData] = useState([]);

    const handleChange1 = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setCustomerSection({
            ...customerSection,
            [e.target.name]: value,
        });
    };
    const handleChange2 = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setProductSection({
            ...productSection,
            [e.target.name]: value,
        });
    };
    const handleSubmit = () => {
        setPreviewData([...previewData, {...productSection, isEditing: false}]);
        setProductSection(WorkOrderProductSection);
    };
    const handleProductDelete = (deleteIdx) => {
        const filteredPreviewData = previewData.filter((_, index) => index !== deleteIdx);
        setPreviewData(filteredPreviewData);
    }
    const handleEdit = (editIdx) => {
        const editPreviewData = [...previewData];
        editPreviewData[editIdx].isEditing = true;
        setPreviewData(editPreviewData);
    };
    const handleSave = (saveIdx) => {
        const updatedPreviewData = [...previewData];
        updatedPreviewData[saveIdx] = {...updatedPreviewData[saveIdx], isEditing: false};
        setPreviewData(updatedPreviewData);
    };
    const handleProductChange = (index, field, value) => {
        const updatedPreviewData = [...previewData];
        updatedPreviewData[index][field] = value;
        setPreviewData(updatedPreviewData);
    };
    return (
        <AnimatePresence>
            <>
                <motion.section className='workorder-box' {...slideAnimation('left')}>
                    <motion.header >
                        <h1 className='workorder-title'>Work Order</h1>
                        <p className='w-4/6  text-custom-black mb-12 m-auto text-start'>Unleash efficiency with GARMNT's work order form. Fill in your details, specify your product preferences, and let us take care of the rest. Our form ensures a smooth production run, whether you're ordering for a small team or a major event. Plus, we guarantee your privacy. We don't store your data, we just use it to process your order. Get started now for a streamlined, secure ordering experience!</p>
                        <p className='w-4/6 text-custom-black mb-12 m-auto text-start'>Experience GARMNT at its best by creating an account today! Benefit from exclusive features like editing product rows, saving customer details, and retaining orders.  <strong><Link to={'/register'}>Sign up now</Link></strong> for a seamless, enhanced GARMNT experience.</p>
                    </motion.header>
                    <motion.div className='workorder-content pb-24' {...headContainerAnimation}>
                        <motion.div {...slideAnimation}>
                            <div className='form-container'>
                                <form onSubmit={e => e.preventDefault()} className='workorder-form'>
                                    <section className='mb-8 border-2 border-custom-black p-5 rounded-md'>
                                        <FormSectionOne handleChange1={handleChange1} />
                                    </section>
                                    <section className='mb-8 border-2 border-custom-black p-5 rounded-md'>
                                        <FormSectionTwo previewData={previewData} handleProductDelete={handleProductDelete} handleEdit={handleEdit} handleSave={handleSave} handleProductChange={handleProductChange}/>
                                    </section>
                                </form>
                                <form onSubmit={e => e.preventDefault()} className='workorder-form'>
                                    <section className='mb-8 border-2 border-custom-black p-5 rounded-md'>
                                        <FormSectionThree handleChange2={handleChange2} productSection={productSection} />
                                        <div className='flex justify-end pt-8'>
                                            <CustomButton
                                                handleClick={() => { handleSubmit(); }}
                                                title="Add Product"
                                                customStyles="w-fit text-white px-4 py-2.5 font-bold transition ease-in-out delay-50 bg-custom-black hover:-translate-y-1 hover:scale-110 hover:bg-custom-gray hover:text-custom-black duration-500 ...pi-file"
                                            />
                                        </div>
                                    </section>
                                </form>
                                <div className='flex justify-end'>
                                    <Link to={'/printform'} state={[customerSection, previewData]}>
                                        <CustomButton
                                            title="Print My Work Order"
                                            customStyles="w-fit text-white px-4 py-2.5 font-bold transition ease-in-out delay-50 bg-custom-black hover:-translate-y-1 hover:scale-110 hover:bg-custom-gray hover:text-custom-black duration-500 ..."
                                        /></Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>
                <motion.div className="absolute z-16 top-9 right-5" {...slideAnimation("right")}>
                    <Link to={'/'}>
                        <CustomButton
                            title="Back"
                            customStyles="w-fit text-white px-4 py-2.5 font-bold transition ease-in-out delay-50 bg-custom-black hover:-translate-y-1 hover:scale-110 hover:bg-custom-gray hover:text-custom-black duration-500 ..."
                        />
                    </Link>
                </motion.div>
            </>
        </AnimatePresence>
    )
}
export default WorkOrder