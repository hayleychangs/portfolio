import React from "react";
import { BsLinkedin, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin size={25} color="#757575" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
            >
                <BsTwitter size={25} color="#757575" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
            >
                <BsFacebook size={25} color="#757575" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
            >
                <BsInstagram size={25} color="#757575" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;