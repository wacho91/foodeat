import { CiDeliveryTruck } from "react-icons/ci"
import { FaMobileScreen } from "react-icons/fa6"
import { MdFoodBank, MdOutlineFastfood } from "react-icons/md"


const OurServices = () => {
  return (
    <div>
        {/* header section */}
        <div>
            <h1>Our Services</h1>
        </div>
        {/* icons section */}
        <div>
            <div>
                <FaMobileScreen />
                <p>Online Booking</p>
            </div>
            <div>
                <MdOutlineFastfood />
                <p>Fast Food</p>
            </div>
            <div>
                <MdFoodBank />
                <p>Healthy Food</p>
            </div>
            <div>
                <CiDeliveryTruck />
                <p>Delivery</p>
            </div>
        </div>
    </div>
  )
}

export default OurServices
