import { useState } from 'react';
import { FaBars, FaPlus } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav 
        className="max-w-5xl h-[70px] mx-auto flex items-center justify-between px-4 py-5">
            <h1 className="text-gray-800 text-2xl uppercase font-semibold tracking-widest font-['kanit']">
                ASHOK
            </h1>
            <div className="text-base">
                <ul className="hidden md:flex items-center justify-start gap-4">
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#home">Home</a>
                    </li>
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#about">About</a>
                    </li>
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#services">Services</a>
                    </li>
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <button className="md:hidden text-xl" onClick={()=>setIsOpen(true)}>
                    <FaBars />
                </button>
            </div>
            <aside className={`fixed top-0 right-0 w-[250px] h-full bg-white transition-all ease-linear ${isOpen ? "translate-x-0" : "translate-x-full"} p-2 z-50`}>
                <div className="flex flex-row-reverse">
                    <button className="rotate-45" onClick={()=>setIsOpen(false)}>
                        <FaPlus className="text-2xl text-red-400" />
                    </button>
                </div>
                <ul className="flex flex-col gap-4 p-2">
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-cyan-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#home">Home</a>
                    </li>
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-cyan-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#about">About</a>
                    </li>
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-cyan-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#services">Services</a>
                    </li>
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-cyan-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="relative overflow-hidden text-gray-500 hover:text-gray-700 after:content-[''] after:absolute
                    after:transition-all 
                    after:ease-linear after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-cyan-700 after:-translate-x-full hover:after:translate-x-0">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </aside>
        </nav>
    )
}
