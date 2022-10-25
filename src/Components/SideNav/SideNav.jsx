import { NavLink } from 'react-router-dom';
import {
    FaFacebook,
    FaPinterest,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

const SideNav = () => {
    const links = [
        {
            id: 1,
            path: '/rooms',
            text: 'ROOMS',
        },
        {
            id: 2,
            path: '/reserve',
            text: 'Reserve Form',
        },
        {
            id: 3,
            path: '/my-reservations',
            text: 'My Reservations',
        },
        {
            id: 4,
            path: '/add-room',
            text: 'Add Room',
        },

        {
            id: 5,
            path: '/delete-room',
            text: 'Delete Room',
        },

    ];
    return (

        <div className="flex flex-col h-screen  bg-white shadow w-60 justify-between">
            <div className="space-y-3">
                <div className="flex h-44 justify-center pt-5">
                    <h2 className="text-xl font-bold">EASY BOOKING</h2>
                </div>
                <div className="flex-1 pl-5">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {links.map((link) => (
                            <li className="">

                                <NavLink to={link.path}  key={link.id} className={({ isActive }) => (isActive ? 'active flex h-16 font-black text-xl items-center pl-4 space-x-3 bg-lime-500 text-white' : ' h-16 font-black text-xl flex items-center pl-4 space-x-3')}>
                                    {link.text}
                                </NavLink>

                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div className='flex justify-center'>
                    <a href="facebook.com" className='p-3'> <FaFacebook /></a>
                    <a href="instagram.com" className='p-3'><FaInstagram /></a>
                    <a href="linkedin.com" className='p-3'><FaLinkedinIn /></a>
                    <a href="twitter.com" className='p-3'><FaTwitter /></a>
                    <a href="pinterest.com" className='p-3'><FaPinterest /></a>
                </div>
                &copy; 2022 easybooking.
            </div>
        </div>
    );
}

export default SideNav;