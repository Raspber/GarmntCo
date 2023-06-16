import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { headContainerAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components';
import FormSectionOne from '../components/FormSectionOne';
const WorkOrder = () => {

    return (
        <AnimatePresence>
            <>
                <motion.section className='workorder-box' {...slideAnimation('left')}>
                    <motion.header >
                        <h1 className='head-text'>Work Order</h1>
                    </motion.header>
                    <motion.div className='workorder-content' {...headContainerAnimation}>
                        <motion.div {...slideAnimation}>
                            <div className='form-container'>
                                <form action="" className='workorder-form'>
                                    <section>
                                        <FormSectionOne/>
                                    </section>
                                    <section>
                                        second component
                                    </section>
                                    <section>
                                        third component
                                    </section>
                                    <button>submit</button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>
                <motion.div className="absolute z-16 top-9 right-5" {...slideAnimation("right")}>
                    <Link to='/'>
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