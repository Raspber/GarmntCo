import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { slideAnimation } from '../config/motion';
import { CustomButton } from '../components';

const WorkOrder = () => {

    return (
        <AnimatePresence>
            <>
                <motion.div className="absolute z-16 top-9 right-5" {...slideAnimation("right")}>
                    <Link to='/'>
                        <CustomButton
                            title="Back"
                            customStyles="w-fit text-white px-4 py-2.5 font-bold transition ease-in-out delay-50 bg-custom-black hover:-translate-y-1 hover:scale-110 hover:bg-custom-gray hover:text-custom-black duration-500 ..."
                        />
                    </Link>                </motion.div>
            </>
        </AnimatePresence>
    )
}

export default WorkOrder