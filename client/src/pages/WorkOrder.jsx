import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { slideAnimation } from '../config/motion';
import { CustomButton } from '../components';


const WorkOrder = () => {
    const snap = useSnapshot(state);

    
    return (
        <AnimatePresence>
            {!snap.intro && !snap.customizer && snap.workorder && (
                <>
                    
                    <motion.div
                        className="absolute z-16 top-9 right-5" {...slideAnimation("right")}
                    >
                        <CustomButton
                            title="Go Back"
                            handleClick={() => [state.intro = false, state.customizer = true, state.workorder = false]}
                            customStyles="w-fit text-white px-4 py-2.5 font-bold transition ease-in-out delay-50 bg-custom-black hover:-translate-y-1 hover:scale-110 hover:bg-custom-gray hover:text-custom-black duration-500 ..."
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default WorkOrder