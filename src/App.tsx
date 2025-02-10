import "./index.css"
import underConstruction from "./assets/under-construction.svg"
import {motion} from "motion/react"
import {IoMdSend} from "react-icons/io";
import Navbar from "./components/navbar.tsx";
import * as React from "react";
import {useState} from "react";
import Bulldozer from "./components/illustrations/bulldozer.tsx";
import Trucks from "./components/illustrations/trucks.tsx";

function App() {
    const [email, setEmail] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    return (
        <>
            <div className="overflow-hidden flex flex-col min-h-screen container mx-auto w-full">
                <Navbar/>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary-100/50 -z-10">
                </div>
                <div
                    className="flex-1 flex flex-col text-center lg:text-left gap-8 lg:flex-row max-lg:justify-center items-center justify-between px-4 md:px-8 lg:px-16">
                    <div className="relative flex flex-col items-center lg:items-start">
                        <BackgroundIllustration/>
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="text-2xl lg:text-4xl font-bold max-w-lg"
                        >
                            L'excellence en <span className="text-primary">construction</span>, pour des projets qui
                            inspirent.
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 0.7, y: 0}}
                            transition={{duration: 0.5, delay: 0.4}}
                            className={`lg:text-lg mt-4 max-w-xl text-center lg:text-left`}
                        >
                            Nous travaillons d’arrache-pied pour vous offrir l’excellence et l’innovation au service de
                            vos projets futurs. 🛠️✨
                        </motion.p>
                        <motion.div
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.8}}
                            className="flex items-center justify-center mt-8 max-w-sm w-full"
                        >
                            <input
                                value={email}
                                onChange={handleInputChange}
                                type="email"
                                autoComplete={"email"}
                                placeholder="Votre adresse email"
                                className="px-4 py-2 rounded-l-full bg-gray-300 focus:bg-gray-100 transition duration-500 focus:outline-none text-secondary flex-1"
                            />
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="px-4 py-2 bg-secondary text-white rounded-r-full flex items-center space-x-2 text-sm"
                            >
                                <IoMdSend className="size-6"/>
                            </motion.button>
                        </motion.div>
                    </div>
                    <div className="hidden md:block">
                        <motion.img
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.8}}
                            src={underConstruction}
                            alt="Best Place"
                            className="h-[250px] lg:h-[450px]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

function BackgroundIllustration() {
    return (
        <motion.div
            className="absolute inset-0"
            initial={{opacity: 0}}
            animate={{opacity: 0.6}}
            transition={{duration: 2, delay: 0.8}}
        >
            <motion.div className="absolute bottom-1/2 right-1/2 animate-float">
                <Bulldozer
                    className="text-primary-600 size-8"
                />
            </motion.div>
            <motion.div className="absolute -top-10 right-1/3 animate-float delay-200">
                <Trucks
                    className="text-primary-600 size-8"
                />
            </motion.div>
        </motion.div>
    )
}

export default App
