import React, { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery.jsx";
import Navbar from "./scenes/Navbar.jsx";
import DotGroup from "./scenes/DotGroup.jsx";
import Landing from "./scenes/Landing.jsx";

function App() {   
    const [selectedPage, setSelectedPage] = useState("home");
    const isDesktop = useMediaQuery("(min-width: 1060px)");
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    useEffect(() => {
        const handleSCroll = () => {
            if (window.scrollY === 0) setIsTopOfPage(true);
            if (window.scrollY !== 0) setIsTopOfPage(false);
        }    
        window.addEventListener("scroll", handleSCroll);
        return () => window.removeEventListener("scroll", handleSCroll);
    }, []);

    return ( 
        <div className="app bg-white">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}        
            />
            <div className="w-5/6 mx-auto md:h-full">
                {isDesktop && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
                <Landing setSelectedPage={setSelectedPage}/>
            </div>
        </div>
    )
}
export default App;