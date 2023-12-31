import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { useState } from 'react'
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
    fadeAnimation
} from '../config/motion';
import state from '../store';

import { Sidebar } from 'primereact/sidebar'
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const Home = ({logoutMessage}) => {
    const snap = useSnapshot(state);
    const [visibleRegister, setVisibleRegister] = useState(false);
    const [logInVisible, setLogInVisible] = useState(false);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section
                    className="home"
                    {...slideAnimation('left')}
                >
                    {logoutMessage &&  <p>{logoutMessage}</p>}
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
                                Need help creating work orders for your screen printing business? Start Here. Upload your order's graphic design onto our new 3D customizer. After, create and print your work order! <strong>It's that simple.</strong>
                            </p>
                            <CustomButton
                                type="filled"
                                title="Try Now"
                                handleClick={() => [state.intro = false, state.customizer = true]}
                                customStyles=" w-fit text-white px-4 py-2.5 font-bold text-sm transition ease-in-out delay-50 bg-custom-black hover:-translate-y-1 hover:scale-110 hover:bg-custom-gray hover:text-custom-black duration-300 ... animate-bounce"
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="absolute z-10 top-8 right-36"
                        {...fadeAnimation}
                    >
                        <Sidebar visible={visibleRegister} onHide={() => setVisibleRegister(false)} position="right">
                            <RegisterForm/>
                        </Sidebar>
                        <CustomButton
                            handleClick={() => setVisibleRegister(true)}
                            title="Register"
                            customStyles="nav-buttons mr-4"
                            
                        />
                        <Sidebar visible={logInVisible} onHide={() => setLogInVisible(false)} position="right">
                            <LoginForm/>
                        </Sidebar>
                        <CustomButton
                            handleClick={() => setLogInVisible(true)}
                            title="Sign In"
                            customStyles="nav-buttons"
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home