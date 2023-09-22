import { useEffect, useState } from "react";
import { FaRegEye, FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("https://hotel-server-8iwzhfidh-devasrafulislam.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.error(error));
  }, []);
  // console.log("chef", chef);

  return (
    <div className="card ">
      <div className="card-body ">
        <h1 className="text-3xl text-center my-4">CHEF</h1>
        <div className="card-title md:grid-cols-2 grid sm:grid-cols-1 lg:grid-cols-3 mx-auto">
          {chef.map((item, index) => (
            <div className="border rounded-lg " key={index}>
              <div className="">
                <figure className=" rounded-lg relative">
                  <img src={item.chef.picture} />
                </figure>
                <p className="px-2">{item.chef.name}</p>
                <div className="flex justify-between  align-middle ">
                  <div className="px-2">
                    <p>
                      <small>Experience: {item.chef.years_of_experience}</small>
                    </p>
                    <p>
                      <small>Recipes: {item.chef.number_of_recipes} </small>
                    </p>
                    <div className="flex gap-4">
                      <small className="flex items-center gap-1">
                        <FaRegThumbsUp></FaRegThumbsUp>
                        {item.buttons.like_recipes}
                      </small>
                      <small className="flex items-center gap-1">
                        <FaRegEye></FaRegEye>
                        {item.buttons.view_recipes}
                      </small>
                    </div>
                  </div>

                  <button
                    to="/chefdetails"
                    className="  rounded-3xl py-1 h-10 mr-2 bg-[#1e95eb] px-2 text-end"
                  >
                    <Link to="/chefdetails">Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
