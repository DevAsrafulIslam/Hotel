import { useEffect, useState } from "react";
import { FaArrowLeft, FaRegEye, FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefDetails = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("https://hotel-server-8iwzhfidh-devasrafulislam.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-3xl text-center my-4">Chef Description</h1>
        <div className="card-title grid grid-cols-1 mx-auto">
          {chef.map((product) => (
            <div key={product.id} className="border rounded-lg">
              <div className="flex">
                <figure className="rounded-lg relative">
                  <img src={product.chef.picture} alt="Chef" />
                </figure>
                <div className="grid products-center">
                  <div className="px-2">
                    <p className="mb-4">{product.chef.name}</p>
                    <p>
                      <small>
                        Experience: {product.chef.years_of_experience}
                      </small>
                    </p>
                    <p>
                      <small>Recipes: {product.chef.number_of_recipes}</small>
                    </p>
                    <p>
                      <small>{product.chef.description}</small>
                    </p>
                    <div className="flex gap-4">
                      <small className="flex products-center gap-1">
                        <FaRegThumbsUp />
                        {product.buttons.like_recipes}
                      </small>
                      <small className="flex products-center gap-1">
                        <FaRegEye />
                        {product.buttons.view_recipes}
                      </small>
                    </div>
                    <div className="flex items-center">
                      <Link
                        to="/cart"
                        className="mt-4 items-center bg-[#068ccf] rounded-3xl px-3 py-2 flex products-center text-center mx-auto"
                      >
                        <FaArrowLeft /> Go Back
                      </Link>{" "}
                      <Link
                        to="/order"
                        className="mt-4 bg-[#068ccf] rounded-3xl px-3 py-2 flex products-center text-center mx-auto"
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
      </div>
    </div>
  );
};

export default ChefDetails;
