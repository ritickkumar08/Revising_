import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaHireAHelper } from "react-icons/fa6";
import { PiSignInFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";



function NavBar(){
    return(
        <div>
            <nav className="flex justify-between border items-center px-12 py-3 shadow-sm">
                <h1 className="font-bold text-3xl text-orange-500 font-serif">SWIGGY</h1>

                <ul className="flex gap-5">
                    <div className="flex">
                        <span  className="mt-1 mr-0.5"><IoSearchSharp /></span>
                        <li ml-4>Search</li>
                    </div>
                    <div className="flex">
                        <span className="mt-1 mr-0.5"><BiSolidOffer /></span>
                        <li ml-4>Offer</li>
                    </div>
                    <div className="flex">
                        <span className="mt-1 mr-0.5"><FaHireAHelper /></span>
                        <li ml-4>Help</li>
                    </div>
                    <div className="flex">
                        <span className="mt-1 mr-0.5"><PiSignInFill /></span>
                        <li ml-4>SignIn</li>
                    </div>
                    <div className="flex">
                        <span className="mt-1 mr-0.5"><FaCartShopping /></span>
                        <li ml-4>Cart</li>
                    </div>
                </ul>
            </nav> 
        </div>
    )
}

export default NavBar