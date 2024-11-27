
import { IoIosArrowDown } from "react-icons/io"
import Profile from "../../assets/profile.png"

const Navbar = () => {
  return (
    <div>
        <div>
            {/* logo section */}
            <div>
                <p className="text-3xl lg:text-4xl font-semibold">
                    FOOD <span className="text-primary">EAT</span>
                </p>
            </div>
            {/* Menu section */}
            <div>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                </ul>
                {/* login section */} 
                <div>
                    <img src={Profile} alt="" />
                    <IoIosArrowDown />
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Navbar
