import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const currentDate = new Date();
    const snap = useSnapshot(state);

    const strongStyle = {
        fontWeight: 'bold',
        color: snap.color,
    };
    return (
        <AnimatePresence>
            {snap.intro && (

                <motion.section
                    className="home"
                    {...slideAnimation('left')}
                >
                    <motion.header >
                        <img

                            src='./garmnt_logo.png'
                            alt="logo"
                            className="object-contain"
                        />
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">GARMNT</h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => [state.intro = false, state.customizer = true]}
                                customStyles=" w-fit text-white px-4 py-2.5 font-bold text-sm transition ease-in-out delay-50 bg-custom-black hover:-translate-y-1 hover:scale-110 hover:bg-custom-gray hover:text-custom-black duration-300 ... animate-bounce"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home