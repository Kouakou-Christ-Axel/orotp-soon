import LogoSrc from "../../public/logo.png";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6";
import {motion} from "motion/react";

const itemVariants = {
    hidden: {opacity: 0, x: -40},
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.3,
        },
    }),
};

function Navbar() {
    return (
        <header className="flex items-center justify-between w-full h-20 px-4 md:px-8 lg:px-16">
            <motion.a
                className="text-4xl text-primary"
                href="#"
                initial="hidden"
                animate="visible"
                custom={0}
                variants={itemVariants}
            >
                <img src={LogoSrc} alt="Logo" className="h-14"/>
            </motion.a>
            <div className="flex items-center space-x-4">
                {[FaFacebook, FaTwitter, FaInstagram].map((Icon, index) => (
                    <motion.a
                        key={index}
                        initial="hidden"
                        animate="visible"
                        custom={index + 1}
                        variants={itemVariants}
                        whileHover={{scale: 1.2, color:"var(--color-primary)"}}
                        whileTap={{scale: 0.8}}
                        href="#"
                    >
                        <Icon className="size-5"/>
                    </motion.a>
                ))}
            </div>
        </header>
    );
}

export default Navbar;