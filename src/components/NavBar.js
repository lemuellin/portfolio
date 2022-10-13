import { useState, useRef } from 'react';
import menuIcon from '../assets/menu.png';
import resumePDF from '../assets/Lemuel_Lin_Resume.pdf';

const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const menuRef = useRef();

    const closeOpenMenus = (e)=>{
        e.preventDefault();
        if(menuRef.current && menu && !menuRef.current.contains(e.target) && (e.target.id !== 'menuIcon')){
            setMenu(false);
        }
    }

    document.addEventListener('mousedown',closeOpenMenus)


    return (
        <div className=" fixed top-0 h-12 w-screen m-0 flex justify-center items-center bg-primary shadow-md">
            <nav className="flex items-center justify-between flex-wrap font-redhat p-4">
                <div className="fixed left-10 flex items-center flex-shrink-0 text-black mr-6">
                    <span onClick={(e) => {e.preventDefault(); document.getElementById("welcome").scrollIntoView({behavior: 'smooth'}); setMenu(false);}} className=" font-extrabold text-xl tracking-tight cursor-pointer">Lemuel Lin</span>
                </div>
                <div className="fixed right-10 lg:hidden">
                    <button onClick={(e) => {e.preventDefault(); setMenu(!menu);}} className="flex items-center px-2 py-1 border-0 rounded text-black border-black hover:bg-slate-200 cursor-pointer">
                        <img id="menuIcon" className="h-6 w-6" src={menuIcon} alt={"menu"}/>
                    </button>
                </div>
                <div id="menuID" ref={menuRef} className={(menu ? " flex " : " hidden ") + " fixed top-12 flex-col rounded-xl bg-slate-200 px-12 py-6 right-10 lg:flex lg:flex-row lg:py-0 lg:px-0 lg:bg-transparent lg:top-auto gap-4 font-redhat font-bold items-center" }>
                    <div onClick={(e) => {e.preventDefault(); document.getElementById("skills").scrollIntoView({behavior: 'smooth'}); setMenu(false);}} className=" py-2 w-48 leading-none text-center rounded hover:border-transparent hover:bg-yellow-200  lg:px-4 lg:w-auto lg:hover:bg-slate-200 cursor-pointer">
                        Skills
                    </div>
                    <div onClick={(e) => {e.preventDefault(); document.getElementById("projects").scrollIntoView({behavior: 'smooth'}); setMenu(false);}} className=" py-2 w-48 leading-none text-center rounded hover:border-transparent hover:bg-yellow-200  lg:px-4 lg:w-auto lg:hover:bg-slate-200 cursor-pointer">
                        Projects
                    </div>
                    <div onClick={(e) => {e.preventDefault(); document.getElementById("experiences").scrollIntoView({behavior: 'smooth'}); setMenu(false);}} className=" py-2 w-48 leading-none text-center rounded hover:border-transparent hover:bg-yellow-200  lg:px-4 lg:w-auto lg:hover:bg-slate-200 cursor-pointer">
                        Experiences
                    </div>
                    <div onClick={(e) => {e.preventDefault(); document.getElementById("about").scrollIntoView({behavior: 'smooth'}); setMenu(false);}} className=" py-2 w-48 leading-none text-center rounded hover:border-transparent hover:bg-yellow-200  lg:px-4 lg:w-auto lg:hover:bg-slate-200 cursor-pointer">
                        About
                    </div>
                    <div onClick={(e) => {e.preventDefault(); document.getElementById("contact").scrollIntoView({behavior: 'smooth'}); setMenu(false);}} className=" py-2 w-48 leading-none text-center rounded hover:border-transparent hover:bg-yellow-200  lg:px-4 lg:w-auto lg:hover:bg-slate-200 cursor-pointer">
                        Contact
                    </div>
                    <div onClick={(e)=>{e.preventDefault(); window.open(resumePDF);}} className="px-4 py-2 leading-none border rounded border-black hover:border-transparent hover:bg-yellow-200 lg:hover:bg-slate-200 cursor-pointer">
                        Resume
                    </div>
                </div>
            </nav>
        </div>
    );
  }
  
  export default NavBar;