import { useState } from "react"
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { HiOutlineUser, HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";


export const Navbar = () => {

    let Links = [
       {name: 'Home', link:"/", key: 'home'},
       {name: 'Libros', link:"/books", key: 'libros'}, 
       //{name: 'Login', link:"/", key: 'login'},
    ]
    let [open, setOpen] = useState (false);
    return (
        <div className='shadow-md w-full top-0 left-0 fixed z-[100]'>
            <div className='md:px-10 py-3 px-7 md:flex justify-between items-center bg-white'>
                <Link to="/" className='no-underline'>
                    <div className='flex text-2xl cursor-pointer items-center gap-2'>
                        <ImBooks className='h-7 w-7 text-black'/>
                        <span className='font-bold text-black'> |LIBRERIA</span>
                    </div>
                </Link>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 mb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.key}>
                        <Link to={link.link} className='text-black hover:underline hover:underline-offset-8 duration-500 no-underline'>{link.name}</Link>
                    </li>))
                    }
                    {/* <li className="md:ml-8 md:my-0 my-7"><HiOutlineShoppingCart className='h-6 w-6 text-black'/></li> */}
                    <li className="md:ml-8 md:my-0 my-7">
                        <Link to="/admin"><HiOutlineUser className='h-6 w-6 text-black'/></Link>
                    </li>
                </ul>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open? <HiOutlineX className='text-black font-bold w-6 h-6'/> : <HiOutlineMenuAlt3 className='text-black font-bold w-6 h-6'/> 
                    }
                </div>
            </div>
        </div>
    );
};