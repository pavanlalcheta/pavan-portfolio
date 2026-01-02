import { useState } from "react";

const Navbar = () => {

    const [open,setOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#13151b] border-b border-gray-700 text-white py-3 px-4 z-50">
         <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-[2px]"><a href="#hero">PavanLalcheta</a></h1>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-lg">
                <li className=" text-gray-300 hover:text-blue-500"><a href="#about">About</a></li>
                <li className=" text-gray-300 hover:text-blue-500"><a href="#projects">Projects</a></li>
                <li className=" text-gray-300 hover:text-blue-500"><a href="#skills">Skills</a></li>
                <li className=" text-gray-300 hover:text-blue-500"><a href="#edu">Education</a></li>
                <li className=" text-gray-300 hover:text-blue-500"><a href="#con">Contact </a></li>
            </ul>

            {/* Mobile Menu */}
            <button className="md:hidden text-2xl"
            onClick={()=>setOpen(!open)}>
                ☰
            </button>
         </div>
         
            {open && (
                <ul className="md:hidden mt-4 space-y-3 text-gray-300 text-base transition-all duration-700 ease-in-out">
                    
                    <li className="block hover:text-blue-500"><a href="#about">About</a></li>
                    <li className="block hover:text-blue-500"><a href="#projects">Projects</a></li>
                    <li className="block hover:text-blue-500"><a href="#skills">Skills</a></li>
                    <li className="block hover:text-blue-500"><a href="#edu">Education</a></li>
                    <li className="block hover:text-blue-500"><a href="#con">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;