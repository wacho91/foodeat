
import BannerImage from "../../assets/2.png";

const Banner = () => {
  return (
    <>
        <div>
            <div>
                {/* img section */}
                <div>
                    <img 
                        src={BannerImage} 
                        alt="" 
                    />
                </div>
                {/* text section */}
                <div>
                    <h1>Food Is Always Good</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus laboriosam vitae accusamus assumenda, nobis perferendis
                        ducimus! Itaque similique, recusandae nulla{" "}
                    </p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Banner
