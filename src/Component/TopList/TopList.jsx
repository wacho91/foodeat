
import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";

const FoodData = [
    {
      image: Image1,
      rating: "⭐⭐⭐⭐⭐",
      price: "$10.99",
      name: "Food Name 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: Image2,
      rating: "⭐⭐⭐⭐⭐",
      price: "$10.99",
      name: "Food Name 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: Image3,
      rating: "⭐⭐⭐⭐⭐",
      price: "$10.99",
      name: "Food Name 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const TopList = () => {
  return (
    <div>
        {/* header section */}
        <div>
            <h1>Top List</h1>
            <p>Our top list</p>
        </div>
        {/* card section */}
        <div>
            {FoodData.map((item, index) => (
                <div key={index}>
                    <img 
                        src={item.image} 
                        alt="" 
                    />
                    <div>
                        <p>{item.rating}</p>
                        <p>{item.name}</p>
                        <p>{item.desc}</p>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopList
