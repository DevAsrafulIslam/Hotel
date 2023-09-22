import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Orders = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://hotel-server-8iwzhfidh-devasrafulislam.vercel.app/recipe")
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, []);
  console.log("recipe", recipe);

  return (
    <div className="card bg-base-100 shadow-xl">
      <h1 className="text-3xl text-center my-4">Chef Description</h1>
      <div className="flex gap-3 mx-4 ">
        <div className="card-title grid grid-cols-1 mx-auto">
          {recipe.map((item) => (
            <div className="border rounded-lg " key={recipe.id}>
              <div className="flex">
                <figure className=" h-8/12 w-4/12 rounded-lg relative">
                  <img src={item.recipe_picture} />
                </figure>
                <button className=" absolute bottom-12">Add to cart</button>
                <div className="  grid mx-auto  items-center ">
                  <div className="px-2 ">
                    <p className="mb-4">{item.recipe_name}</p>
                    <p>
                      <small>Cheeses: {item.cheeses_name}</small>
                    </p>
                    <p>
                      <small>Short Desc: {item.short_description} </small>
                    </p>
                    <p>
                      <small>Price: {item.price} </small>
                    </p>
                    <p>
                      <small>Rating: {item.rating} </small>
                    </p>
                    <div className="flex">
                      <Link
                        to=""
                        className="mt-4 bg-[#cf0606] text-white rounded-3xl px-3 py-2 flex items-center text-center mx-auto"
                      >
                        Order Cancel
                      </Link>
                      <Link
                        to=""
                        className="mt-4 bg-[#068ccf] text-white rounded-3xl px-3 py-2 flex items-center text-center mx-auto"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-6/12 border rounded-lg px-3 font-semibold text-center pt-2">
          Order Summary
          <div className=" divider mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
