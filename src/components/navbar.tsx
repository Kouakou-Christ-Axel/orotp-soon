import LogoSrc from "../assets/logo.png";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6";
import {motion} from "motion/react";
import {IconType} from "react-icons";
import {MdEmail, MdPhone} from "react-icons/md";
import Tooltip from "./tooltip.tsx";

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

const socialLinks = [
    {Icon: FaFacebook, href: "#"},
    {Icon: FaTwitter, href: "#"},
    {Icon: FaInstagram, href: "#"},
];

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
            <div className="flex items-center space-x-2 md:space-x-4">
                {socialLinks.map(({Icon, href}, i) => (
                    <SocialButton key={i} Icon={Icon} href={href}/>
                ))}
                <Tooltip
                    content="+225 27 22 24 14 05"
                    className="text-nowrap"
                >
                    <motion.a
                        className="transition-colors duration-300 hover:bg-[#f0f0f5] hover:text-[#18171a] text-secondary px-4 py-2 rounded-full md:flex items-center md:space-x-2"
                        href="tel:+2252722241405"
                    >
                        <MdPhone className="size-5"/>
                        <span className="hidden md:inline text-sm">Tel</span>
                    </motion.a>
                </Tooltip>
                <Tooltip
                    content="contact@orotp.com"
                >
                    <motion.a
                        className="ring-1 ring-primary text-primary px-4 py-2 rounded-full md:flex items-center md:space-x-2"
                        href="mailto:contact@orotp.com"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.9}}
                        transition={{duration: 0.3}}
                    >
                        <MdEmail className="size-5"/>
                        <span className="hidden md:inline text-sm">Email</span>
                    </motion.a>
                </Tooltip>
            </div>
        </header>
    );
}

function SocialButton({Icon, href}: { Icon: IconType; href: string }) {
    return (
        <motion.a
            whileHover={{scale: 1.2, color: "var(--color-primary)"}}
            whileTap={{scale: 0.8}}
            href={href}
            target={"_blank"}
            rel={"noreferrer"}
        >
            <Icon className="size-5"/>
        </motion.a>
    );
}

export default Navbar;