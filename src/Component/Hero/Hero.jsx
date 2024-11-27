
import HeroImg from "../../assets/1.png";

const Hero = () => {
  return (
    <div>
        <div>
            {/* text section */}
            <div>
                <h1>
                    Delicious Food Is Waiting For You
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                    assumenda qui ipsam id officiis modi cumque minus dolores placeat
                    explicabo.
                </p>
                <div>
                    <button>
                        Food Menu
                    </button>
                    <button>
                        Book Table
                    </button>
                </div>
            </div>
            {/* image section */}
            <div>
                <img 
                    src={HeroImg} 
                    alt="" 
                    className="animate-spin-slow img-shadow w-[400px] mx-auto"
                />
            </div>
        </div>
    </div>
  )
}

export default Hero
