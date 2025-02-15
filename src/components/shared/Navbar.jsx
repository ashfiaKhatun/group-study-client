import { Link, NavLink, useNavigate } from "react-router-dom";
import proImg from '../../assets/user.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {

    const { signOutUser, user, loader } = useContext(AuthContext);

    const navigate = useNavigate();

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem("theme") : "light"
    );


    const handleChange = e => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }


    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector('html').setAttribute("data-theme", localTheme);
    }, [theme])

    const navList = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-assignments'>All Assignments</NavLink></li>

        {
            user &&
            <>
                <li><NavLink to='/add-assignment'>Add Assignment</NavLink></li>
                <li><NavLink to={`/my-assignments/email/${user.email}`}>My Assignment List</NavLink></li>
                <li><NavLink to={`/pending-assignments`}>Pending Assignment List</NavLink></li>
            </>

        }
    </>

    const handleSignOut = () => {
        signOutUser()
            .catch(error => console.log(error))
            
        navigate('/signin')
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <a href="/"><img src="https://i.ibb.co/YXg5Cv8/image.png" className="md:w-40 h-8 md:h-12 lg:ml-16 rounded-xl" alt="" /></a>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 font-bold ">
                    {navList}
                </ul>
            </div>

            <div className="navbar-end">

                <div className="mr-6 mt-2">
                    <label className="swap swap-rotate">


                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleChange} checked={theme === "light" ? false : true} className="theme-controller" value="synthwave" />

                        {/* sun icon */}

                        <CiLight className="swap-off fill-current w-8 h-8" />

                        {/* moon icon */}

                        <FaRegMoon className="swap-on fill-current w-8 h-8" />

                    </label>
                </div>

                {
                    user ?
                        <>
                            {
                                loader ? <span className="loading loading-dots loading-sm"></span> :
                                    <>
                                        <div className="mr-4">
                                            <a
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={user.displayName}
                                                data-tooltip-place="top"
                                            >
                                                <img src={user.photoURL} className="w-12 h-12 rounded-full" />
                                            </a>
                                            <Tooltip id="my-tooltip" />
                                        </div>


                                        <button className="btn bg-cyan-800 hover:bg-cyan-950 text-white" onClick={handleSignOut}>Sign Out</button>
                                    </>
                            }
                        </>
                        :
                        <>
                            {loader ? <span className="loading loading-dots loading-sm text-center"></span> :
                                <>
                                    <div className="avatar mr-4">
                                        <div className="w-12 rounded-full">
                                            <img src={proImg} />
                                        </div>
                                    </div>
                                    <Link to='/signin'><button className="btn bg-cyan-800 text-white">Sign In</button></Link>
                                </>}
                        </>
                }
            </div>

        </div>
    );
};

export default Navbar;