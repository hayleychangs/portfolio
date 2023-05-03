import React from "react";
import useMediaQuery from "../hooks/useMediaQuery.jsx";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons.jsx";


const Landing = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <section 
            id="home" 
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* IMAGE SECTION */}
            <div
                className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32"
            >
                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                            before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full
                            before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px]"
                            src="assets/profile-image.png"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile-small"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                            max-w-[400px] md:max-w-[600px]"
                        src="assets/profile-image.png"
                    />
                )}
            </div>

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADINGS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, x:-50 },
                            visible: { opacity: 1, x:0 }
                        }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Hayley {""}
                            <span 
                                className="xs:relative xs:text-dark-grey xs:font-semibold z-20
                                    xs:before:content-brush before:absolute before:-left-[25px]
                                    before:-top-[70px] before:z-[-1]"
                            >
                                Chang
                            </span>
                        </p>

                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, dolore.
                        </p>
                    </motion.div>

                    {/* CALL TO ACTIONS */}
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, x:-50 },
                            visible: { opacity: 1, x:0 }
                        }}
                    >
                        <AnchorLink
                            className="bg-gradient-rainblue text-dark-grey rounded-sm py-3 px-7 font-semibold
                                hover:bg-blue hover:text-white transition duration-500"
                            onClick={()=> setSelectedPage("Contact")}
                            href="#contact"
                        >
                            Contact Me
                        </AnchorLink>
                        <AnchorLink
                            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                            onClick={()=> setSelectedPage("Contact")}
                            href="#contact"
                        >
                            <div
                                className="bg-white hover:text-red transition duration-500 w-full h-full flex items-center
                                    justify-center font-playfair px-10"
                            >
                                Let's talk.
                            </div>
                        </AnchorLink>
                        
                    </motion.div>

                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, x:-50 },
                            visible: { opacity: 1, x:0 }
                        }}
                    >
                        <SocialMediaIcons />
                    </motion.div>
                </div>
        </section>
    )
}

export default Landing;